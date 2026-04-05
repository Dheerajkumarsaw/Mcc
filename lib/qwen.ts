import { ScrapedMeta, CampaignContent, ChannelVisual } from "./types";

const QWEN_API_URL =
  "https://api.osmapi.com/v1/chat/completions";

const SYSTEM_PROMPT = `You are an expert digital marketing copywriter and creative director. You create compelling, conversion-focused marketing content along with visual concepts.

CRITICAL RULE: Every single piece of content you generate — every tweet, the email, the Facebook post, and the Instagram caption — MUST contain the exact affiliate link provided by the user. Never omit the affiliate link from any content piece. This is the most important requirement.

You MUST respond with valid JSON only — no markdown, no code fences, no extra text. The JSON must match this exact structure:

{
  "email": "A short promotional email snippet (2-3 paragraphs with a subject line, body, and a clear call to action including the affiliate link)",
  "twitter": ["Tweet 1 with affiliate link (max 280 chars)", "Tweet 2 with affiliate link (max 280 chars)", "Tweet 3 with affiliate link (max 280 chars)"],
  "instagram": "An engaging Instagram caption with relevant hashtags and the affiliate link",
  "facebook": "An engaging Facebook post (2-3 paragraphs) that tells a story, encourages engagement, and includes the affiliate link",
  "visuals": {
    "email": {
      "slogan": "A short catchy marketing slogan for the email campaign (5-10 words max)",
      "imagePrompt": "A detailed text-to-image prompt describing the perfect hero image for this email campaign. Include style, mood, colors, composition, and subject matter. Make it specific and vivid so it can be used in Midjourney or DALL-E."
    },
    "twitter": {
      "slogan": "A punchy hook for Twitter visual (5-8 words max)",
      "imagePrompt": "A detailed text-to-image prompt for a Twitter post image. Should be eye-catching, bold, and work in a square or 16:9 format. Include style, mood, and visual elements."
    },
    "instagram": {
      "slogan": "An Instagram-worthy catchy phrase (5-8 words max)",
      "imagePrompt": "A detailed text-to-image prompt for an Instagram post image. Should be aesthetically beautiful, lifestyle-oriented, and Instagram-worthy. Include style, colors, mood, and composition for a square format."
    },
    "facebook": {
      "slogan": "A compelling Facebook ad hook (5-10 words max)",
      "imagePrompt": "A detailed text-to-image prompt for a Facebook post image. Should be engaging, warm, and shareable. Include style, mood, colors, and subject matter for a landscape or square format."
    }
  }
}`;

export async function generateCampaign(
  meta: ScrapedMeta,
  affiliateLink: string
): Promise<CampaignContent> {
  const apiKey = process.env.OSM_API_KEY;
  if (!apiKey) {
    throw new Error("OSM_API_KEY is not configured");
  }

  const userPrompt = `Create marketing content for the following product:

Title: ${meta.title}
Description: ${meta.description}
Affiliate Link: ${affiliateLink}

Generate an email snippet, 3 Twitter posts, an Instagram caption, and a Facebook post. Also generate for EACH channel: a short catchy marketing slogan and a detailed text-to-image prompt that could be used in Midjourney/DALL-E to create the perfect accompanying visual.

IMPORTANT: Every single piece of content (each tweet individually, the email, the Facebook post, and the Instagram caption) MUST include the exact affiliate link: ${affiliateLink}. Make the tone enthusiastic but professional.`;

  const response = await fetch(QWEN_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "qwen3.5-397b-a17b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Qwen API error:", response.status, errorBody);
    throw new Error(`Qwen API returned ${response.status}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("Empty response from Qwen API");
  }

  return parseCampaignContent(content, affiliateLink, meta.title);
}

function makeDefaultVisual(channel: string, productTitle: string): ChannelVisual {
  return {
    slogan: `Discover ${productTitle}`,
    imagePrompt: `A professional marketing ${channel} image for "${productTitle}". Clean, modern design with vibrant colors, product-focused composition, high quality commercial photography style, 4k resolution.`,
  };
}

function parseVisual(raw: unknown, channel: string, productTitle: string): ChannelVisual {
  if (
    raw &&
    typeof raw === "object" &&
    "slogan" in raw &&
    "imagePrompt" in raw &&
    typeof (raw as ChannelVisual).slogan === "string" &&
    typeof (raw as ChannelVisual).imagePrompt === "string"
  ) {
    return {
      slogan: (raw as ChannelVisual).slogan,
      imagePrompt: (raw as ChannelVisual).imagePrompt,
    };
  }
  return makeDefaultVisual(channel, productTitle);
}

function parseCampaignContent(raw: string, affiliateLink: string, productTitle: string): CampaignContent {
  let text = raw.trim();

  // Strip markdown code fences if present
  text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");

  const parsed = JSON.parse(text);

  if (
    typeof parsed.email !== "string" ||
    !Array.isArray(parsed.twitter) ||
    typeof parsed.instagram !== "string" ||
    typeof parsed.facebook !== "string"
  ) {
    throw new Error("Invalid response structure from AI");
  }

  // Ensure affiliate link is present in every content piece
  let email: string = parsed.email;
  if (!email.includes(affiliateLink)) {
    email += `\n\nCheck it out here: ${affiliateLink}`;
  }

  const twitter: string[] = parsed.twitter.map((tweet: string) => {
    const t = String(tweet);
    if (!t.includes(affiliateLink)) {
      const withLink = `${t} ${affiliateLink}`;
      return withLink.length <= 280 ? withLink : `${t.slice(0, 280 - affiliateLink.length - 2)} ${affiliateLink}`;
    }
    return t;
  });

  let instagram: string = parsed.instagram;
  if (!instagram.includes(affiliateLink)) {
    instagram += `\n\n${affiliateLink}`;
  }

  let facebook: string = parsed.facebook || "";
  if (!facebook) {
    facebook = `Check out this amazing product! ${affiliateLink}`;
  } else if (!facebook.includes(affiliateLink)) {
    facebook += `\n\nLearn more: ${affiliateLink}`;
  }

  // Parse visuals with fallbacks
  const rawVisuals = parsed.visuals || {};
  const visuals = {
    email: parseVisual(rawVisuals.email, "email", productTitle),
    twitter: parseVisual(rawVisuals.twitter, "Twitter", productTitle),
    instagram: parseVisual(rawVisuals.instagram, "Instagram", productTitle),
    facebook: parseVisual(rawVisuals.facebook, "Facebook", productTitle),
  };

  return { email, twitter, instagram, facebook, visuals };
}

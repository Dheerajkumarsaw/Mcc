import { NextResponse } from "next/server";
import { scrapeProductMeta } from "@/lib/scraper";
import { generateCampaign } from "@/lib/qwen";
import { GenerateResponse } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productUrl, affiliateLink } = body;

    if (!productUrl || !affiliateLink) {
      return NextResponse.json<GenerateResponse>(
        { success: false, error: "Both product URL and affiliate link are required." },
        { status: 400 }
      );
    }

    if (!/^https?:\/\//i.test(productUrl)) {
      return NextResponse.json<GenerateResponse>(
        { success: false, error: "Please enter a valid URL starting with http:// or https://." },
        { status: 400 }
      );
    }

    if (!process.env.OSM_API_KEY) {
      console.error("OSM_API_KEY is not set");
      return NextResponse.json<GenerateResponse>(
        { success: false, error: "Server configuration error. Please contact the administrator." },
        { status: 500 }
      );
    }

    let meta;
    try {
      meta = await scrapeProductMeta(productUrl);
    } catch (err) {
      console.error("Scraping failed:", err);
      return NextResponse.json<GenerateResponse>(
        { success: false, error: "Could not fetch the provided URL. Please check the link and try again." },
        { status: 422 }
      );
    }

    let campaign;
    try {
      campaign = await generateCampaign(meta, affiliateLink);
    } catch (err) {
      console.error("AI generation failed:", err);
      return NextResponse.json<GenerateResponse>(
        { success: false, error: "Failed to generate marketing content. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json<GenerateResponse>({ success: true, data: campaign });
  } catch {
    return NextResponse.json<GenerateResponse>(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}

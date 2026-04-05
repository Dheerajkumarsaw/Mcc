export interface GenerateRequest {
  productUrl: string;
  affiliateLink: string;
}

export interface ScrapedMeta {
  title: string;
  description: string;
}

export interface ChannelVisual {
  slogan: string;
  imagePrompt: string;
}

export interface CampaignContent {
  email: string;
  twitter: string[];
  instagram: string;
  facebook: string;
  visuals: {
    email: ChannelVisual;
    twitter: ChannelVisual;
    instagram: ChannelVisual;
    facebook: ChannelVisual;
  };
}

export type GenerateResponse =
  | { success: true; data: CampaignContent }
  | { success: false; error: string };

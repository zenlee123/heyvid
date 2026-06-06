export type HeyVidFormat =
  | "text-to-video"
  | "image-to-video"
  | "video-to-video"
  | "text-to-image"
  | "image-to-image"
  | "avatar"
  | "lip-sync";

export type HeyVidAspectRatio =
  | "1:1"
  | "4:3"
  | "3:4"
  | "16:9"
  | "9:16"
  | "21:9"
  | "adaptive";

export interface HeyVidPreset {
  name: string;
  scenePlan: string;
  visualDirection: string;
  suggestedFormats: HeyVidFormat[];
}

export interface HeyVidBriefInput {
  title: string;
  audience: string;
  goal: string;
  format: HeyVidFormat;
  style?: string;
  durationSeconds?: number;
  aspectRatio?: HeyVidAspectRatio;
  preset?: HeyVidPreset;
  callToAction?: string;
  negativePrompt?: string;
}

export interface HeyVidBrief extends Required<Omit<HeyVidBriefInput, "preset" | "style" | "durationSeconds" | "aspectRatio" | "callToAction" | "negativePrompt">> {
  style: string;
  durationSeconds: number;
  aspectRatio: HeyVidAspectRatio;
  preset: HeyVidPreset;
  callToAction?: string;
  negativePrompt?: string;
}

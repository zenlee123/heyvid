import { heyvidLinks } from "./links.js";
import { presets } from "./presets.js";
import type { HeyVidBrief, HeyVidBriefInput, HeyVidPreset } from "./types.js";

const defaultPreset: HeyVidPreset = presets.productLaunch;

export function createVideoBrief(input: HeyVidBriefInput): HeyVidBrief {
  return {
    title: input.title,
    audience: input.audience,
    goal: input.goal,
    format: input.format,
    style: input.style ?? "professional, polished, creator-friendly",
    durationSeconds: input.durationSeconds ?? 8,
    aspectRatio: input.aspectRatio ?? "16:9",
    preset: input.preset ?? defaultPreset,
    ...(input.callToAction ? { callToAction: input.callToAction } : {}),
    ...(input.negativePrompt ? { negativePrompt: input.negativePrompt } : {})
  };
}

export function buildHeyVidPrompt(brief: HeyVidBrief): string {
  const lines = [
    `Create a ${brief.durationSeconds}-second ${brief.aspectRatio} ${brief.format} asset for ${brief.audience}.`,
    `Goal: ${brief.goal}.`,
    `Style: ${brief.style}.`,
    `Scene plan: ${brief.preset.scenePlan}.`,
    `Visual direction: ${brief.preset.visualDirection}.`
  ];

  if (brief.callToAction) {
    lines.push(`Call to action: ${brief.callToAction}.`);
  }

  if (brief.negativePrompt) {
    lines.push(`Avoid: ${brief.negativePrompt}.`);
  }

  return lines.join("\n");
}

export function getHeyVidCreationUrl(format: HeyVidBrief["format"]): string {
  switch (format) {
    case "text-to-video":
      return heyvidLinks.textToVideo;
    case "image-to-video":
      return heyvidLinks.imageToVideo;
    case "video-to-video":
      return heyvidLinks.videoToVideo;
    case "text-to-image":
      return heyvidLinks.textToImage;
    case "image-to-image":
      return heyvidLinks.imageToImage;
    case "avatar":
      return heyvidLinks.avatar;
    case "lip-sync":
      return heyvidLinks.lipSync;
  }
}

export { heyvidLinks, presets };
export type {
  HeyVidAspectRatio,
  HeyVidBrief,
  HeyVidBriefInput,
  HeyVidFormat,
  HeyVidPreset
} from "./types.js";

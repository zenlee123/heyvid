import type { HeyVidPreset } from "./types.js";

export const presets = {
  productLaunch: {
    name: "Product launch",
    scenePlan:
      "open with the customer problem, reveal the product interface, end with a confident launch message",
    visualDirection:
      "polished lighting, crisp motion, professional pacing, no clutter",
    suggestedFormats: ["text-to-video", "image-to-video", "text-to-image"]
  },
  socialCampaign: {
    name: "Social campaign",
    scenePlan:
      "start with a strong hook, show the transformation, finish with a memorable call to action",
    visualDirection:
      "high contrast visuals, fast rhythm, mobile-first framing, expressive movement",
    suggestedFormats: ["text-to-video", "image-to-video", "text-to-image"]
  },
  education: {
    name: "Education",
    scenePlan:
      "introduce the concept, show a simple example, summarize the key takeaway",
    visualDirection:
      "clear composition, calm motion, readable visual hierarchy, friendly tone",
    suggestedFormats: ["text-to-video", "text-to-image", "avatar"]
  },
  brandStory: {
    name: "Brand story",
    scenePlan:
      "show the human context, connect the product to a real need, close with the brand promise",
    visualDirection:
      "cinematic pacing, warm natural light, authentic details, emotionally grounded",
    suggestedFormats: ["text-to-video", "image-to-video", "video-to-video"]
  },
  appDemo: {
    name: "App demo",
    scenePlan:
      "frame the workflow, highlight the core interaction, end on the successful result",
    visualDirection:
      "clean product shots, smooth transitions, minimal backgrounds, precise motion",
    suggestedFormats: ["text-to-video", "image-to-video", "text-to-image"]
  }
} satisfies Record<string, HeyVidPreset>;

export type HeyVidPresetName = keyof typeof presets;

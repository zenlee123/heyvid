export const heyvidLinks = {
  home: "https://heyvid.ai",
  video: "https://heyvid.ai/ai-video",
  textToVideo: "https://heyvid.ai/ai-video/text-to-video",
  imageToVideo: "https://heyvid.ai/ai-video/image-to-video",
  videoToVideo: "https://heyvid.ai/ai-video/video-to-video",
  videoTransition: "https://heyvid.ai/ai-video/video-transition",
  referenceToVideo: "https://heyvid.ai/ai-video/reference-to-video",
  avatar: "https://heyvid.ai/ai-video/ai-avatar",
  lipSync: "https://heyvid.ai/ai-video/lip-sync",
  image: "https://heyvid.ai/ai-image",
  textToImage: "https://heyvid.ai/ai-image/text-to-image",
  imageToImage: "https://heyvid.ai/ai-image/image-to-image"
} as const;

export type HeyVidLinkKey = keyof typeof heyvidLinks;

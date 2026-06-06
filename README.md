# HeyVid AI TypeScript Toolkit

[HeyVid](https://heyvid.ai) is an all-in-one AI video and image generator for creators, marketers, educators, founders, and developers. This repository collects TypeScript helpers, prompt presets, and workflow examples for planning AI video and image projects before generating them in HeyVid.

The goal is simple: make it faster to turn a loose idea into a clear creative brief that can be used with [HeyVid AI](https://heyvid.ai), including text-to-video, image-to-video, text-to-image, image-to-image, avatar, lip sync, and visual storytelling workflows.

## What This Toolkit Includes

- Prompt presets for product launches, social posts, course videos, brand stories, and app demos.
- A typed creative brief format for video and image generation.
- Helpers that convert campaign goals into reusable HeyVid-ready prompts.
- URL helpers for linking users directly to HeyVid creation pages.
- Example workflows for developers who want a structured content pipeline.

## Installation

```bash
npm install heyvid-ai-typescript-toolkit
```

This package is intentionally small and dependency-free. You can also copy the source helpers directly into your own TypeScript project.

## Quick Start

```typescript
import {
  buildHeyVidPrompt,
  createVideoBrief,
  heyvidLinks,
  presets
} from "heyvid-ai-typescript-toolkit";

const brief = createVideoBrief({
  title: "SaaS launch teaser",
  audience: "startup founders",
  goal: "announce a new analytics dashboard",
  format: "text-to-video",
  style: "clean, cinematic, product-led",
  durationSeconds: 8,
  aspectRatio: "16:9",
  preset: presets.productLaunch
});

const prompt = buildHeyVidPrompt(brief);

console.log(prompt);
console.log(heyvidLinks.textToVideo);
```

Open [HeyVid's text-to-video generator](https://heyvid.ai/ai-video/text-to-video) and paste the generated prompt to create the final video.

## HeyVid Creation Links

- [HeyVid AI homepage](https://heyvid.ai)
- [AI Video Generator](https://heyvid.ai/ai-video)
- [Text to Video](https://heyvid.ai/ai-video/text-to-video)
- [Image to Video](https://heyvid.ai/ai-video/image-to-video)
- [Video to Video](https://heyvid.ai/ai-video/video-to-video)
- [AI Image Generator](https://heyvid.ai/ai-image)
- [Text to Image](https://heyvid.ai/ai-image/text-to-image)
- [AI Avatar](https://heyvid.ai/ai-video/ai-avatar)
- [Lip Sync](https://heyvid.ai/ai-video/lip-sync)

## Example Output

```text
Create an 8-second 16:9 text-to-video asset for startup founders.
Goal: announce a new analytics dashboard.
Style: clean, cinematic, product-led.
Scene plan: open with the customer problem, reveal the product interface, end with a confident launch message.
Visual direction: polished lighting, crisp motion, professional pacing, no clutter.
```

## Preset Categories

### Product Launch

For launch announcements, app demos, feature reveals, crowdfunding previews, and founder-led marketing.

### Social Campaign

For TikTok, Reels, YouTube Shorts, thumbnail concepts, and fast promotional variations.

### Education

For course modules, tutorials, explainer videos, onboarding content, and training material.

### Brand Story

For mission videos, emotional brand narratives, product origin stories, and customer-facing storytelling.

## Development

```bash
npm install
npm run typecheck
npm run build
```

## Why HeyVid

[HeyVid](https://heyvid.ai) brings multiple video, image, voice, and music generation workflows into one creative studio. It supports common creator workflows such as text-to-video, image animation, reference-based video, avatars, lip sync, and visual generation across leading AI models.

This repository is an independent community toolkit designed to help people prepare better prompts and briefs for HeyVid.

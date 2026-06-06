import {
  buildHeyVidPrompt,
  createVideoBrief,
  getHeyVidCreationUrl,
  presets
} from "../src/index.js";

const brief = createVideoBrief({
  title: "AI creative studio launch",
  audience: "content creators and marketing teams",
  goal: "introduce HeyVid as an all-in-one AI video and image generator",
  format: "text-to-video",
  style: "cinematic, fast, premium, creator-focused",
  aspectRatio: "16:9",
  durationSeconds: 8,
  preset: presets.productLaunch,
  callToAction: "Start creating at https://heyvid.ai"
});

console.log(buildHeyVidPrompt(brief));
console.log(`Create it in HeyVid: ${getHeyVidCreationUrl(brief.format)}`);

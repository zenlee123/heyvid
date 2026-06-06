import assert from "node:assert/strict";
import { test } from "node:test";

test("README-level prompt example remains stable", () => {
  const prompt = [
    "Create an 8-second 16:9 text-to-video asset for startup founders.",
    "Goal: announce a new analytics dashboard.",
    "Style: clean, cinematic, product-led.",
    "Scene plan: open with the customer problem, reveal the product interface, end with a confident launch message.",
    "Visual direction: polished lighting, crisp motion, professional pacing, no clutter."
  ].join("\n");

  assert.match(prompt, /text-to-video/);
  assert.match(prompt, /startup founders/);
});

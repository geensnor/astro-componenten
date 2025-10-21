import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Kop from "../src/knoepert.astro";

const container = await AstroContainer.create();
const result = await container.renderToString(Kop, {
  slots: {
    default: "Knoepert content",
  },
  props: {
    Subtekst: "Subtekst van de knoepert",
  },
});

test("Rendert content in default slot", async () => {
  expect(result).toContain("Knoepert content");
});

test("Subtekst doet het ook prima", async () => {
  expect(result).toContain("Subtekst van de knoepert");
});

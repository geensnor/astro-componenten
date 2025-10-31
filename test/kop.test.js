import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Kop from "../src/components/kop.astro";

const container = await AstroContainer.create();
const result = await container.renderToString(Kop, {
  slots: {
    default: "Kop content",
  },
  props: {
    Type: "h3",
  },
});

test("Rendert content in default slot", async () => {
  expect(result).toContain("Kop content");
});

test("Is een h3 als je dat graag wilt", async () => {
  expect(result).toContain("<h3");
});

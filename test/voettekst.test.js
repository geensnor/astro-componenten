import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Kop from "../src/voettekst.astro";
import Voettekst from "../src/voettekst.astro";

const container = await AstroContainer.create();
const result = await container.renderToString(Voettekst, {
  props: {
    githubURL: "https://www.geensnor.nl",
  },
});

test("GitHub URL doet het", async () => {
  expect(result).toContain("https://www.geensnor.nl");
});

test("GitHub logo wordt getoond", async () => {
  expect(result).toContain("GitHub-Mark-120px-plus.png");
});

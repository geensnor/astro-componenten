import { expect } from "chai";
import { getComponentOutput } from "astro-component-tester";

describe("Voettekst test", () => {
  // Simple test to get us started with the syntax

  // This show us how to write a test for our component's output using astro-component-tester
  describe("Links", async () => {
    let component;

    // First get the component's output, this returns an object containing the generated html (`.html`)
    before(async () => {
      component = await getComponentOutput("./src/voettekst.astro", {
        githubURL: "https://www.github.com",
      });
    });

    // Unless you modified /src/Component.astro, this should pass, as the component is empty apart from the frontmatter and new lines
    it("Voettekst component bevat link naar geensnor.nl", () => {
      expect(component.html).to.include("https://www.geensnor.nl");
    });
    it("Voettekst component bevat github link", () => {
      expect(component.html).to.include("https://www.github.com");
    });
  });
});

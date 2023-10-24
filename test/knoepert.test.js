import { expect } from "chai";
import { getComponentOutput } from "astro-component-tester";

describe("Knoepert test", () => {
  // Simple test to get us started with the syntax

  // This show us how to write a test for our component's output using astro-component-tester
  describe("Knoepert wordt getoond", async () => {
    let component;

    // First get the component's output, this returns an object containing the generated html (`.html`)
    before(async () => {
      component = await getComponentOutput("./src/knoepert.astro", {
        subtekst: "Subtekst van de Knoepert",
      });
    });

    // Unless you modified /src/Component.astro, this should pass, as the component is empty apart from the frontmatter and new lines
    it("Knoepert subtekst werkt", () => {
      expect(component.html).to.include("Knoepert");
    });
  });
});

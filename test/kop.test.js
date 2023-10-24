import { expect } from "chai";
import { getComponentOutput } from "astro-component-tester";

describe("Kop test", () => {
  // Simple test to get us started with the syntax

  // This show us how to write a test for our component's output using astro-component-tester
  describe("H2 wordt getoond", async () => {
    let component;

    // First get the component's output, this returns an object containing the generated html (`.html`)
    before(async () => {
      component = await getComponentOutput("./src/kop.astro", {
        Type: "h2",
      });
    });

    // Unless you modified /src/Component.astro, this should pass, as the component is empty apart from the frontmatter and new lines
    it("Kop is een H2", () => {
      expect(component.html).to.include("<h2");
    });
  });
});

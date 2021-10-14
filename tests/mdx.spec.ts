import { getBlogPostSlugs } from "../lib/mdx";

describe("getBlogPostSlugs ", () => {
  it("should return files from blog data folder", () => {
    const fileNames = getBlogPostSlugs();
    expect(fileNames.length).toBeGreaterThan(0);
  });
});

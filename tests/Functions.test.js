import { describe, it, expect } from "vitest";
import { rot47 } from "../src/functions";

describe("ROT47 Converter", () => {
  it("converts text to ROT47", () => {
    const input = "Hello, World!";
    const output = rot47(input);
    expect(output).toBe("w6==@[ (@C=5P");
  });

  it("converts ROT47 back to text", () => {
    const input = "w6==@[ (@C=5P";
    const output = rot47(input);
    expect(output).toBe("Hello, World!");
  });
});

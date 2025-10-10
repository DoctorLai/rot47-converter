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

  it("handles empty string", () => {
    const input = "";
    const output = rot47(input);
    expect(output).toBe("");
  });

  it("handles string with no ROT47 characters", () => {
    const input = "12345";
    const output = rot47(input);
    expect(output).toBe("`abcd");
  });

  it("handles full ASCII range", () => {
    const input = String.fromCharCode(
      ...Array.from({ length: 95 }, (_, i) => i + 33),
    );
    const output = rot47(input);
    const reverted = rot47(output);
    expect(reverted).toBe(input);
  });
});

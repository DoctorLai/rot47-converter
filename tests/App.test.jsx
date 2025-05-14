import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders ROT47 Converter", () => {
  render(<App />);
  const linkElement = screen.getByText(/ROT47 Cipher Encoder\/Decoder/i);
  expect(linkElement).to.exist;
});

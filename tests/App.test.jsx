import {
  render,
  screen,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../src/App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    // Neutralize any local .env so version tests are deterministic.
    vi.stubEnv("VITE_APP_VERSION", "");
    vi.stubEnv("VITE_COMMIT_HASH", "");
    document.documentElement.dir = "ltr";
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("renders the ROT47 title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /ROT47 Cipher Encoder\/Decoder/i }),
    ).toBeInTheDocument();
  });

  it("shows the initial demo text and its character count", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox", {
      name: /ROT47 Cipher Encoder\/Decoder/i,
    });
    expect(textarea).toHaveValue("w6==@[ (@C=5P");
    expect(screen.getByText(/13 characters/)).toBeInTheDocument();
  });

  it("applies ROT47 to the current text", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox");
    fireEvent.click(screen.getByRole("button", { name: /Apply ROT47/i }));
    expect(textarea).toHaveValue("Hello, World!");
  });

  it("clears the text", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox");
    fireEvent.click(screen.getByRole("button", { name: /Clear/i }));
    expect(textarea).toHaveValue("");
  });

  it("inserts two spaces when Tab is pressed", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "ab" } });
    textarea.selectionStart = textarea.selectionEnd = 1;
    fireEvent.keyDown(textarea, { key: "Tab" });
    expect(textarea).toHaveValue("a  b");
  });

  it("applies ROT47 on Ctrl+Enter", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "12345" } });
    fireEvent.keyDown(textarea, { key: "Enter", ctrlKey: true });
    expect(textarea).toHaveValue("`abcd");
  });

  it("applies ROT47 on Cmd+Enter", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "12345" } });
    fireEvent.keyDown(textarea, { key: "Enter", metaKey: true });
    expect(textarea).toHaveValue("`abcd");
  });

  it("toggles dark mode and persists it", () => {
    render(<App />);
    const app = document.querySelector(".app");
    expect(app).not.toHaveClass("dark");
    fireEvent.click(screen.getByRole("button", { name: /Dark Mode/i }));
    expect(document.querySelector(".app")).toHaveClass("dark");
    expect(localStorage.getItem("darkMode")).toBe("true");
  });

  it("restores dark mode from localStorage", () => {
    localStorage.setItem("darkMode", "true");
    render(<App />);
    expect(document.querySelector(".app")).toHaveClass("dark");
    expect(
      screen.getByRole("button", { name: /Light Mode/i }),
    ).toBeInTheDocument();
  });

  it("copies the text to the clipboard and shows feedback", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /^📋 Copy/i }));
    expect(writeText).toHaveBeenCalledWith("w6==@[ (@C=5P");
    expect(
      await screen.findByRole("button", { name: /Copied/i }),
    ).toBeInTheDocument();
  });

  it("clears pending copy feedback timers when unmounted", async () => {
    vi.useFakeTimers();
    const clearTimeoutSpy = vi.spyOn(globalThis, "clearTimeout");
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    const { unmount } = render(<App />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^📋 Copy/i }));
    });

    const clearTimeoutCallsBeforeUnmount = clearTimeoutSpy.mock.calls.length;
    unmount();
    expect(clearTimeoutSpy.mock.calls.length).toBeGreaterThan(
      clearTimeoutCallsBeforeUnmount,
    );
  });

  it("handles clipboard failures gracefully", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /^📋 Copy/i }));
    await Promise.resolve();
    expect(writeText).toHaveBeenCalled();
    expect(
      screen.getByRole("button", { name: /^📋 Copy/i }),
    ).toBeInTheDocument();
  });

  it("switches the interface language and persists the choice", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "es" },
    });
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Codificador/Decodificador de cifrado ROT47",
    );
    expect(localStorage.getItem("lang")).toBe("es");
  });

  it("sets text direction to RTL for right-to-left languages", () => {
    render(<App />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "ar" } });
    expect(document.documentElement.dir).toBe("rtl");
    fireEvent.change(select, { target: { value: "en" } });
    expect(document.documentElement.dir).toBe("ltr");
  });

  it("shows the version with a commit hash when configured", () => {
    vi.stubEnv("VITE_APP_VERSION", "2026-07-13");
    vi.stubEnv("VITE_COMMIT_HASH", "abc1234");
    render(<App />);
    expect(
      screen.getByText(/Version: 2026-07-13 \(abc1234\)/),
    ).toBeInTheDocument();
  });

  it("shows the version without a commit hash", () => {
    vi.stubEnv("VITE_APP_VERSION", "2026-07-13");
    render(<App />);
    const version = screen.getByText(/Version: 2026-07-13/);
    expect(version).toBeInTheDocument();
    expect(version.textContent).not.toContain("(");
  });

  it("does not show the version when it is not configured", () => {
    render(<App />);
    expect(screen.queryByText(/^Version:/)).not.toBeInTheDocument();
  });
});

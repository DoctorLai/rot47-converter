import "./App.css";
import { rot47 } from "./functions";
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial value from localStorage
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // convert string to boolean
  });

  const [text, setText] = useState("w6==@[ (@C=5P");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleTransform = () => {
    setText(rot47(text));
  };

  const clearText = () => {
    setText("");
  };

  // Handle Tab key functionality
  const handleTab = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Insert two spaces at the cursor position
      const newText =
        textarea.value.slice(0, start) + "  " + textarea.value.slice(end);

      setText(newText);

      // Move the cursor to the right after the inserted spaces
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <div>
        <h1>ROT47 Cipher Encoder/Decoder</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleTab} // Add the keydown event handler
          placeholder="Enter your text here..."
        />
        <div>
          <button onClick={handleTransform}>🔁 Apply ROT47</button>
          <button onClick={clearText}>🧹 Clear</button>
        </div>
      </div>

      <div>
        <a href="https://rot47.net" target="_blank">ROT47</a> is a simple substitution cipher that shifts each printable ASCII character 47 places, effectively scrambling text while preserving character readability. Because the alphabet of 94 printable ASCII characters is rotated by half its size (47), a double rotation always cancels itself out. ROT47 is a lightweight text obfuscation method.
        <br />
        That is: <code>rot47(rot47(x)) = x</code>
      </div>

      <footer>
        <div className="footer">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/doctorlai"
              target="_blank"
              rel="noopener noreferrer"
            >
              @justyy
            </a>
          </p>
          <p>
            If you found this useful, consider buying me a{" "}
            <a
              href="https://justyy.com/out/bmc"
              target="_blank"
              rel="noopener noreferrer"
            >
              coffee
            </a>{" "}
            ☕
          </p>
          <p>
            Open Source on{" "}
            <a
              href="https://github.com/DoctorLai/rot47-converter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Alternatively:{" "}
            <a
              href="https://rot47.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ROT47 Cipher
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

# ROT47 Cipher Tool
[![ROT47 Converter (Built, Lint and Test)](https://github.com/DoctorLai/rot47-converter/actions/workflows/ci.yaml/badge.svg)](https://github.com/DoctorLai/rot47-converter/actions/workflows/ci.yaml) [![Run Tests with Coverage](https://github.com/DoctorLai/rot47-converter/actions/workflows/coverage.yaml/badge.svg)](https://github.com/DoctorLai/rot47-converter/actions/workflows/coverage.yaml)

A simple web-based tool to encode and decode text using the [ROT47 cipher](https://en.wikipedia.org/wiki/ROT47). This app is built using React and runs entirely in the browser. It provides a single text area and a button—type or paste your text and convert it with a click!

## Features

- **ROT47 Cipher**: Encode or decode any text using the ROT47 algorithm.
- **Dark Mode**: Toggle between light and dark modes for better readability.
- **Tab Support**: Properly inserts spaces when pressing the "Tab" key inside the text area.
- **Simple and Intuitive UI**: One clean textbox and one button—easy to use.
- **Deploy Easily**: `npm run build` and `npm run deploy`.

## Live Demo

The live demo is deployed to: [GitHub Page: ROT47 Cipher Tool](https://doctorlai.github.io/rot47-converter/)

![image](https://github.com/user-attachments/assets/6d2593cd-4623-44f5-9f92-8bed2a508643)

Please note: this is the open source version of this online tool: [ROT47 Online Cipher](https://rot47.net/)

## Installation

To run the tool locally:

1. Clone the repository:
```bash
git clone https://github.com/doctorlai/rot47-converter.git
cd rot47-converter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Tests:
```bash
## or simply: npm test
npm run test
```

5. Test coverage:
```bash
npx vitest run --coverage
```

6. Format Code:
Use `prettier --check` or `prettier --write` to check or format the code.
```bash
npm run format
## Fix automatically the coding style
npm run format:fix
```

6. Visit [http://localhost:5173/rot47-converter/](http://localhost:5173/rot47-converter/) to start using the tool locally.

## Usage

1. **Enter your text** in the input box.
2. **Click "ROT47"** to encode or decode using the ROT47 cipher.
3. The result will replace the current content in the same box.

You can also switch between **Light Mode** and **Dark Mode** using the toggle button.

## Contributing

Feel free to fork this project and submit issues or pull requests for improvements!

1. Fork the repository.
2. Create a feature branch:
```bash
git checkout -b feature-branch
```
3. Commit your changes:
```bash
git commit -am 'Add new feature'
```
4. Push to the branch:
```bash
git push origin feature-branch
```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Documentation

Here is the [AI generated wiki](https://deepwiki.com/DoctorLai/rot47-converter)

## Acknowledgments

- Built with ❤️ by [@justyy](https://github.com/doctorlai)
- Initial Boilerplate code contributed by ChatGPT-4o and o4-mini.
- If you found this tool useful, consider buying me a [coffee](https://justyy.com/out/bmc) ☕


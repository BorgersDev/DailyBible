# Daily Bible

A Digital Bible web application built with ReactJS, TypeScript, and Vite, integrating the [A Bíblia Digital API](https://www.abibliadigital.com.br).

**Developed for the Front-End 1 course at Faculdade Dunamis under the guidance of Professor Victor Caetano.**


https://github.com/user-attachments/assets/454b88fa-8ade-488b-a304-b012053830ac


---

## Table of Contents

* [React + TypeScript + Vite](#react--typescript--vite)
* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [API Integration](#api-integration)
* [Contributing](#contributing)
* [License](#license)

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

Currently, two official plugins are recommended:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

For production applications, enable type-aware lint rules by updating your ESLint config:

1. Configure the top-level `parserOptions` in `eslint.config.js`:

   ```js
   import tseslint from '@typescript-eslint/experimental-utils'

   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   })
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Optionally add `...tseslint.configs.stylisticTypeChecked` for stylistic rules.

4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and configure:

   ```js
   // eslint.config.js
   import react from 'eslint-plugin-react'

   export default tseslint.config({
     settings: { react: { version: '18.3' } },
     plugins: { react },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   })
   ```

---

## Features

* **Daily Reading:** Display daily Bible passages in a clean, responsive interface.
* **Search Functionality:** Find books, chapters, and verses quickly.
* **Multiple Translations:** Support for various Bible translations via the API.

---

## Prerequisites

* Node.js (v14 or higher)
* npm or yarn

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/daily-bible.git
   cd daily-bible
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

---

## Usage

* **Start the development server:**

  ```bash
  npm run dev
  # or
  yarn dev
  ```
* **Build for production:**

  ```bash
  npm run build
  # or
  yarn build
  ```

---

## API Integration

This project uses the [A Bíblia Digital API](https://www.abibliadigital.com.br) for fetching Bible content.

* Endpoints for daily reading, search, and translations are configured in `/src/services/api.ts`.
* Refer to the API documentation for rate limits and usage guidelines.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## License

This project is open source under the [MIT License](LICENSE).




# Contributing to Peacock UI 🦚

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

## How Can I Contribute?

### Reporting Bugs
- Use the **Bug Report** template.
- Provide a clear, concise description of the bug.
- Include steps to reproduce and environment details.

### Suggesting Enhancements
- Use the **Feature Request** template.
- Explain the use case and why this feature would be valuable.

### Pull Requests
1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the build passes (`npm run build`).
5. Make sure your code lints (`npm run lint`).

## Development Workflow

1. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/peacock-ui.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run docs dev server**:
   ```bash
   npm run docs:dev
   ```
4. **Build the library**:
   ```bash
   npm run build
   ```

## Style Guide
- Use TypeScript for all new components.
- Follow the existing design patterns (Glassmorphism, Framer Motion for physics).
- Use `cn()` utility for Tailwind class merging.

## Community
Join our community to discuss features and get help!

---
*By contributing to Peacock UI, you agree that your contributions will be licensed under its MIT License.*

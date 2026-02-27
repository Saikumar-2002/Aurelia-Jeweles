# Aurelia Jewels

Aurelia Jewels is a frontend-only luxury jewellery product showcase website built to demonstrate an elegant, premium, and responsive user interface for women's fine jewellery.

## Project Overview and Brand Concept

**Aurelia Jewels** embodies timeless elegance and visionary design. The brand concept centers on offering high-end, conflict-free fine jewellery that transcends generations. 

The website reflects this prestige through a "less is more" aesthetic. We employ a glassmorphism-style navbar, rich dark themes blending with warm champagne tones, smooth micro-animations, and high-quality photography to recreate the feeling of browsing an exclusive physical boutique.

## Tech Stack and Rationale

*   **React (via Vite):** Chosen for its component-based architecture, making it easy to create reusable UI elements (like `ProductCard` and `Navbar`). Vite was used instead of Create React App or Next.js because this is a purely static, frontend-only showcase that requires lightning-fast starting and Hot Module Replacement (HMR) without the overhead of server-side rendering.
*   **Tailwind CSS (v4):** Selected for rapid UI development and maintaining a strict, consistent design system. By defining custom colors and fonts in the CSS theme variables, Tailwind ensures that the luxury aesthetic is applied uniformly across the entire application without writing sprawling custom CSS files.
*   **React Router:** Utilized to provide a seamless, Single Page Application (SPA) experience when navigating between the landing page, collection grid, and individual product details, avoiding full page reloads that break the immersive experience.

## Setup Instructions

To run this project locally, you need [Node.js](https://nodejs.org/) installed on your machine.
Execute the following exact commands in your terminal:

1.  **Clone or download the repository.**
2.  **Navigate to the project directory:**
    ```bash
    cd "AUERILA JEWELS"
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
5.  **View the application:**
    Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## Design Decisions

*   **Typeface Choice:** 
    *   **Heading Font:** `Playfair Display` (Serif). This font was chosen for its classic, editorial, and sophisticated feel, instantly communicating "luxury" and "heritage."
    *   **Body Font:** `Inter` (Sans-serif). Chosen for exceptional readability at smaller sizes, providing a clean, modern contrast to the ornate headings.
*   **Palette Rationale:** Instead of generic colors, the palette is tightly restricted to 4 core themes:
    *   *Champagne/Ivory (`#fdfbf7`, `#f5efe6`):* Warm, inviting background tones that prevent the stark harshness of pure white.
    *   *Charcoal (`#1a1a1a`, `#2a2a2a`):* Used for text and the Hero/Footer backgrounds to provide dramatic contrast and a high-end, serious tone.
    *   *Gold (`#c9a96e`, `#d4af37`):* Applied sparingly as an accent color for borders, active states, and calls to action, drawing the eye naturally without overwhelming the design.
*   **Layout Logic:** The layout relies on abundant whitespace (padding and margins) to let the products breathe. The product grid is highly responsive—shifting gracefully from 4 columns on desktop, to 2 on tablets, and 1 on mobile devices—ensuring the imagery is never cramped.
*   **Hover Animations:** Transitions are deliberately set to slower easing curves (300ms–500ms) to feel deliberate and luxurious, rather than snappy or game-like.

## Known Limitations and Trade-offs

*   **Static Data:** Because the prompt specifically requested no backend or database, all product data is hardcoded in a static `src/data/products.json` file. This means any inventory, pricing, or product updates require a code change and a rebuild of the application.
*   **Cart/Checkout Missing:** This is purely a showcase. The "Add to Bag" button is decorative and does not link to a functional cart, state management system (like Redux/Zustand), or payment gateway.
*   **SEO Limitations:** As a standard client-side rendered React SPA, initial SEO metadata is static. If dynamic SEO (changing `<title>` and `<meta>` tags per product) was required for a real-world store, a framework like Next.js would be strictly necessary.
*   **Image Optimization:** While Vite handles basic asset serving, the project relies on high-resolution `.webp` images stored locally in `/public`. In a production web-store, these would ideally be served via a CDN with automatic responsive resizing. 

---
*Made with ❤️ by SKY*

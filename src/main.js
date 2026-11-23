/**
 * Dual-mode entry module.
 * Works natively in BOTH:
 * 1. Vite dev server (`npm run dev`) & Vite production build (`npm run build`)
 * 2. Direct GitHub Pages branch deployment (`main` / root) without requiring a build step
 */
import Lenis from './js/vendor/lenis.mjs';
window.Lenis = Lenis;

import './js/data.js';
import './js/canvas.js';
import './js/main.js';

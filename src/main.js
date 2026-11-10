/**
 * Vite entry module.
 * Order matters: styles → Lenis global → data → canvas engine → app controller.
 * The three legacy files are IIFEs that publish to `window.*`, so they are
 * imported purely for their side effects.
 */
import './css/style.css';
import './css/editorial.css';

import Lenis from 'lenis';
import './js/data.js';
import './js/canvas.js';
import './js/main.js';

// main.js reads window.Lenis on DOMContentLoaded, which fires after
// module evaluation, so assigning here is early enough.
window.Lenis = Lenis;

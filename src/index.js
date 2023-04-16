import Iteract from "../src/Iteract.js";
let className;
let fetch;

// Node JS used
if (typeof window === 'undefined') {
    className = Iteract;
    fetch = await import("../node_modules/node-fetch");
    globalThis.fetch = fetch.default;
} else {
    // Browser used
    window.Iteract = Iteract;
    className = window.Iteract;
}
export default className;
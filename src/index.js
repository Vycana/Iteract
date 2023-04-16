import Iteract from "../src/Iteract.js";
let className;
let fetch;
if (typeof window === 'undefined') {
    className = Iteract;
    fetch = typeof require !== "undefined" ? require("../node_modules/node-fetch/src/index.js") : "";
} else {
    window.Iteract = Iteract;
    className = window.Iteract;
}
export default className;
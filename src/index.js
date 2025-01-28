import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./odin.png";
import sceneImage from "./a.png";

const image= document.createElement("img");
image.src=odinImage;
image.src=sceneImage;

document.body.appendChild(image);
console.log(greeting);

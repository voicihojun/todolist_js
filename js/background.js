const images = [
  "bg1.jpeg",
  "bg2.jpeg",
  "bg3.jpeg",
  "bg4.jpeg",
  "bg5.jpeg",
  "bg6.jpeg",
  "bg7.jpeg",
  "bg8.jpeg",
  "bg9.jpeg",
  "bg10.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);

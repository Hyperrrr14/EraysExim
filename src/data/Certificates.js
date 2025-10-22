import React from "react";

const certificate = [
  {
    imageName: "halal.png",
  },
];

// Dynamically require images
const certificateData = certificate.map((cert) => ({
  ...cert,
  img: require(`../img/certification/${cert.imageName}`),
}));

export default certificateData;

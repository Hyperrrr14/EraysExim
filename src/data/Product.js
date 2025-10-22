import React from "react";

const products = [
  {
    name: "Onion Powder",
    imageName: "OnionWithPowder.jpeg",
    description: "High-quality onion powder, perfect for cooking.",
  },
  {
    name: "Dehydrated Ginger",
    imageName: "DehydratedGinger.jpeg",
    description: "Fresh ginger flavor in dehydrated form.",
  },
  {
    name: "Dehydrated Onion",
    imageName: "DehydratedOnion.jpeg",
    description: "High-quality whole onion, perfect for cooking.",
  },
  {
    name: "Ginger Powder",
    imageName: "GingerWithPowder.jpeg",
    description: "Fresh ginger flavor in powder form.",
  },
  {
    name: "Dehydrated Garlic",
    imageName: "DehydratedGarlic.jpeg",
    description: "Aromatic garlic for all dishes.",
  },
  {
    name: "Garlic Powder",
    imageName: "GarlicWithPowder.jpeg",
    description: "Aromatic garlic powder for all dishes.",
  },
  {
    name: "Other Vegetable Powders",
    imageName: "OtherVegetableWithPowder.jpeg",
    description: "Tomato, bell pepper, carrot, and more.",
  },
];

// Dynamically require images
const productsData = products.map((product) => ({
  ...product,
  img: require(`../img/product/${product.imageName}`),
}));

export default productsData;

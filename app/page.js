'use client'
import React, { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = [
    { name: "Hair Butter", price: "R130", image: "/images/hair-butter.jpg" },
    { name: "Hair Cream", price: "R150", image: "/images/hair-cream.jpg" },
    { name: "Growth Oil", price: "R140", image: "/images/growth-oil.jpg" },
    { name: "Leave-In Conditioner", price: "R105", image: "/images/leave-in-conditioner.jpg" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Devotions Hairline</h1>
      <p>Natural hair care products</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
        {products.map((p) => (
          <div key={p.name} style={{ border: "1px solid #ddd", padding: 10 }}>
            <img
              src={p.image}
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => setSelectedImage(p.image)}
            />
            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <a
              href={`https://wa.me/27665826420?text=Hi I want to order ${p.name}`}
              target="_blank"
            >
              WhatsApp Order
            </a>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
          }}
        >
          <img src={selectedImage} style={{ width: "80%", margin: "50px auto", display: "block" }} />
        </div>
      )}
    </div>
  );
}

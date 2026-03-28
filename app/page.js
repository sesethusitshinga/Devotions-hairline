'use client';

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      name: "Hair Butter",
      price: "R130",
      image: "/images/hair-butter.jpg",
      description: "Seals in moisture and helps keep hair soft and hydrated.",
      whatsapp: "Hair Butter",
    },
    {
      name: "Hair Cream",
      price: "R150",
      image: "/images/hair-cream.jpg",
      description: "A moisturizing hair cream for softness, manageability, and styling.",
      whatsapp: "Hair Cream",
    },
    {
      name: "Growth Oil",
      price: "R140",
      image: "/images/growth-oil.jpg",
      description: "A nourishing oil blend that supports scalp care and healthy growth.",
      whatsapp: "Growth Oil",
    },
    {
      name: "Leave-In Conditioner",
      price: "R105",
      image: "/images/leave-in-conditioner.jpg",
      description: "A lightweight leave-in conditioner that nourishes and moisturizes hair.",
      whatsapp: "Leave-In Conditioner",
    },
  ];

  return (
    <main style={{ padding: "24px", maxWidth: "1100px", margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Devotions Hairline</h1>
        <p style={{ fontSize: "18px", color: "#444" }}>
          Natural hair care products for moisture, growth, and healthy hair.
        </p>
      </header>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(product.image)}
                style={{
                  border: "none",
                  padding: 0,
                  margin: 0,
                  background: "transparent",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </button>

              <div style={{ padding: "16px" }}>
                <h3 style={{ margin: "0 0 8px 0" }}>{product.name}</h3>
                <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{product.price}</p>
                <p style={{ margin: "0 0 16px 0", color: "#555", lineHeight: 1.5 }}>
                  {product.description}
                </p>

                <div style={{ display: "grid", gap: "10px" }}>
                  <button
                    type="button"
                    style={{
                      background: "#111",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "12px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Pay with Payfast
                  </button>

                  <a
                    href={`https://wa.me/27665826420?text=${encodeURIComponent(
                      `Hi I want to order ${product.whatsapp}. Please confirm total with delivery.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      background: "#25D366",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "40px",
        }}
      >
        <h2>Delivery Information</h2>
        <p>Delivery fee: R190</p>
        <p>Delivery time: 3–5 working days</p>
        <p>No return policy.</p>
      </section>

      <section
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "40px",
        }}
      >
        <h2>Tutorial Videos</h2>
        <p>Upload tutorial videos later using your website files.</p>

        <div style={{ display: "grid", gap: "16px" }}>
          <div style={{ background: "#f3f3f3", padding: "20px", borderRadius: "12px" }}>
            <p style={{ margin: 0 }}>Tutorial slot 1</p>
          </div>
          <div style={{ background: "#f3f3f3", padding: "20px", borderRadius: "12px" }}>
            <p style={{ margin: 0 }}>Tutorial slot 2</p>
          </div>
          <div style={{ background: "#f3f3f3", padding: "20px", borderRadius: "12px" }}>
            <p style={{ margin: 0 }}>Tutorial slot 3</p>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h2>Natural Hair Blog</h2>
        <p>Write more about moisture, growth, ingredients, routines, and healthy natural hair care.</p>

        <div style={{ display: "grid", gap: "16px" }}>
          <div style={{ background: "#f9f9f9", padding: "16px", borderRadius: "12px" }}>
            <h3 style={{ marginTop: 0 }}>How to keep natural hair moisturised</h3>
            <p style={{ marginBottom: 0 }}>Tips and routines for keeping hair soft throughout the week.</p>
          </div>
          <div style={{ background: "#f9f9f9", padding: "16px", borderRadius: "12px" }}>
            <h3 style={{ marginTop: 0 }}>Healthy wash day routine</h3>
            <p style={{ marginBottom: 0 }}>A simple routine for cleansing, conditioning, and detangling.</p>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Product preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90vh",
              borderRadius: "16px",
              background: "#fff",
            }}
          />
        </div>
      )}
    </main>
  );
}

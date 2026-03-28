export const metadata = {
  title: "Devotions Hairline",
  description: "Natural hair care products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#fff8dc" }}>
        {children}
      </body>
    </html>
  );
}

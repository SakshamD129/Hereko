"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="container">
      <header className="hero">
        <h1>Welcome to The Store</h1>
        <p>Your one-stop shop for everything you need.</p>
        <button className="shop-now" onClick={() => router.push('/reality')}>Shop Now</button>
      </header>

      <section className="shop-section">
        <h2>Shop All You Want</h2>
        <p>Discover the best deals and latest trends.</p>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product">📱 Smart Gadgets</div>
          <div className="product">👕 Fashion & Apparel</div>
          <div className="product">🏠 Home Essentials</div>
        </div>
      </section>

      <p className="why-choose-us">
        <div>Why Choose Us?</div>
        <div className="why-list">
          <div className="why-item">See it</div>
          <div className="why-item">Click it</div>
          <div className="why-item">Shop it</div>
        </div>
      </p>

      <section className="customer-reviews">
        <div>What Our Customers Say</div>
        <div className="review">⭐⭐⭐⭐⭐ Best shopping experience ever!</div>
        <div className="review">⭐⭐⭐⭐⭐ Great quality and fast delivery!</div>
      </section>

      <footer className="footer">
        <p>We have everything that you need!</p>
        <p>&copy; <Link href="https://github.com/SakshamD129/Hereko" >GitHub</Link></p>
      </footer>
    </div>
  );
}

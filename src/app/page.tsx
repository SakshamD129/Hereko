export default function Home() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Welcome to My Store</h1>
        <p>Your one-stop shop for everything you need.</p>
      </header>

      <section className="shop-section">
        <h2>Shop All You Want</h2>
        <p>Discover the best deals and latest trends.</p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-list">
          <div className="why-item">See it</div>
          <div className="why-item">Click it</div>
          <div className="why-item">Shop it</div>
        </div>
      </section>

      <footer className="footer">
        <p>We have everything that you need!</p>
      </footer>
    </div>
  );
}

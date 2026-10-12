import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  function handleSubscribe(event) {
    event.preventDefault();
    alert("Thanks for subscribing!");
  }

  return (
    <footer id="footer" className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand brand-light" href="#home">
            <span className="brand-mark">✦</span>
            <span>
              Taste<span>Nest</span>
              <small>DELICIOUS FOOD</small>
            </span>
          </a>

          <p>
            Tasty food, happy mood. Fresh ingredients
            and flavourful moments, made with love.
          </p>

          <div className="socials">
            <a href="#footer" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#footer" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#footer" aria-label="Twitter">
              <Twitter />
            </a>
          </div>
        </div>

        <div>
          <h3>About</h3>
          <a href="#about">Our story</a>
          <a href="#about">Our chefs</a>
          <a href="#news">Latest news</a>
          <a href="#footer">Contact us</a>
        </div>

        <div>
          <h3>Menu</h3>
          <a href="#menu">Starters</a>
          <a href="#best-sellers">Main dishes</a>
          <a href="#best-sellers">Desserts</a>
          <a href="#menu">Drinks</a>
        </div>

        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe for special offers and updates.</p>

          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />
            <button className="btn btn-pink">
              Subscribe ↗
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 TasteNest. All rights reserved.</span>
        <span>Made with ♥ for food lovers</span>
      </div>
    </footer>
  );
}
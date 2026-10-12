import './App.css'
import {
  heroBanner,
  menuBanner,
  deliveryBanner,
  promotionBanner,
  bestSellingBanner,
  specialOfferBanner,
  testimonialBanner,
  featuredProductsBanner,
  vegetableBanner,
  benefitsBanner,
  newsBanner,
  footerBanner,
} from './assets/images'

function App() {
  return (
    <div className="page-shell">
      <header className="header" id="home">
        <a className="brand" href="#home" aria-label="TasteNest home">
          <span className="brand-mark">✦</span>
          <span>
            Taste<span>Nest</span>
            <small>DELICIOUS FOOD</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#best-sellers">Shop</a>
          <a href="#news">Blog</a>
          <a href="#about">Pages</a>
          <a href="#footer">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="bag" type="button" aria-label="Shopping bag">
            🛍️
            <i>2</i>
          </button>
          <a className="btn btn-yellow" href="#reservations">Find a table <span>↗</span></a>
        </div>
      </header>

      <main>
        <section className="section-artwork hero-artwork" id="home-hero" aria-label="Enjoy our delicious meal">
          <img src={heroBanner} alt="TasteNest meal offer with roasted chicken" fetchPriority="high" />
        </section>

        <section className="section-artwork menu-artwork" id="menu" aria-label="Today's menu">
          <img src={menuBanner} alt="Today's menu featuring beef, burgers, wings, macaroni and salmon" loading="lazy" />
        </section>

        <section className="section-artwork delivery-artwork" id="about" aria-label="Delivery guarantee">
          <img src={deliveryBanner} alt="30 minute delivery guarantee and pickup options" loading="lazy" />
        </section>

        <section className="section-artwork promotion-artwork" id="offers" aria-label="Current food promotions">
          <img src={promotionBanner} alt="Burger, special menu, and meal deal promotions" loading="lazy" />
        </section>

        <section className="section-artwork best-selling-artwork" id="best-sellers" aria-label="Best selling products">
          <img src={bestSellingBanner} alt="Best selling food cards" loading="lazy" />
        </section>

        <section className="section-artwork special-offer-artwork" id="reservations" aria-label="Special offer">
          <img src={specialOfferBanner} alt="Special offer burger meal" loading="lazy" />
        </section>

        <section className="section-artwork testimonial-artwork" aria-label="Customer testimonial">
          <img src={testimonialBanner} alt="Customer testimonial with family shopping for fresh food" loading="lazy" />
        </section>

        <section className="section-artwork featured-artwork" aria-label="Featured products">
          <img src={featuredProductsBanner} alt="Featured food products" loading="lazy" />
        </section>

        <section className="section-artwork vegetable-artwork" aria-label="Organic vegetable products">
          <img src={vegetableBanner} alt="Organic soups, sauces and pantry products" loading="lazy" />
        </section>

        <section className="section-artwork benefits-artwork" aria-label="Restaurant service benefits">
          <img src={benefitsBanner} alt="Free delivery, fresh food and premium quality" loading="lazy" />
        </section>

        <section className="section-artwork news-artwork" id="news" aria-label="Latest food news">
          <img src={newsBanner} alt="Latest news and fresh food recipe articles" loading="lazy" />
        </section>
      </main>

      <footer className="section-artwork footer-artwork" id="footer">
        <img src={footerBanner} alt="TasteNest footer with opening hours, links and newsletter signup" loading="lazy" />
      </footer>
    </div>
  )
}

export default App

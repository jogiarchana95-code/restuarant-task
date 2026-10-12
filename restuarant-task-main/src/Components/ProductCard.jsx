import { Plus, Star } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-photo">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
        />

        {item.tag && (
          <span className="tag">{item.tag}</span>
        )}

        <button
          className="quick-add"
          aria-label={`Add ${item.name}`}
          onClick={() => alert(`${item.name} selected`)}
        >
          <Plus size={17} />
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <div className="product-bottom">
          <span className="price">{item.price}</span>

          <span className="rating">
            <Star size={12} fill="currentColor" />
            4.9
          </span>
        </div>
      </div>
    </article>
  );
}
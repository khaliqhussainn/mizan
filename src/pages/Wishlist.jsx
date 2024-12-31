import React from "react";
import Product from "./Product";

const Wishlist = ({ wishlistItems, onRemoveFromWishlist, onAddToCart }) => {
  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="product-grid">
          {wishlistItems.map((item) => (
            <Product
              key={item.id}
              images={item.images}
              description={item.description}
              price={item.price}
              clothType={item.clothType}
              brand={item.brand}
              onAddToCart={onAddToCart}
              onAddToWishlist={() => {}}
              onRemoveFromWishlist={() => onRemoveFromWishlist(item.id)}
              isInWishlist={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

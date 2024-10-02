import React, { useState } from 'react';

const CartPage = () => {
  // State pour stocker les produits dans le panier
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Calcul du total du panier
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Mon panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - TND{item.price}
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total : {calculateTotal()} TND</p>
    </div>
  );
};

export default CartPage;

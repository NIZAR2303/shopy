import React, { useState, useEffect } from 'react';

import Checkout from './pages/Checkout';

import ProductDetails from './pages/ProductDetails';

import './App.css';
import Navbar from './components/Navbar';

import Wishlistzz from './pages/Wishlist';

import Cartzz from './pages/Cart';

import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';

import Login from './pages/Login';
import Register from './pages/Register';




function App() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("default");
    const [whishList, setwhishListItems] = useState(function() {
    const savedWishlist = localStorage.getItem('whishList');

    return savedWishlist ? JSON.parse(savedWishlist) : [];
});
    
    

    const [cartItems, setCartItems] = useState(function() {
    const savedCart = localStorage.getItem('cartItems');

    return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(function() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);


useEffect(function() {
    localStorage.setItem('whishList', JSON.stringify(whishList));
}, [whishList]);

    // Remove from Wishlist
function removeFromWishlist(productId) {

    const updatedWishlist = whishList.filter(function(item) {
        return item.id !== productId;
    });

    setwhishListItems(updatedWishlist);
}


// Move Wishlist Product to Cart
function moveToCart(product) {

    addToCart(product);

    removeFromWishlist(product.id);

}



    function removeFromCart(productId) {
    const updatedCart = cartItems.filter(function(item) {
        return item.id !== productId;
    });

    setCartItems(updatedCart);
}


    function decreaseQuantity(productId) {

         const updatedCart = cartItems.map(function(item) {

        if (item.id === productId) {

            return {
                ...item,
                quantity: item.quantity - 1
            };

        }

        return item;

    });

    const filteredCart = updatedCart.filter(function(item) {
        return item.quantity > 0;
    });

    setCartItems(filteredCart);

}



    function increaseQuantity(productId){

        const updatedCart = cartItems.map(function(item) {

        if (item.id === productId) {

            return {
                ...item,
                quantity: item.quantity + 1
            };

        }

        return item;

    });

    setCartItems(updatedCart);

      

    }

    
    function addToCart(product) {

    const existingItem = cartItems.find(function(item) {
        return item.id === product.id;
    });

    if (existingItem) {

        const updatedCart = cartItems.map(function(item) {

            if (item.id === product.id) {

                return {
                    ...item,
                    quantity: item.quantity + 1
                };

            }

            return item;

        });

        setCartItems(updatedCart);

    } else {

        setCartItems([
            ...cartItems,
            {
                ...product,
                quantity: 1
            }
        ]);

    }

}

function clearCart() {
    setCartItems([]);
}
function addToWhishlist(product){

    setwhishListItems([...whishList,product]);
}
console.log(whishList);

    return (
    <>
        <Navbar
            cartCount={cartItems.length}
            whislistCount={whishList.length}
        />

        <Routes>

    <Route
        path="/"
        element={
            <Home
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                addToCart={addToCart}
                addToWhishlist={addToWhishlist}
            />
        }
    />

    <Route
        path="/wishlist"
        element={
            <Wishlistzz
                whishList={whishList}
                removeFromWishlist={removeFromWishlist}
                moveToCart={moveToCart}
            />
        }
    />

    <Route
        path="/Cart"
        element={
            <Cartzz
                cartItems={cartItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
            />
        }
    />

    <Route
        path="/product/:id"
        element={
            <ProductDetails
                addToCart={addToCart}
            />
        }
    />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
    path="/checkout"
    element={
        <Checkout
            cartItems={cartItems}
            clearCart={clearCart}
        />
    }
/>

</Routes>

<Footer />
           
             

       

        
    </>
);

}

export default App;
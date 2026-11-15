import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import './Home.css'


function Home(props) {

    return (
        <div>

            <h1>Welcome to SHOPNOW</h1>

            <SearchBar
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
            />

            <select
                value={props.selectedCategory}
                onChange={function(event) {
                    props.setSelectedCategory(event.target.value);
                }}
            >
                <option value="All">All Products</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
            </select>

            <select
                value={props.sortOrder}
                onChange={function(event) {
                    props.setSortOrder(event.target.value);
                }}
            >
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>

            <ProductList
                searchTerm={props.searchTerm}
                selectedCategory={props.selectedCategory}
                sortOrder={props.sortOrder}
                addToCart={props.addToCart}
                addToWhishlist={props.addToWhishlist}
            />

        </div>
    );
}

export default Home;
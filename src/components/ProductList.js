import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import './ProductList.css';

function ProductList(props) {

    const navigate = useNavigate();

    const filteredProducts = products.filter(function(product) {

        const matchesSearch = product.name.toLowerCase().includes(
            props.searchTerm.toLowerCase()
        );

        const matchesCategory =
            props.selectedCategory === "All" ||
            product.category === props.selectedCategory;

        return matchesSearch && matchesCategory;

    });

    const sortedProducts = [...filteredProducts].sort(function(a, b) {

        if (props.sortOrder === "low") {
            return a.price - b.price;
        }

        if (props.sortOrder === "high") {
            return b.price - a.price;
        }

        return 0;

    });

    return (

        <div className="product-list">

            {sortedProducts.map(function(product) {

                return (

                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        rating={product.rating}
                        reviews={product.reviews}
                        image={product.image}
                        addToCart={props.addToCart}
                        addToWhishlist={props.addToWhishlist}
                        onViewDetails={function() {
                            navigate(`/product/${product.id}`);
                        }}
                    />

                );

            })}

        </div>

    );

}

export default ProductList;
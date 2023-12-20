import React from "react";
import DiscountBadge from "./DiscountBadge";
const Product = ({
    name,
    description,
    price,
    product_image,
    discount_amount
}) => {
    return (
        <li className="product">
            <div className="card">
                <div className="imageDiscount">
                    {product_image ? (
                        <img
                            src={`./img/${product_image}`}
                            alt={name}
                            className="product-image"
                        />
                    ) : (
                        <img
                            src="./img/dog-photo-default.png"
                            alt="Default product dog"
                            className="product-image"
                        />
                    )}
                    {discount_amount ? (
                        <DiscountBadge
                            className="badge"
                            discount_amount={discount_amount}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <h3>{name}</h3>
                <p>Price ${price}</p>
                <p
                    data-testid="product-description"
                    className="product-description"
                >
                    {description}
                </p>
                <button className="button">Add to Cart</button>
            </div>
        </li>
    );
};

export default Product;

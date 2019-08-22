import React from 'react'
import './product.css'
export class Product extends React.Component {
    render() {
        var {product} = this.props;
        return (
            <div className="col-md-3">
                <div className="product">
                    <img src='/assets/images/product.jpg' alt="" />
                    <div className="product_info text-center p-2">
                        <div className="rating mb-1">
                            <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <div className="product_name mb-1">
                            <span>{product.productName}</span>
                        </div>
                        <div className="product_price mb-1">
                            <span>${product.productPrice}</span>
                        </div>
                        <div className="product_add_to_cart_button pb-2">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
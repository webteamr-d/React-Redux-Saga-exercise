import React from 'react'
import './header.css'
export class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="desktop">
                    <div className="header_top">
                        <div className="container">
                            <div className="header_top_wrapper">
                                <div className="header_top_left">
                                    <ul>
                                        <li>USD</li>
                                        <li>English</li>
                                    </ul>
                                </div>
                                <div className="header_top_right">
                                    <ul>
                                        <li>Login</li>
                                        <li>My wishlist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header_center">
                        <div className="container">
                            <div className="header_center_wrapper">
                                <div className="">
                                    <img src="/assets/images/logo.png" alt="" />
                                </div>
                                <div className="header_search_form">
                                    <form action="">
                                        <input type="text" className="search_input" />
                                        <select name="" id="" className="search_select">
                                            <option value="1">All Categories</option>
                                            <option value="1">Woman</option>
                                            <option value="1">Man</option>
                                            <option value="1">Children</option>
                                        </select>
                                        <button className="search_button">
                                            {/* <i className="far fa-search"></i> */}
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </form>
                                </div>

                                <div className="header_block_right">
                                    <div className="info_short">
                                        <div className="call_us_now">Call us now</div>
                                        <div className="phone">+123 5678 890</div>
                                    </div>
                                    <div className="cart_button">
                                        {/* <i className="fal fa-shopping-bag fa-2x"></i> */}
                                        <i className="fas fa-shopping-cart fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header_bottom">
                            <div className="container">
                        <div className="header_bottom_wrapper">
                                <ul>
                                    <li className="active">Home</li>
                                    <li>Categories</li>
                                    <li>Products</li>
                                    <li>Pages</li>
                                    <li>Features</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile">
                    <div className="container">
                        <div className="mobile_header">
                            <div className="logo">
                                <img src="./images/logo.png" alt="" />
                            </div>
                            <button className="justify_button">
                                <i className="fal fa-2x fa-align-justify"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
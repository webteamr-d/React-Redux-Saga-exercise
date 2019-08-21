import React from 'react'
import './content.css'

import Product from './product/product'

export class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sidebar_filter">
                                <div className="filter_option">
                                    <div className="filter_title">
                                        <span>Fashion</span>
                                    </div>
                                    <div className="filter_content">
                                        <ul>
                                            <li>Woman</li>
                                            <li>Jewellery</li>
                                            <li>Men</li>
                                            <li>Kids Fashion</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="filter_option">
                                    <div className="filter_title">
                                        <span>Size</span>
                                    </div>
                                    <div className="filter_content filter_option_size">
                                        <ul>
                                            <li><span>S</span></li>
                                            <li><span>M</span></li>
                                            <li><span>L</span></li>
                                            <li><span>XL</span></li>
                                            <li><span>2XL</span></li>
                                            <li><span>38</span></li>
                                            <li><span>39</span></li>
                                            <li><span>40</span></li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="filter_option">
                                    <div className="filter_title">
                                        <span>Brand</span>
                                    </div>
                                    <div className="filter_content">
                                        <ul>
                                            <li>Woman</li>
                                            <li>Jewellery</li>
                                            <li>Men</li>
                                            <li>Kids Fashion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="banner">
                                <img src="https://www.portotheme.com/magento/porto/media/wysiwyg/porto/category/banner/fashion-banner.jpg" alt="" />
                            </div>

                            <div className="products">
                                <div className="row">
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
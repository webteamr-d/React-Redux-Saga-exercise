import React from 'react'
import './content.css'

import Product from './product/product'
import SidebarFilter from './sidebar-filter/sidebar-filter'
export class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SidebarFilter />
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
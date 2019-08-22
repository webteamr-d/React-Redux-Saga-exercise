import React from 'react'
import './content.css'

import Product from './product/product'
import SidebarFilter from './sidebar-filter/sidebar-filter'
export class Content extends React.Component {

    render() {
        var {products} = this.props;
        var product = products.map((product, index) => {
            return <Product product={product} key={index}/>
        })
        
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
                                    {product}
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
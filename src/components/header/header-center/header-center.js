import React from 'react'
export class HeaderCenter extends React.Component {
    render() {
        return (
            <div className="header_center">
                <div className="container">
                    <div className="header_center_wrapper">
                        <div className="">
                            <img src="/assets/images/logo_new_white.png" alt="" />
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
                                    <i className="fal fa-search cw"></i>
                                </button>
                            </form>
                        </div>

                        <div className="header_block_right">
                            <div className="info_short cw">
                                <div className="call_us_now cw">Call us now</div>
                                <div className="phone cw">+123 5678 890</div>
                            </div>
                            <div className="cart_button">
                                <button><i className="fal fa-shopping-bag cw fa-2x"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderCenter;
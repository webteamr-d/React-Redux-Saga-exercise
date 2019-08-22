import React from 'react'

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar" id="sidebar">
                <div className="container">
                    <div className="sidebar_header">
                        <div className="logo">
                            <img src="./images/logo.png" alt="" />
                        </div>
                        <button className="cart_button">
                            <i className="fal fa-shopping-bag cw"></i>
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>

                    <div className="sidebar_search_form">
                        <input type="text" id="search" placeholder="Search" className="search_input" />
                        <button className="search_button">
                            <i className="far fa-search cw"></i>
                        </button>
                    </div>

                    <div className="sidebar_menu">
                        <ul>
                            <li>Home</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;
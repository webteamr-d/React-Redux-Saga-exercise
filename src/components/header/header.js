import React from 'react'
import './header.css'
import HeaderTop from './header-top/header-top'
import HeaderCenter from './header-center/header-center'
import HeaderBottom from './header-bottom/header-bottom'
export class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="desktop">
                    <HeaderTop />
                    <HeaderCenter />
                    <HeaderBottom />
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
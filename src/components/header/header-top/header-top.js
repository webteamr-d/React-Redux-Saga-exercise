import React from 'react'
export class HeaderTop extends React.Component {
    render() {
        return (
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
        )
    }
}

export default HeaderTop;
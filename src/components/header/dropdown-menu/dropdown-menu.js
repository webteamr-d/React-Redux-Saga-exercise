import React from 'react'
export class DropdownMenu extends React.Component {
    render() {
        return (
            <li>
                <span>Products</span>
                <div className="menu_level_1">
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Blog</li>
                        <li>Page</li>
                    </ul>
                </div>
            </li>
        )
    }
}

export default DropdownMenu;
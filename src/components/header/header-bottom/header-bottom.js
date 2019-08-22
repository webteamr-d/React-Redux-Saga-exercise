import React from 'react'


import DropdownMenu from '../dropdown-menu/dropdown-menu'
export class HeaderBottom extends React.Component {
    render() {
        return (
            <div className="header_bottom">
                <div className="container">
                    <div className="header_bottom_wrapper">
                        <ul className="menu_level_0">
                            <DropdownMenu />
                            <DropdownMenu />
                            <DropdownMenu />
                            <DropdownMenu />
                            <DropdownMenu />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderBottom;
import React from 'react'


import DropdownMenu from '../dropdown-menu/dropdown-menu'
export class HeaderBottom extends React.Component {
    render() {
        var {categories} = this.props;
        var category = categories.map((category, index) => {
            return <DropdownMenu category={category} key={index}/>
        })
        return (
            <div className="header_bottom">
                <div className="container">
                    <div className="header_bottom_wrapper">
                        <ul className="menu_level_0">
                            {category}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderBottom;
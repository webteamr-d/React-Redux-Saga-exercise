import React from 'react'
import './sidebar-filter.css'
export class SidebarFilter extends React.Component {
    render() {
        return (
            <div className="sidebar_filter">
                <div className="filter_option">
                    <div className="filter_title">
                        <span>Fashion</span>
                    </div>
                    <div className="filter_content">
                        <ul>
                            <li>
                                <span>Woman</span>
                                <button><i class="fal fa-chevron-down"></i></button>
                            </li>
                            <li>
                                <span>Jewellery</span>
                                <button><i class="fal fa-chevron-down"></i></button>
                            </li>
                            <li>
                                <span>Men</span>
                                <button><i class="fal fa-chevron-down"></i></button>
                            </li>
                            <li>
                                <span>Kids Fashion</span>
                                <button><i class="fal fa-chevron-down"></i></button>
                            </li>
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
        )
    }
}

export default SidebarFilter;
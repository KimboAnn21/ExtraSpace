import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
    render() {
        var visibility = "hide"; 

        if (this.props.menuVisibility) {
            visibility = "show";
        }

    return (
        <div id="flyoutMenu" 
            onMouseDown = {this.props.handleMouseDown}
            className = {visibility} >
                <h2><a href ="https://www.smartsheet.com/store-layout">Store Layouts</a></h2>
                <h2><a href ="https://en.wikipedia.org/wiki/Sales_effectiveness">Improving Your Sales</a></h2>
                <h2><a href ="https://en.wikipedia.org/wiki/Business_communication">Communicating With Customers</a></h2>
                <h2><a href ="https://en.wikipedia.org/wiki/Customer_retention">Retaining Rentals</a></h2>
                <h2><a href ="https://en.wikipedia.org/wiki/Upselling">Adding Services</a></h2>
                <h2><a href ="https://www.extraspace.com">Learning About Extra Space</a></h2>
        </div>
        );
    }

}

export default Menu;
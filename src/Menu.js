import React, { Component } from "react";
import "./ExtraMenu.css";

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
                <h2><a href ="#">Store Layouts</a></h2>
                <h2><a href ="#">Improving Your Sales</a></h2>
                <h2><a href ="#">Communicating With Customers</a></h2>
                <h2><a href ="#">Retaining Rentals</a></h2>
                <h2><a href ="#">Adding Services</a></h2>
                <h2><a href ="#">Learning About Extra Space</a></h2>
        </div>
        );
    }

}

export default Menu;
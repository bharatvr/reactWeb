import React from 'react';

class Menu extends React.Component {
    render() {
        return (

            <div className="_menuDiv">
                <a className="_subMenu" href="#">Conditions&nbsp;of&nbsp;Use</a>
                <a className="_subMenu" href="#">Privacy&nbsp;Notice</a>
                <a className="_subMenu" href="/register">Register&nbsp;Here</a>
                <a className="_subMenu" href="/login">Sign&nbsp;In&nbsp;&nbsp;</a>

            </div>

        )
    }
}

export default Menu;
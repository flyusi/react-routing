import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export const RoutingMenu = () => (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
            <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="4">
            <Link to="/feedback">Feedback</Link>
        </Menu.Item>
        <Menu.Item key="5">
            <Link to="/404">404</Link>
        </Menu.Item>
    </Menu>
)
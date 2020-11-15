import React from "react";
import { Layout, Spin } from "antd";

import "./style.css";

const { Header, Footer, Content } = Layout;

export class RoutingLayout extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        const timeout = setTimeout(() => {
            clearTimeout(timeout);

            //Псевда загрузка данных
            this.setState({ loading: false });
        }, 5000);
    }

    render() {
        const { children, menu } = this.props;
        const { loading } = this.state;

        return (
            <Layout className="layout">
                { loading ? <div className="loading"><Spin size="large" /></div> : null }
                <Header>
                    {menu}
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="routing-contetn">
                    {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Школа программирования 2020</Footer>
            </Layout>
        )
    }
}
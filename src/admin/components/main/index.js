import React, {useState} from "react";
import { Layout, Menu } from 'antd';
import {Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./main.css";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    VideoCameraOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import AddProduct from "../product/addProduct";
import ProductList from "../product/ProductList";
import AddCategory from "../category/addCategory";
import CategoryList from "../category/CategoryList";

const { Header, Sider, Content } = Layout;



function MainAdminPanel(){

    const [collapsed, setCollapsed]=useState(false);
    function toggle() {
        setCollapsed(!collapsed);
    }

    return (
        <Layout className="main-admin">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                        <Link to="/" style={{textDecoration:'none',color:'white'}}>
                            View Site
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PlusCircleOutlined />}>
                        <Link to="/admin/category" style={{textDecoration:'none',color:'white'}}>
                            Category
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<PlusCircleOutlined />}>
                        <Link to="/admin/product" style={{textDecoration:'none',color:'white'}}>
                            Product
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Route path="/admin/product" component={AddProduct}/>
                    <Route path="/admin/product" component={ProductList}/>
                    <Route path="/admin/category" component={AddCategory}/>
                    <Route path="/admin/category" component={CategoryList}/>

                </Content>
            </Layout>
        </Layout>
    );
}
export default MainAdminPanel;
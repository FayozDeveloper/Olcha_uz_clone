import React from 'react'
import "antd/dist/antd.css"
import '../header/header.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import { Switch } from 'antd';
import {MenuOutlined,SearchOutlined,UserOutlined,HeartOutlined,ShoppingCartOutlined } from "@ant-design/icons";


function Header(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="header col-md-12 d-flex">
                        <div className="lang col-md-6 d-flex">
                            <a href="#">O'zb</a>
                            <div className="vl"> </div>
                            <a href="#">Ўзб</a>
                            <div className="vl"> </div>
                            <a href="#" style={{color:'red'}}>Рус</a>
                        </div>
                        <div className="headerR col-md-6 d-flex">
                            <a href="#" style={{marginLeft:'5rem'}}>Рассрочка</a>
                            <a href="#">Скидки</a>
                            <a href="#">Доставка</a>
                            <a href="#">Помощь</a>
                            <a href="#">Сравнение</a>
                            <Switch style={{margin:'4px '}}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="mainHeader col-md-12 d-flex">
                        <div className="leftSide col-md-8 d-flex">
                            <div className="img col-md-3">
                                <img src="https://olcha.uz/dist/images/logo.svg" alt=""/>
                            </div>
                            <button className="btn btn-danger d-flex">
                                <i><MenuOutlined  style={{margin:'4px'}}/></i>
                                <span className='text' style={{marginLeft:'7px'}}>Каталог</span>
                            </button>
                            <form className='d-flex col-md-6 ' style={{margin:'0 0 0 2rem',backgroundColor:'red',borderRadius:'5px'}}>
                                <input type="text" className='form-control' placeholder='Поиск по товарам'/>
                                <button className='btn btn-danger'><SearchOutlined style={{marginBottom:'2px'}} /></button>
                            </form>
                        </div>
                        <div className="rightSide col-md-4 d-flex">
                            <div className="btn col-md-3 d-flex ">
                                <UserOutlined style={{marginTop:'4px'}}/>
                                <span style={{marginLeft:'7px'}}>Войти</span>
                            </div>
                            <div className="btn col-md-4 d-flex ">
                                <HeartOutlined style={{marginTop:'4px'}}/>
                                <span style={{marginLeft:'7px'}}>Избранные</span>
                            </div>
                            <div className="btn col-md-4 d-flex ">
                                <ShoppingCartOutlined style={{marginTop:'4px'}}/>
                                <span style={{marginLeft:'7px', position:'relative'}}>Корзина
                                    <badge className="badge bg-danger" style={{borderRadius:'50px',position:'absolute'}}>0</badge>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="components col-md-8 offset-2">
                        <ul className='nav d-flex  d-flex'>
                            <li className='nav-item  d-flex'>
                                <Link href="#" className='nav-link' style={{color:'red'}}>Телефоны</Link>
                                <Link href="#" className='nav-link' style={{color:'red'}}>Кондиционеры</Link>
                                <Link href="#" className='nav-link' style={{color:'#ffa200'}}>Xiaomi</Link>
                                <Link href="#" className='nav-link' style={{color:'#034ea2'}}>Samsung</Link>
                                <Link href="#" className='nav-link' style={{color:'#c40000'}}>Для геймеров</Link>
                                <Link href="#" className='nav-link' style={{color:'#ff0000'}}>Парфюмерия</Link>
                                <Link href="#" className='nav-link' style={{color:'#e1c600'}}>Realme</Link>
                                <Link href="#" className='nav-link' style={{color:'red'}}>Авто товары</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;



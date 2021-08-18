import React from "react";
import { Carousel } from 'antd';
import Card from '../cardList/Card'
import './carousel.css'

function MainCarousel(){

    const contentStyle = {
        height: '23rem',
        lineHeight:'2em',
        color: '#010101',
        background: '#FBF0B4',
        borderRadius:'20px',
        margin:'2rem'
    };

    const contentStyle2 = {
        height: '23rem',
        background: '#6B4DA8',
        textAlign:'center',
        borderRadius: '20px',
        margin: '2rem 2rem 0 0'
    };


    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="LeftMain col-md-9">
                        <Carousel autoplay>
                            <div>
                                <h3 style={contentStyle} className='d-flex'>
                                    <div className="leftSide col-md-6">
                                        <img src="https://olcha.uz/image/420x220/sliders/ru/nsWvHKlJX5gyvsteNf92umRRl2gcgZ4Ph47Gcy2BA4upWQNoIzoly0pYpEqX.png" alt=""/>
                                    </div>
                                    <div className="rightSideCarousel">
                                        <div className="info">
                                            <h2 className='title' style={{margin:'0 0 0.6em'}}>Flash Sale Realme C11</h2>
                                            <h6>22 июня будут огромные скидки на модель Realme C11 !!!</h6>
                                            <a href="#" className='btn btn-outline-dark'>Приобрести</a>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                            <div>
                                <h3 style={contentStyle} className='d-flex'>
                                    <div className="leftSide col-md-6">
                                        <img src="https://olcha.uz/image/420x220/sliders/ru/pyN4i8Fxu9cdla9fXM2vkMZXESJdBlnpucSQNc4FRDkbCA86vHAbzqp5oULM.png" alt=""/>
                                    </div>
                                    <div className="rightSideCarousel">
                                        <div className="info">
                                            <h2 className='title' style={{margin:'0 0 0.6em'}}>Парфюм в рассрочку </h2>
                                            <h6>Оригинальная продукция</h6>
                                            <a href="#" className='btn btn-outline-dark'>Приобрести</a>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                            <div>
                                <h3 style={contentStyle} className='d-flex'>
                                    <div className="leftSide col-md-6">
                                        <img src="https://olcha.uz/image/420x220/sliders/ru/njLrUfIcRorlxYZ9mfWzOlzRXFDCc3SMqYlPP5J2VChgaUI9VyR6dDBIp3yk.png" alt=""/>
                                    </div>
                                    <div className="rightSideCarousel">
                                        <div className="info">
                                            <h2 className='title' style={{margin:'0 0 0.6em'}}>Автотовары</h2>
                                            <h6>Тачку на прокачку с доставкой по всему Узбекистану!</h6>
                                            <a href="#" className='btn btn-outline-dark'>Приобрести</a>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                        </Carousel>
                    </div>
                    <div className="RightMain col-md-3">
                        <Carousel autoplay>
                            <div>
                                <h3 style={contentStyle2}>
                                    <div className="infoRightCarousel">
                                        <h2 style={{color:'white',marginTop:'1rem'}}>Кондиционеры</h2>
                                        <h6 style={{color:'white'}}>Кондиционеры в рассрочку по самой выгодной цене</h6>
                                        <img src="https://olcha.uz/uploads/right_advertise_ru/KK/KK/KE/1623762383.png" alt=""/>
                                        <a href="#" className='btn btn-outline-light'> Подробнее </a>
                                    </div>
                                </h3>
                            </div>
                        </Carousel>
                    </div>
                    <a href="#" className=' m-lg-4 text-decoration-none'><h3>Популярные товары</h3></a>
                </div>
                <Card/>
            </div>
        </div>
    )
}
export default MainCarousel;

"use client"
import { useState } from "react";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper';
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { IMAGES, SVGICONS } from "@/constant/theme";
import PageBanner from "@/component/PageBanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import RealPatient from "@/component/RealPatient";
import ClientSwiper2 from "@/component/ClientSwiper2";

import Image from "next/image";


function Testimonial() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Testimonial" bnrimage={IMAGES.bnr2.src} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 bg-light bg-opacity-50">
                    <div className="container">
                        <div className="row g-4 align-items-center content-wrapper style-19">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                <Swiper className="swiper testimonial-thumb-swiper4"
                                    slidesPerView={1}
                                    effect="fade"
                                    autoplay={{
                                        delay: 3000,
                                    }}
                                    modules={[EffectFade, Thumbs,Autoplay]}
                                    thumbs={{ swiper: thumbsSwiper }}
                                >
                                    
                                </Swiper>
                            </div>
                            <div className="col-lg-6 overflow-hidden wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                                <div className="section-head style-1 m-b30">
                                    <h2 className="title">Video Testimonials.</h2>
                                </div>
                                <div className="swiper-btn-center-lr">
                                    <Swiper className="swiper testimonial-swiper4"
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        centeredSlides={true}
                                        navigation={{
                                            nextEl: '.swiper4-button-next',
                                            prevEl: '.swiper4-button-prev',
                                        }}
                                        autoplay={{
                                            delay: 3000,
                                        }}
                                        loop={true}
                                        modules={[Navigation, Autoplay, Thumbs]}
                                        watchSlidesProgress                                       
                                        onSwiper={setThumbsSwiper}
                                    >
                                        
                                    </Swiper>
                                    <div className="pagination-align">
                                        <div className="swiper4-button-prev btn-prev" dangerouslySetInnerHTML={{__html : SVGICONS.prev}} role="button">                                            
                                        </div>
                                        <div className="swiper4-button-next btn-next" dangerouslySetInnerHTML={{__html : SVGICONS.next}} role="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}>
                    <RealPatient />
                </section>
                <ClientSwiper2 />
            </main>
            <Footer />                       
            <Modal show={show} onHide={handleClose} centered  size={"lg"} className="video-model">                           
                <video controls style={{width:"100%"}} autoPlay>
                    <source src="/assets/images/demo.mp4" type="video/mp4" />
                </video>
            </Modal>
        </>
    );
}
export default Testimonial;
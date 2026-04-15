import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import WorldClass from "@/component/WorldClass";
import ServiceBox from "@/component/ServiceBox";
import WhyChoose from "@/component/WhyChoose";
import MeetDr from "@/component/MeetDr";
import Frequently from "@/component/Frequently";
import MapWraper from "@/component/MapWraper";

function HomePage() {

    return (
        <>
            <Header />
            <main className="page-content">
                <div className="hero-banner style-1" style={{ backgroundImage: `url(${IMAGES.herobannerbg1.src})`, backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="row align-items-end h-100">
                                <div className="col-lg-6 align-self-center">
                                    <div className="hero-content">
                                        <h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s"> Quality Diagnostics Services at Affordable Rates <span className="text-primary"> Services </span> <Image src={IMAGES.herobannerline} alt="" /> </h1>
                                        <p className="text wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Dr. Mehdi A. Manji Pathological Laboratories was established in 1970, since then it is dedicated to serving the people of Karachi assuring Quality at affordable rates.</p>


                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                    <div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                        <Image className="thumbnail" src={IMAGES.herobanner1} alt="" />
                                        <div className="circle-wrapper">
                                            <span className="circle1"></span>
                                            <span className="circle2"></span>
                                            <span className="circle3"></span>
                                            <div className="item1">
                                                <Image src={IMAGES.herobannerheart} alt="" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg1png.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="container">
                        <WorldClass />
                    </div>
                </section>

                <section className="content-inner-2 bg-light">
                    <div className="container">
                        <div className="section-head style-1 m-b30 row align-items-end">
                            <div className="col-xl-7 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <h2 className="title m-b0">Our Services</h2>
                            </div>
                            <div className="col-xl-5 col-md-3 text-lg-end d-none d-md-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <Link href="/services" className="btn btn-icon btn-secondary"> View All
                                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                        <ServiceBox />
                    </div>
                </section>

                <section className="content-inner overlay-secondary-dark background-blend-luminosity  overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <WhyChoose />
                    </div>
                </section>
                <MeetDr />
                <Frequently />
                <MapWraper />
            </main >
            <Footer />
        </>
    )
}
export default HomePage;
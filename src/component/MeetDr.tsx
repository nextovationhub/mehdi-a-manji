"use client"
import CountUp from "react-countup";
import { IMAGES } from "../constant/theme";

import Image from "next/image";

function MeetDr() {
    return (
        <>
            <section className="clearfix  p-t50 bg-img-fix" style={{ backgroundImage: `url(${IMAGES.bg1})`, }}>
                <div className="container">
                    <div className="row content-wrapper style-6 align-items-end">
                        <div className="col-xl-6 col-lg-5 wow fadeInLeft" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="content-media">
                                <div className="dz-media">
                                    <Image src={IMAGES.about1png} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 m-b30 align-self-center">
                            <div className="section-head style-1 m-b30">
                                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    Dr. Mehdi A. Manji
                                </h2>
                                <p className="fw-normal wow fadeInUp mb-1" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <strong className="text-secondary fw-semibold">MBBS, DCP (Lond), D.Path (Eng), MIAC, FACB, FASCP</strong>
                                </p>
                                <p className="fw-normal wow fadeInUp mb-1" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                    <strong className="text-secondary fw-semibold">Founder & Pathologist</strong>
                                </p>
                                <p className="fw-normal wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                    In 1970, I started alone but now we are many, not only in numbers but also in dedication and expertise. My gratitude to all my professional and technical staff for support, effort, and accomplishment.
                                </p>
                            </div>

                            <div className="item1" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                <div className="info-widget style-10 move-3">
                                    <span className="content-text text-primary"><span className="counter">
                                        <CountUp start={0} end={56} duration={5} /></span>+</span>
                                    <h3 className="title m-b0">Years <br /> Experience</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default MeetDr;
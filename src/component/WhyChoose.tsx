"use client"
import Image from "next/image";
import { whychoosedata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup";

function WhyChoose() {
    return (
        <>
            <div className="row content-wrapper style-7 align-items-center">

                {/* Image Section */}
                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">

                    <div className="content-media">
                        <div className="dz-media">
                            <Image src={IMAGES.about5} alt="about lab" />
                        </div>

                        <div className="item1">
                            <div className="info-widget style-11 bg-primary text-center">
                                <span className="content-text text-white">
                                    <span className="counter">
                                        <CountUp end={56} duration={4} />
                                    </span>+
                                </span>
                                <h3 className="title m-b0 text-white">
                                    Years <br /> of Excellence
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Content Section */}
                <div className="col-lg-6 m-b30">

                    <div className="section-head style-1 m-b30">
                        <h2
                            className="title text-white m-b0 wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            Why Choose
                        </h2>
                        <h2
                            className="title text-white m-b0 wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            Dr. Mehdi A. Manji Lab
                        </h2>

                        <p className="text-white mt-3 wow fadeInUp" data-wow-delay="0.3s">
                            Trusted since 1970, we deliver accurate, reliable, and affordable diagnostic services
                            with international quality standards and advanced laboratory technology.
                        </p>
                    </div>

                    <div className="row row-wrapper g-5">

                        {whychoosedata.map((data, i) => (
                            <div className="col-sm-6" key={i}>
                                <div
                                    className="icon-bx-wraper style-4 text-center text-white wow fadeInUp"
                                    data-wow-delay={data.delay}
                                >
                                    <div className="icon-bx bg-primary">
                                        <span className="icon-cell">
                                            <i className="flaticon-check" />
                                        </span>
                                    </div>

                                    <div className="icon-content">
                                        <h3 className="dz-title">{data.title}</h3>

                                        <p>
                                            Providing high-quality diagnostic services with precision,
                                            advanced equipment, and expert medical professionals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </>
    );
}

export default WhyChoose;
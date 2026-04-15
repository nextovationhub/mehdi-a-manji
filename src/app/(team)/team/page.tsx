"use client"
import Link from "next/link";
import { useState } from "react";
import MeetDr from "@/component/MeetDr";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { empolydata } from "@/constant/alldata";
import Image from "next/image";


const SectionImage = ({
    src,
    alt = "section image",
    width = "100%",
    height = "450px",
}: {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
}) => {
    return (
        <div style={{ width: "100%", textAlign: "center", margin: "50px 0" }}>
            <img
                src={src}
                alt={alt}
                style={{
                    width: width,
                    height: height,
                    objectFit: "cover",
                    display: "block",
                    margin: "0 auto",
                }}
                onError={(e) => console.log("Image load error:", e)}
            />
        </div>
    );
};

function Team() {
    const [active, setActive] = useState(1);
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Our Professional Team" bnrimage={IMAGES.bnr2.src} />
                <MeetDr />


                <SectionImage
                    src="/assets/images/team/dr.manji.png"
                    alt="Dr. Manji"
                    width="100%"
                    height="450px"
                />
                <section className="content-inner">
                    <div className="container">
                        <div className="row gy-4">
                            {empolydata.map((item, i) => (
                                <div
                                    className="col-xl-4 col-sm-6 wow fadeInUp"
                                    data-wow-delay={item.delay}
                                    data-wow-duration="0.8s"
                                    key={i}
                                >
                                    <div
                                        className={active === item.id ? "dz-team style-1 " : "dz-team style-1"}
                                    // onMouseEnter hata diya
                                    >
                                        <div className="dz-media">
                                            <Image src={item.image} alt="/" />
                                        </div>
                                        <div className="dz-content">
                                            <div className="clearfix">
                                                <h3 className="dz-name">
                                                    <Link href="">{item.title}</Link>
                                                </h3>
                                                <span className="dz-position">{item.position}</span>
                                                <span className="dz-degree">{item.degree}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </>
    );
}

export default Team;
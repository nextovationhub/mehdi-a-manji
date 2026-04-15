"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { footerdata1, footerdata2 } from "../constant/alldata";
import { useRef } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";


function Footer() {
    let year = new Date().getFullYear();
    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        const result = await sendEmail(form.current);
        if (result.success) {
            console.log('SUCCESS!', result.message);
        } else {
            console.error('FAILED...', result.message);
        }
    };
    return (
        <>
            <footer className="site-footer style-1 overlay-primary-light" style={{ backgroundImage: `url(${IMAGES.bg4.src})` }} >
                <div className="footer-head">
                    <div className="container">
                        <div className="fh-inner">
                            <div className="row g-3 align-items-center">
                                <div className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h3 className="title">Get in Touch with us</h3>

                                </div>
                                {footerdata1.map((data, i) => (
                                    <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="icon-bx-wraper style-1">
                                            <div className="icon-bx bg-secondary">
                                                <span className="icon-cell">
                                                    {data.icon}
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title">{data.title}</h5>
                                                <p>{data.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* About Section */}
                            <div className="col-xl-4 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="widget widget_about me-2">
                                    <div className="footer-logo logo-white">
                                        <Link href="/"><Image src={IMAGES.logo} alt="" /></Link>
                                    </div>
                                    <p>
                                        <span className="text-primary">Dr. Mehdi A. Manji</span> Pathological Laboratories was established in 1970,
                                        since then it is dedicated to serving the people of Karachi assuring Quality at affordable rates.
                                        Diagnostic services are provided in the field of Hematology, Chemistry, Microbiology, Routine, and Special Chemistry
                                    </p>
                                </div>
                            </div>

                            {/* Quick Links & Useful Links */}
                            {footerdata2.map((data, i) => (
                                <div className="col-xl-4 col-md-3 col-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">{data.title}</h2>
                                        <ul className="list-hover1">
                                            <li><Link href={data.link1}><span>{data.span1}</span></Link></li>
                                            <li><Link href={data.link2}><span>{data.span2}</span></Link></li>
                                            <li><Link href={data.link3}><span>{data.span3}</span></Link></li>
                                            <li><Link href={data.link4}><span>{data.span4}</span></Link></li>
                                            <li><Link href={data.link5}><span>{data.span5}</span></Link></li>
                                            <li><Link href={data.link6}><span>{data.span6}</span></Link></li>
                                            <li><Link href={data.link7}><span>{data.span7}</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}

                            {/* Contact Details Widget */}
                            <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                <div className="widget widget_services">
                                    <h2 className="footer-title">Contact Us</h2>
                                    <ul className="list-hover1">
                                        <li className="d-flex align-items-start gap-2">
                                            <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                                            <span>105-L, P.E.C.H.S., Near Noorani Kabab House Shahrah-e-Quaideen, Karachi.</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-phone text-primary"></i>
                                            <Link href="#"><span>021-34555952 & 021-34553323</span></Link>
                                        </li>
                                        
                                    </ul>
                                    {/* Franchise */}
                                    <h2 className="footer-title mt-3">Korangi</h2>
                                    <ul className="list-hover1">
                                        
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-mobile-alt text-primary"></i>
                                            <Link href="#"><span>+92-328-2056688</span></Link>
                                        </li>
                                    </ul>
                                    <h2 className="footer-title mt-3">Malir</h2>
                                    <ul className="list-hover1">
                                        
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-mobile-alt text-primary"></i>
                                            <Link href="#"><span>+92-332-2817111</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="fb-inner">
                            <div className="row">
                                <div className="col-lg-24 col-md-12 text-center">
                                    <p className="copyright-text">Copyright © <span className="current-year">{year}</span>
                                        <Link href="https://drmanjilab.pk/" target="_blank"> Dr. Mehdi A. Manji</Link> | Designed by<Link href="https://healthcloud.pk/" target="_blank"> HealthCloud</Link> & <Link href="https://nextovationhub.com/" target="_blank"> Nextovation Hub</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
        </>
    )
}
export default Footer;
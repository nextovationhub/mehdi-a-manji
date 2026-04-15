import Link from "next/link";
import { locationdata } from "../constant/alldata";

function Alllocation() {
    return (
        <>
            <section className="content-inner bg-light bg-opacity-50">
                <div className="container">
                    <div className="section-head style-3">
                        <h2 className="title m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Our Franchises</h2>
                    </div>
                    <div className="row content-wrapper">
                        {locationdata.map((data, i) => (
                            <div className="col-xl-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                <div className="content-bx style-6 shadow-sm">
                                    <div className="dz-media">
                                        <iframe
                                            src={data.mapSrc}
                                            style={{ border: 0, height: '100%', width: '100%' }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                    <div className="dz-info">
                                        <div className="clearfix">
                                            <h3 className="title m-b20">{data.title}</h3>
                                            <div className="m-b15">
                                                <h4 className="m-b5 font-16">Address:</h4>
                                                <p>{data.address}</p>
                                            </div>
                                            <div className="m-b15">
                                                <h4 className="m-b5 font-16">Mobile & WhatsApp:</h4>
                                                <p>{data.phone}</p>
                                            </div>
                                        </div>
                                        <div className="dz-footer">
                                            <Link href={data.directionsLink} target="_blank" className="icon-link-hover-end">
                                                Get Directions <i className="feather icon-arrow-up-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Alllocation;
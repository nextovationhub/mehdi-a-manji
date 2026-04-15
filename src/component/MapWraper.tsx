
import { mapdata } from "../constant/alldata";

function MapWraper() {
    return (
        < >
            <section className="content-wrapper style-4">
                <div className="container">
                    <div className="map-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231644.66599090325!2d67.1058655!3d24.8826991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e892cf017bf%3A0xdfc6f9ba8a1956c7!2sDr.%20Mehdi%20A.%20Manji%20Pathological%20Laboratories!5e0!3m2!1sen!2s!4v1776019821215!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8">
                            <div className="content-info bg-secondary">
                                <div className="section-head style-1 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title m-b0 text-white">Get in Touch with us</h2>
                                    
                                </div>
                                {mapdata.map((data, i) => (
                                    <div className="icon-bx-wraper style-1 m-b20 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="icon-bx">
                                            <span className="icon-cell"> {data.icon} </span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title">{data.title}</h5>
                                            {data.para}
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MapWraper;
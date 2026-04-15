"use client"
import { Accordion } from "react-bootstrap";
import { IMAGES } from "../constant/theme";
import Link from "next/link";

import Image from "next/image";

function Frequently() {
    return (
        <>
            <section
                className="content-inner"
                style={{
                    backgroundImage: `url(${IMAGES.bg3png.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right bottom',
                }}
            >
                <div className="container">
                    <div className="row content-wrapper style-5">

                        {/* Left Content */}
                        <div className="col-xxl-7 col-xl-6 col-lg-5 m-b30 align-self-center">
                            <div className="content-info">

                                <div className="section-head style-1 m-b30">
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.2s">
                                        Frequently Asked Questions
                                    </h2>

                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        Find answers to common questions about our diagnostic services,
                                        quality standards, and patient care.
                                    </p>
                                </div>

                                <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">

                                    {/* FAQ 1 */}
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            What services does your laboratory provide?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            We offer a wide range of diagnostic services including Hematology,
                                            Chemistry, Microbiology, Routine and Special Chemistry, along with
                                            X-Ray, Ultrasound, ECG, PFTs, and vaccination facilities.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    {/* FAQ 2 */}
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            How do you ensure accuracy of test results?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            We follow strict internal and external quality assurance programs,
                                            including EQAs by BIO-RAD USA, along with ISO-certified standards
                                            to ensure highly accurate and reliable results.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    {/* FAQ 3 */}
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Are your laboratory services ISO certified?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Yes, our laboratory is ISO certified and regularly audited.
                                            We currently comply with ISO 45001-2018 and other international
                                            quality standards.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    {/* FAQ 4 */}
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            How experienced is your medical team?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Our laboratory operates under the supervision of experienced
                                            pathologists, radiologists, and skilled technicians with decades
                                            of expertise in diagnostic healthcare.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    {/* FAQ 5 */}
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            Do you provide services for organizations and companies?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we are a trusted partner for national and multinational
                                            organizations, providing pre-employment and annual medical
                                            testing services.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="col-xxl-5 col-xl-6 col-lg-7 m-b30">
                            <div
                                className="content-media"
                                data-bottom-top="transform: translateY(50px)"
                                data-top-bottom="transform: translateY(-50px)"
                            >
                                <div className="dz-media">
                                    <Image src={IMAGES.about3} alt="faq" />
                                </div>

                                <div className="item1">
                                    <div className="info-widget style-5">
                                        <div className="widget-media text-primary">
                                            <i className="feather icon-phone-call dz-ring-effect" />
                                        </div>

                                        <div className="widget-content">
                                            <h6 className="title">Contact us</h6>
                                            <Link href="http://wa.me/923272255666" className="text-secondary">
                                                0327-2255666
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Frequently;

import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Connect from "@/component/Connect";
import Getintouch from "@/component/Getintouch";
import Alllocation from "@/component/Alllocation";

function Contactus() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Contact Us" bnrimage={IMAGES.bnr1.src} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row g-xl-4 align-items-center">
                            <Connect />
                            <Getintouch />
                        </div>
                    </div>
                </section>
                <Alllocation />
                <div className="clearfix">
                    <div className="map-wrapper style-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231644.66599090325!2d67.1058655!3d24.8826991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e892cf017bf%3A0xdfc6f9ba8a1956c7!2sDr.%20Mehdi%20A.%20Manji%20Pathological%20Laboratories!5e0!3m2!1sen!2s!4v1776019821215!5m2!1sen!2s"
                            style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
export default Contactus;
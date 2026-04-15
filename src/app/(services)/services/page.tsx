import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import ServiceBox from "@/component/ServiceBox";


function Services() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Services" bnrimage={IMAGES.bnr5.src} />
                <section className="content-inner " >
                    <div className="container">
                        <ServiceBox />
                    </div>
                </section>
                
                
                
                
            </main>
            <Footer />            
        </>
    );
}
export default Services;
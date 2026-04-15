"use client"
import { useRef, useState } from "react";
import { IMAGES } from "@/constant/theme";
import PageBanner from "@/component/PageBanner";
import WorldClass from "@/component/WorldClass";
import Whychoose from "@/component/WhyChoose";
import Inspirational from "@/component/Inspirational";
import { useEmailService } from "@/constant/useEmailService";


function AboutUs() {
    const [selectCat, setSelectCat] = useState("Angioplasty");
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
            <main className="page-content">
                <PageBanner title="About Us" bnrimage={IMAGES.bnr3.src} />
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg1png.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="container">
                        <WorldClass />
                    </div>
                </section>
                
                <Inspirational />
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" >
                    <div className="container">
                        <Whychoose />
                    </div>
                </section>
                
            </main>
        </>
    );
}
export default AboutUs;
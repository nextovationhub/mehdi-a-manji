"use client"
import { useRef, useState } from "react";
import { IMAGES } from "../constant/theme";

function Getintouch() {
    const form = useRef<HTMLFormElement | null>(null);
    const [result, setResult] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setResult("Sending....");

    const formData = new FormData(form.current);
    // ❌ ye line hata dein — already hidden input mein hai
    // formData.append("access_key", "482df471-4a6f-4bdc-9df3-8bb9d5e5df9b");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    console.log("Web3Forms Response:", data); // debug ke liye

    if (data.success) {
        setResult("Form Submitted Successfully ✅");
        form.current.reset();
    } else {
        setResult(`Error: ${data.message}`); // exact error message dikhayein
    }
};

    return (
        <>
            <div className="col-xl-5 m-b30" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                <div className="form-wrapper style-1">
                    <div className="form-body bg-primary background-blend-burn"
                        style={{ backgroundImage: `url(${IMAGES.bg2png.src})`, backgroundSize: 'cover' }}
                    >
                        <div className="section-head style-1 m-b30">
                            <h2 className="title text-white m-b0">Get in Touch</h2>
                        </div>
                        <form ref={form} onSubmit={handleSubmit} className="dzForm">
                            {/* Web3Forms hidden fields */}
                            <input type="hidden" name="access_key" value="482df471-4a6f-4bdc-9df3-8bb9d5e5df9b" />

                            <div className="dzFormMsg"></div>
                            <div className="row">
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzFirstName" type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
                                        <label htmlFor="inputFirstName">First Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzLastName" type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
                                        <label htmlFor="inputLastName">Last Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" />
                                        <label htmlFor="inputYourEmail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" />
                                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <textarea name="dzMessage" className="form-control" id="inputMessage" rows={6} placeholder="Select Service"></textarea>
                                        <label htmlFor="inputMessage">Message</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" name="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                        Submit <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                    </button>
                                    {/* Status message */}
                                    {result && (
                                        <p className={`mt-3 text-white`}>{result}</p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Getintouch;
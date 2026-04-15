
import Image from "next/image";
import { IMAGES } from "../constant/theme";
import { worldclasslistdata } from "../constant/alldata";

function WorldClass() {
    return (
        <>
            <div className="row content-wrapper style-1 align-items-center">

                {/* Image Section */}
                <div className="col-xl-6 m-b30">
                    <div className="content-media">
                        <div className="dz-media">
                            <Image src={IMAGES.about1} alt="About Us" />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="col-xl-6 m-b30">
                    <div className="section-head style-1 m-b30">

                        <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            Dr. Mehdi A. Manji Lab
                        </h2>

                        <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            Established in 1970, Dr. Mehdi A. Manji Pathological Laboratories has been a trusted name in
                            diagnostic healthcare services in Karachi. We are committed to delivering accurate, reliable,
                            and affordable laboratory testing with international quality standards.

                        </p>

                    </div>

                    {/* Features List */}
                    <ul className="list-check text-secondary grid-2 fw-medium m-b30 feature-list">
                        {worldclasslistdata.map((data, i) => (
                            <li key={i}>{data.title}</li>
                        ))}
                    </ul>


                </div>

            </div>
        </>
    );
}

export default WorldClass;
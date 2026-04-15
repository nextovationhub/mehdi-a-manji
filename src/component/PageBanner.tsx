import { StaticImageData } from "next/image";
import Link from "next/link";

interface Props{
    title : string,
    bnrimage : string | StaticImageData
}

function PageBanner({ title, bnrimage } : Props) {
    return (
        <>
            <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md" style={{ backgroundImage: `url(${bnrimage})` }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry d-table-cell">
                        <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{title}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                                <li className="breadcrumb-item">{title}</li>
                            </ul>
                        </nav>
                        <div className="dz-btn">
                            <Link href="http://wa.me/923272255666" className="btn btn-lg btn-icon btn-primary radius-xl btn-shadow mb-3 mb-sm-0">
                                <span className="left-icon"> <i className="feather icon-phone-call" /> </span> 0327-2255666
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* <ul className="dz-social">
                    <li><Link href="https://www.instagram.com/ " target="_blank"> 
                            <i className="fa-brands fa-instagram" />
                        </Link>
                    </li>
                    <li><Link href="https://www.facebook.com/ " target="_blank"> 
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                    </li>
                    <li><Link href="https://x.com/ " target="_blank"> 
                            <i className="fa-brands fa-x-twitter" />
                        </Link>
                    </li>
                    <li><Link href="https://www.youtube.com/@ " target="_blank"> 
                            <i className="fa-brands fa-youtube" />
                        </Link>
                    </li>
                </ul> */}
            </div>
        </>
    )
}
export default PageBanner;
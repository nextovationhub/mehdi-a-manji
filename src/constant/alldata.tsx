import Link from "next/link"
import { IMAGES, SVGICONS } from "./theme"
import Image, { StaticImageData } from "next/image"

export type HeaderContentItem = {
    title: string;
    to: string;
    image?: string | StaticImageData;
};

export type HeaderItem = {
    title: string;
    to?: string;
    classChange?: string;
    content?: HeaderContentItem[];
};

export type BlogItem = {
    id: number;
    dealy: string;
    image: string | StaticImageData;
    title: string;
    date: string;
    author: string;
    category: string;
    description: string;
    link: string;
};


export const headerdata: HeaderItem[] = [
    { title: "Home", to: "/home", },
    { title: "About Us", to: "/about-us", },
    { title: "Team", to: "/team", },
    { title: "Services", to: "/services", },
    { title: "Our Clients", to: "/clients", },
    { title: "Contact Us", to: "/contact-us", },
    
    
    
]
// footer 
export const footerdata1 = [
    { delay: '0.4s', icon: <i className="feather icon-phone" />, title: 'Call Us', paragraph: <Link href="http://wa.me/923272255666" className="text-body">0327-2255666</Link>, },
    { delay: '0.6s', icon: <i className="feather icon-mail" />, title: 'Send us a Mail', paragraph: <Link href="mailto:info@drmanjilab.pk" className="text-body">info@drmanjilab.pk</Link>, },
    { delay: '0.8s', icon: <i className="feather icon-clock" />, title: 'Timings', paragraph: "Mon-Sat: 8 am - 8 pm Sun: 8 am - 5 pm", },
]
export const footerdata2 = [
    
    
    
    {
        title: 'Quick Links', span1: 'Home', span2: 'About Us', span3: 'Team', span4: 'Services', span5: 'Our Clients', span6: 'Contact Us', span7: 'View Reports',
        link1: '/home', link2: '/about-us', link3: '/team', link4: '/services', link5: '/clients', link6: '/contact-us', link7: 'https://portal.labcloud.pk/reports', delay: '1.0s',
    },
    
]
// teamdetail
export const empolydata = [
    { id: 1, delay: '0.2s', image: IMAGES.team1, title: "Dr. Ghulam Fatima", position: "Pathologist", degree: "MBBS , MCPS , Ph.D" },
    { id: 2, delay: '0.4s', image: IMAGES.team2, title: "Prof. Dr. S. Furqan Hassan", position: "Pathologist", degree: "MBBS , MCPS" },
    { id: 3, delay: '0.6s', image: IMAGES.team3, title: "Dr. Nighat Narego", position: "Radiologist", degree: "MBBS, MCPS" },
    { id: 5, delay: '1.0s', image: IMAGES.team4, title: "Dr. Suresh Kumar", position: "Pathologist", degree: "MBBS, M.Phil" },
    { id: 6, delay: '1.2s', image: IMAGES.team5, title: "Dr. Attiya Tashfeen", position: "CEO of Franchise | Sonologist", degree: "MBBS, M.U.S.P" },
    { id: 4, delay: '0.8s', image: IMAGES.team6, title: "Mrs. Shahnaz Manji", position: "Franchiser" },
    
]
// component 
// alllocation
export const locationdata = [
    { 
        delay: '0.2s', 
        title: 'Korangi',
        address: 'Landhi Rd, Gulzar Colony Sector 32 B Korangi, Karachi, Pakistan',
        
        phone: '0328-2056688',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231672.51163102363!2d66.74742959453128!3d24.867845499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33baa1a90b9a3%3A0xd050cbdd6f786860!2sDr.%20Mehdi%20A.%20Manji%20Lab!5e0!3m2!1sen!2s!4v1776020144149!5m2!1sen!2s',
        directionsLink: 'https://maps.google.com/?q=Dr+Mehdi+A+Manji+Lab+Korangi+Karachi',
    },
    { 
        delay: '0.4s', 
        title: 'Malir',
        address: 'Malir, Darakhshan Cooperative Housing Society Kala Board, Karachi, Pakistan',
        
        phone: '0332-2817111',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231672.51163102363!2d66.74742959453128!3d24.867845499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339fae3e7aed3%3A0xda59727bd79ca4d8!2sDr%20Mehdi%20A%20Manji%20Laboratory!5e0!3m2!1sen!2s!4v1776020814703!5m2!1sen!2s',
        directionsLink: 'https://maps.google.com/?q=Dr+Mehdi+A+Manji+Laboratory+Malir+Karachi',
    },
];

// clientswiper1 
export const clientswiperdata1 = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// clientswiper2 
export const clientswiperdata2 = [
    { image: IMAGES.logosmall1, delay: '0.1s', },
    { image: IMAGES.logosmall2, delay: '0.2s', },
    { image: IMAGES.logosmall3, delay: '0.3s', },
    { image: IMAGES.logosmall4, delay: '0.4s', },
    { image: IMAGES.logosmall5, delay: '0.5s', },
    { image: IMAGES.logosmall6, delay: '0.6s', },
    { image: IMAGES.logosmall1, delay: '0.7s', },
    { image: IMAGES.logosmall2, delay: '0.8s', },
    { image: IMAGES.logosmall3, delay: '0.9s', },
    { image: IMAGES.logosmall4, delay: '1.0s', },
    { image: IMAGES.logosmall5, delay: '1.1s', },
    { image: IMAGES.logosmall6, delay: '1.2s', },
]

// inspirational 
export const inspirationaldata = [
    { columnstand: 'm-r25', delay: '0.2s', title: 'Mission', svg: SVGICONS.mission },
    { columnstand: 'm-l25', delay: '0.4s', title: 'Vision', svg: SVGICONS.vision },
    
]
// mapwraper
export const mapdata = [
    { id: 1, delay: '0.2s', icon: <i className="feather icon-map-pin" />, title: "Address", para: <p>105-L, P.E.C.H.S., Near Noorani Kabab House Shahrah-e-Quaideen, Karachi.</p>, },
    { id: 2, delay: '0.4s', icon: <i className="feather icon-phone" />, title: "Call Us", para: <p>021-34555952 <br /> 021-34553323</p>, },
    { id: 5, delay: '0.4s', icon: <i className="feather icon-smartphone" />, title: "Mobile & WhatsApp", para: <p><Link href="http://wa.me/923272255666">0327-2255666</Link></p>, },
    { id: 3, delay: '0.6s', icon: <i className="feather icon-mail" />, title: "Send us a Mail", para: <p><Link href="mailto:info@drmanjilab.pk">info@drmanjilab.pk</Link></p>, },
    { id: 4, delay: '0.8s', icon: <i className="feather icon-clock" />, title: "Timings", para: <p>Mon-Sat: 8 am - 8 pm <br /> Sun: 8 am - 5 pm</p>, },
]

export const meetdrdata2 = [
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
]

// whychoose 
export const whychoosedata = [
    { delay: '0.4s', title: 'More Experience', },
    { delay: '0.6s', title: 'Seamless care', },
    { delay: '0.8s', title: 'The right answers?', },
    { delay: '1.0s', title: 'Unparalleled expertise', },
]
// worldclass
export const worldclasslistdata = [
    { title: 'Accurate Diagnostic Services' },
    { title: 'Quality Assurance & ISO Standards' },
    { title: 'Emergency & Fast Reporting' },
    { title: 'Advanced Laboratory Technology' },
    { title: 'Experienced Pathologists Team' },
    { title: 'Complete Diagnostic Solutions' },
    { title: 'Telemedicine & Digital Reporting' },
    { title: 'Patient-Centered Care' },
    { title: 'Multidisciplinary Medical Support' },
    { title: 'Modern Health Information System' },
];


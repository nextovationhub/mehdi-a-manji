declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/grid';
declare module 'swiper/css/thumbs';
declare module 'swiper/css/free-mode';
declare module 'swiper/css/effect-fade';
declare module 'lightgallery/css/lightgallery.css';
declare module 'lightgallery/css/lg-zoom.css';
declare module 'lightgallery/css/lg-thumbnail.css';
declare module '*.css';

declare module "@/constant/alldata" {
  export const accordiondata: {
    id: number;
    key: string;
    title: string;
    content: string;
    delay: number;
  }[];

  export const empolydata: {
    id: number;
    image: string;
    title: string;
    position: string;
  }[];
}
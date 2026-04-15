"use client";

import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import PageBanner from "@/component/PageBanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

// 🔹 Type
type Company = {
  name: string;
  logo: string;
};

// 🔹 Data
const companies: Company[] = [
  { name: "EFU Life", logo: "/assets/images/logo/clients-01.svg" },
  { name: "Pearl Continental Hotel", logo: "/assets/images/logo/clients-02.svg" },
  { name: "State Bank of Pakistan", logo: "/assets/images/logo/clients-03.svg" },
  { name: "Mövenpick Hotel", logo: "/assets/images/logo/clients-04.svg" },
  { name: "PTCL", logo: "/assets/images/logo/clients-05.svg" },
  { name: "Aspin Pharma Pvt. Ltd.", logo: "/assets/images/logo/clients-06.svg" },
  { name: "Siemens", logo: "/assets/images/logo/clients-07.svg" },
  { name: "Pakistan Petroleum Limited", logo: "/assets/images/logo/clients-08.svg" },
  { name: "Genix Pharma Private Limited", logo: "/assets/images/logo/clients-09.svg" },
  { name: "LOTTE Chemical", logo: "/assets/images/logo/clients-10.svg" },
  { name: "Dunkin' Donuts", logo: "/assets/images/logo/clients-11.svg" },
  { name: "Marriott Hotel", logo: "/assets/images/logo/clients-12.svg" },
  
];

// 🔹 Card
function LogoCard({ name, logo }: Company) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid rgb(0, 0, 0)",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <div style={{ width: "300px", height: "100px", margin: "0 auto 15px" }}>
        <Image
          src={logo}
          alt={name}
          width={100}
          height={100}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>

      <p style={{ color: "#000000", fontWeight: 600 }}>{name}</p>
    </div>
  );
}

// 🔹 Section
function ClientsSection() {
  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

        <div className="clients-grid">
          {companies.map((c) => (
            <LogoCard key={c.name} name={c.name} logo={c.logo} />
          ))}
        </div>

      </div>

      <style jsx>{`
        .clients-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 60px;
          margin-bottom: 60px;
        }

        @media (min-width: 768px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

// 🔹 Main Page
export default function Page() {
  return (
    <>
      <Header />

      <main className="page-content">
        <PageBanner title="Our Clients" bnrimage={IMAGES.bnr4.src} />
        <ClientsSection />
      </main>

      <Footer />
    </>
  );
}
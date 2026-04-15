"use client"
import { useState } from "react";
import Link from "next/link";
import {
  FlaskConical,
  Droplets,
  Microscope,
  ShieldCheck,
  FileCheck2,
  HeartPulse,
  Activity,
  ScanLine,
  Radio,
} from "lucide-react";

const serviceboxdata = [
  {
    id: 1,
    title: "Biochemistry",
    icon: FlaskConical,
    desc: "Advanced biochemical analysis using automated and computerized systems.",
  },
  {
    id: 2,
    title: "Haematology",
    icon: Droplets,
    desc: "Complete blood count and blood disorder diagnostics with precision.",
  },
  {
    id: 3,
    title: "Special Chemistry",
    icon: Microscope,
    desc: "Specialized chemical testing for accurate disease detection.",
  },
  {
    id: 4,
    title: "Microbiology",
    icon: ShieldCheck,
    desc: "Identification of bacteria, viruses, and infectious organisms.",
  },
  {
    id: 5,
    title: "Immunology",
    icon: Activity,
    desc: "Immune system and antibody-based diagnostic testing.",
  },
  {
    id: 6,
    title: "Medical Certification",
    icon: FileCheck2,
    desc: "PMDC-certified medical reports and fitness certificates.",
  },
  {
    id: 7,
    title: "ECG",
    icon: HeartPulse,
    desc: "Heart monitoring and cardiac electrical activity testing.",
  },
  {
    id: 8,
    title: "Ultrasound",
    icon: ScanLine,
    desc: "Advanced sonography imaging for internal organ assessment.",
  },
  {
    id: 9,
    title: "X-Ray",
    icon: Radio,
    desc: "Digital radiology imaging for accurate diagnosis.",
  },
];

export default function ServiceBox() {
  const [active, setActive] = useState(1);

  return (
    <div className="row">
      {serviceboxdata.map((data, i) => {
        const Icon = data.icon;

        return (
          <div
            className="col-xl-4 col-md-6 m-b30 wow fadeInUp"
            data-wow-delay="0.1s"
            data-wow-duration="0.8s"
            key={i}
          >
            <div
              className={`icon-bx-wraper style-3 box-hover ${
                active === data.id ? "active" : ""
              }`}
              onMouseEnter={() => setActive(data.id)}
            >
              <div className="icon-bx-head">
                <div className="icon-bx">
                  <Icon size={40} />
                </div>

                <div className="icon-content">
                  <h3 className="dz-title">{data.title}</h3>
                  <p className="service-desc">{data.desc}</p>
                </div>
              </div>

              <div className="icon-bx-footer">
                <Link
                  href="/service-detail"
                  className="btn btn-square btn-primary rounded-circle"
                >
                  <i className="feather icon-arrow-up-right" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
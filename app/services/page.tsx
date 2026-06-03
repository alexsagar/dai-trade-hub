import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services & Solutions",
  description:
    "Explore our comprehensive agricultural solutions including fertilizers, eco-friendly inputs, machinery, import-export, cold storage, and food processing.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

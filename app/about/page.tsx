import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DAI Trade Hub's mission, vision, and core values. We are a trusted name in agricultural trade operating across the full value chain in Nepal.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

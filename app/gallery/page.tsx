import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through DAI Trade Hub's agricultural operations, modern infrastructure, farms, and logistics across Nepal.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}

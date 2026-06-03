import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "DAI Trade Hub — Agricultural Trading & Industrial Solutions",
  description:
    "Leading agricultural trading and industrial company providing comprehensive solutions from farm to market in Nepal.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}

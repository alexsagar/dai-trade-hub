import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${title} | Services`,
    description: `Learn more about our ${title} services at DAI Trade Hub.`,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  // Try to find the matching service from constants to display its image/description
  const service = SERVICES.find(s => s.title.toLowerCase().includes(slug.split("-")[0]));

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-surface min-h-screen">
      <div className="mx-auto max-w-[800px] px-6 lg:px-10">
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-forest text-sm font-semibold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
        
        <h1 className="font-heading text-[2.5rem] md:text-[3rem] text-charcoal leading-tight mb-6">
          {title}
        </h1>
        
        <div className="prose prose-lg prose-p:text-muted max-w-none">
          <p className="text-xl mb-8">
            {service?.description || `Detailed information about our ${title} services will be updated soon.`}
          </p>
          <div className="p-8 bg-white rounded-lg border border-border shadow-sm">
            <h3 className="font-heading text-2xl text-charcoal mb-4">Dedicated Solutions</h3>
            <p className="text-muted leading-relaxed mb-6">
              Our {title.toLowerCase()} division is equipped with industry-leading expertise and modern infrastructure to provide comprehensive solutions tailored to your needs. We are currently updating this page with detailed specifications and case studies.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-forest text-white px-6 py-3 rounded text-sm font-semibold tracking-wide hover:bg-forest-dark transition-colors"
            >
              Inquire About This Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

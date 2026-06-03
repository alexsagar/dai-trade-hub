import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${title} | Resources`,
    description: `Learn more about our ${title} initiatives at DAI Trade Hub.`,
  };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-surface min-h-screen">
      <div className="mx-auto max-w-[800px] px-6 lg:px-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-forest text-sm font-semibold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="font-heading text-[2.5rem] md:text-[3rem] text-charcoal leading-tight mb-6">
          {title}
        </h1>
        
        <div className="prose prose-lg prose-p:text-muted max-w-none">
          <p className="text-xl mb-8">
            Detailed information about our {title} programs will be published here shortly.
          </p>
          <div className="p-8 bg-white rounded-lg border border-border shadow-sm">
            <h3 className="font-heading text-2xl text-charcoal mb-4">Get Involved</h3>
            <p className="text-muted leading-relaxed mb-6">
              Whether you're looking to participate in our programs, collaborate on research, or explore career opportunities, we'd love to hear from you. Contact our team to learn how you can be part of our {title.toLowerCase()} initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-forest text-white px-6 py-3 rounded text-sm font-semibold tracking-wide hover:bg-forest-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

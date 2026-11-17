import Image from "next/image";

// Logo artwork is gold on transparent; the light variant sits on a dark plate for contrast.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.svg"
      alt="DAI Trade Hub"
      width={1111}
      height={505}
      loading="eager"
      className={`h-auto ${className}`}
      unoptimized
    />
  );
}

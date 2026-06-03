import Image from "next/image";

export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  // If the user drops their logo image as `logo.png` in the public/images folder,
  // this will render it.
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/logo.svg"
        alt="DAI Trade Hub Logo"
        fill
        className="object-contain object-left scale-[1.5] sm:scale-[2.5] origin-left"
        priority
      />
    </div>
  );
}

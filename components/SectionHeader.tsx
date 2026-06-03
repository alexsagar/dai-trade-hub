import { Reveal } from "./Animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <Reveal>
        <span
          className={`inline-block text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 ${
            light ? "text-wheat" : "text-forest"
          }`}
        >
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={`font-heading text-[2.25rem] md:text-[2.75rem] leading-[1.15] mb-4 ${
            light ? "text-white" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`text-base leading-relaxed max-w-xl ${
              align === "center" ? "mx-auto" : ""
            } ${light ? "text-white/60" : "text-muted"}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

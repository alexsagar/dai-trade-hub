export default function LegalPage({
  title,
  updated,
  draft = true,
  children,
}: {
  title: string;
  updated: string;
  draft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="container-x max-w-3xl py-16 sm:py-24">
      <h1 className="text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
      {draft && (
        <p role="note" className="mt-8 rounded-sm border border-gold/50 bg-gold-pale/50 p-4 text-sm text-ink">
          <strong>Draft pending legal review.</strong> This page describes how the website currently works and has not
          yet been reviewed by a lawyer. It will be updated once reviewed.
        </p>
      )}
      <div className="mt-10 space-y-5 leading-relaxed [&_h2]:mt-10 [&_h2]:text-2xl [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </article>
  );
}

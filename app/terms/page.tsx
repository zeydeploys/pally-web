import MarkdownDoc from "../components/MarkdownDoc";

export const metadata = { title: "Kullanım Koşulları — Pally" };

export default function TermsPage() {
  return (
    <MarkdownDoc
      file="kullanim-kosullari.md"
      altHref="/en/terms"
      altLabel="English"
    />
  );
}

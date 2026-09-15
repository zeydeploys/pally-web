import MarkdownDoc from "../../components/MarkdownDoc";

export const metadata = { title: "Terms of Use — Pally" };

export default function TermsPageEn() {
  return (
    <MarkdownDoc
      file="terms-of-use.md"
      altHref="/terms"
      altLabel="Türkçe"
    />
  );
}

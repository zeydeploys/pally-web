import MarkdownDoc from "../../components/MarkdownDoc";

export const metadata = { title: "Privacy Policy — Pally" };

export default function PrivacyPageEn() {
  return (
    <MarkdownDoc
      file="privacy-policy.md"
      altHref="/privacy"
      altLabel="Türkçe"
    />
  );
}

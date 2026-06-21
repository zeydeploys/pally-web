import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownDoc({ file }: { file: string }) {
  const md = fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");
  return (
    <main className="container">
      <Link href="/" className="brand">Pally</Link>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
      </article>
    </main>
  );
}

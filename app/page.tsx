import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <span className="brand">Pally</span>
      <h1>Harcamaları kolayca böl, dostlukları koru.</h1>
      <p className="muted">Tatil, ev arkadaşı ve gruplar için harcama bölüşme uygulaması.</p>
      <p style={{ marginTop: 32 }}>
        <Link href="/privacy">Gizlilik Politikası</Link>
        {" · "}
        <Link href="/terms">Kullanım Koşulları</Link>
      </p>
    </main>
  );
}

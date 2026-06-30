import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <main className="lp">
      <section className="lp-hero">
        <span className="lp-badge">Çok yakında · iOS</span>
        <h1 className="lp-title">
          Hesap karışmasın,
          <br />
          arkadaşlık bozulmasın.
        </h1>
        <p className="lp-sub">
          Tatilde, ev arkadaşlarıyla, arkadaş grubunda… Kim ne ödedi, kim kime
          borçlu — Pally hepsini senin yerine tutar. Sen anın tadını çıkar.
        </p>
        <div className="lp-cta">
          <WaitlistForm />
          <p className="lp-cta-note">
            Lansmanda ilk sen haberdar ol. Spam yok.
          </p>
        </div>
      </section>

      <section className="lp-features">
        <div className="lp-feature">
          <span className="lp-feature-icon">⚖️</span>
          <h3>Akıllı bölüşme</h3>
          <p>Eşit, yüzde, pay ya da sabit. Kuruşuna kadar doğru.</p>
        </div>
        <div className="lp-feature">
          <span className="lp-feature-icon">🧾</span>
          <h3>Fişi tara, gerisini bırak</h3>
          <p>Fotoğrafı çek, tutar otomatik düşsün. Elle giriş yok.</p>
        </div>
        <div className="lp-feature">
          <span className="lp-feature-icon">✅</span>
          <h3>Tek bakışta ödeş</h3>
          <p>Kim kime ne borçlu, en az transferle netleşsin.</p>
        </div>
      </section>

      <footer className="lp-footer">
        <span>Pally</span>
        <nav>
          <a href="/privacy">Gizlilik</a>
          <a href="/terms">Koşullar</a>
        </nav>
      </footer>
    </main>
  );
}

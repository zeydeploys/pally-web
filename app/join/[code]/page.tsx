import Link from "next/link";

export const metadata = { title: "Gruba katıl — Join a group — Pally" };

const APP_STORE_URL = "https://apps.apple.com/app/id6782350941";

export default async function JoinPage({ params }: PageProps<"/join/[code]">) {
  const { code } = await params;

  // Kod doğrulanmaz, veritabanına bağlanılmaz. Beklenmeyen biçimdeki kodda da
  // sayfa gösterilir; ziyaretçi zaten kodu uygulamaya kendisi girecek.
  const shown = decodeURIComponent(code).trim().toUpperCase();

  return (
    <main className="welcome">
      <div className="welcome-card join-card">
        <Link href="/" className="brand">Pally</Link>

        <p className="join-label">Davet kodu · Invite code</p>
        <p className="join-code">{shown}</p>

        <a className="join-cta" href={APP_STORE_URL}>
          Pally&apos;yi indir · Download Pally
        </a>

        <p className="join-hint">
          Uygulama zaten yüklüyse Gruplar ekranından{" "}
          <strong>Kodla katıl</strong>&apos;a dokun ve bu kodu gir.
        </p>
        <p className="join-hint join-hint--en">
          Already have the app? Open the Groups screen, tap{" "}
          <strong>Join with code</strong> and enter this code.
        </p>
      </div>
    </main>
  );
}

import { MessageCircle } from "lucide-react";

const WHATSAPP = "2290142550623"; // TODO: numéro dédié au nettoyage ; indicatif + numéro, sans + ni espaces
const chatLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

const SERVICES = [
  { title: "Extérieur", desc: "Lavage carrosserie, jantes et vitres, séchage à la main." },
  { title: "Intérieur", desc: "Aspiration, sièges, tableau de bord et tapis." },
  { title: "Complet", desc: "Intérieur et extérieur, votre voiture comme neuve." },
];

/** Bande signature de Bazla : vert, jaune, rouge (Bénin) + bleu (Haïti). */
function FlagStripe({ className = "h-1.5" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex w-full ${className}`}>
      <span className="flex-1 bg-[#008751]" />
      <span className="flex-1 bg-[#fcd116]" />
      <span className="flex-1 bg-[#c8102e]" />
      <span className="flex-1 bg-[#00209f]" />
    </div>
  );
}

function ChatButton({ message }: { message: string }) {
  return (
    <a
      href={chatLink(message)}
      target="_blank"
      rel="noopener"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/85"
    >
      <MessageCircle className="size-4" aria-hidden />
      Discuter
    </a>
  );
}

export default function Home() {
  return (
    <>
      <FlagStripe className="h-1" />
      <main className="relative flex-1 overflow-hidden">
        <div className="motif absolute inset-0 text-foreground" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
          <p className="font-heading text-2xl font-semibold tracking-tight">Bazla Nettoyage</p>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Lavage auto à Cotonou</p>
          <h1 className="mt-4 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">Votre voiture, propre comme au premier jour.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Intérieur, extérieur ou les deux. Dites-nous quand et où, on s&apos;occupe du reste.
          </p>
          <div className="mt-8">
            <ChatButton message="Bonjour, je souhaite faire nettoyer ma voiture." />
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.title} className="rounded-xl border bg-card p-5">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">Tarifs selon la taille du véhicule, sur demande.</p>
        </div>
      </main>
      <footer className="bg-[#0d1430] px-4 py-6 text-center text-sm text-[#b4b8cc]">© Bazla Nettoyage · Cotonou, Bénin</footer>
    </>
  );
}

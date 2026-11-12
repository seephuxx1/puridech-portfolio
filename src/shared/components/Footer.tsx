import { SITE } from "@/shared/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row lg:px-10">
        <p>
          © {SITE.name} · {SITE.role}
        </p>
        <a href="#top" className="hover:text-ink">
          กลับขึ้นด้านบน ↑
        </a>
      </div>
    </footer>
  );
}

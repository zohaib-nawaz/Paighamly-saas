import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MessageSquare, type LucideIcon } from "lucide-react";

import { APP_NAME } from "@/lib/brand";
import {
  LANDING_ANNOUNCEMENT,
  LANDING_CTA,
  LANDING_FAQ,
  LANDING_FEATURE_HIGHLIGHT,
  LANDING_FEATURE_PAIR,
  LANDING_FEATURES,
  LANDING_FOOTER,
  LANDING_HERO,
  LANDING_INTEGRATIONS,
  LANDING_NAV,
  LANDING_SECTION_FEATURES,
  LANDING_WHY_FORK,
} from "@/lib/landing-content";
import { FloatingThemeToggle } from "@/components/landing/floating-theme-toggle";
import { ProductPreview } from "@/components/landing/product-preview";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const surfaceCard =
  "rounded-2xl border border-border bg-card ring-1 ring-foreground/5";
const btnPrimary =
  "h-11 bg-foreground px-6 text-background hover:bg-foreground/90";
const btnOutline =
  "h-11 border-border bg-transparent text-foreground hover:bg-muted";

function LandingLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <MessageSquare className="size-4" />
      </div>
      <span className="text-sm font-semibold tracking-tight text-foreground">
        {APP_NAME}
      </span>
    </Link>
  );
}

const FEATURED_TITLES = new Set([
  LANDING_FEATURE_HIGHLIGHT.title,
  ...LANDING_FEATURE_PAIR.map((f) => f.title),
]);

function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  large,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  large?: boolean;
}) {
  return (
    <article className={cn("flex flex-col p-6", surfaceCard, className)}>
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="size-5" />
      </div>
      <h3
        className={cn("font-semibold text-foreground", large ? "text-xl" : "text-base")}
      >
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <Link
        href="#features"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        Learn more
        <ChevronRight className="size-4" />
      </Link>
    </article>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top announcement */}
      <div className="border-b border-border bg-muted/40">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs text-muted-foreground sm:text-sm">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary sm:text-xs">
            {LANDING_ANNOUNCEMENT.badge}
          </span>
          <span>{LANDING_ANNOUNCEMENT.text}</span>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <LandingLogo />
          <nav className="hidden items-center gap-8 md:flex">
            {LANDING_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              nativeButton={false}
              className="text-muted-foreground hover:text-foreground"
              render={<Link href="/login" />}
            >
              Log in
            </Button>
            <Button
              nativeButton={false}
              className={btnPrimary}
              render={<Link href="/signup" />}
            >
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-primary">{LANDING_HERO.eyebrow}</p>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-[1.1]">
              {LANDING_HERO.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {LANDING_HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                nativeButton={false}
                className={btnPrimary}
                render={<Link href="/signup" />}
              >
                {LANDING_HERO.primaryCta}
              </Button>
              <Button
                size="lg"
                nativeButton={false}
                variant="outline"
                className={btnOutline}
                render={<a href={LANDING_HERO.secondaryHref} />}
              >
                {LANDING_HERO.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-14 max-w-6xl">
            <ProductPreview />
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {LANDING_SECTION_FEATURES.title}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {LANDING_SECTION_FEATURES.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
              <FeatureCard
                large
                icon={LANDING_FEATURE_HIGHLIGHT.icon}
                title={LANDING_FEATURE_HIGHLIGHT.title}
                description={LANDING_FEATURE_HIGHLIGHT.description}
              />
              <div className={cn("relative overflow-hidden", surfaceCard)}>
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative flex h-full min-h-[220px] items-center justify-center p-8">
                  <Image
                    src="/inbox-doodle.svg"
                    alt=""
                    width={320}
                    height={240}
                    className="opacity-80 dark:opacity-90"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {LANDING_FEATURE_PAIR.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {LANDING_FEATURES.filter((f) => !FEATURED_TITLES.has(f.title)).map(
                (feature) => (
                  <article
                    key={feature.title}
                    className="rounded-xl border border-border bg-card/80 p-4"
                  >
                    <feature.icon className="mb-2 size-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </article>
                ),
              )}
            </div>

            <p className="mt-10 text-center">
              <a
                href="#features"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {LANDING_SECTION_FEATURES.seeAllLabel}
                <ArrowRight className="size-4" />
              </a>
            </p>
          </div>
        </section>

        {/* Integrations */}
        <section
          id="integrations"
          className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {LANDING_INTEGRATIONS.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{LANDING_INTEGRATIONS.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {LANDING_INTEGRATIONS.highlights.map((item) => (
                <article key={item.title} className={cn("p-6", surfaceCard)}>
                  <item.icon className="mb-3 size-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {LANDING_INTEGRATIONS.stack.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-2 py-4 text-center"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-primary">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why fork */}
        <section className="border-t border-border px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {LANDING_WHY_FORK.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{LANDING_WHY_FORK.subtitle}</p>
            </div>

            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {LANDING_WHY_FORK.cards.map((card) => (
                <article
                  key={card.title}
                  className={cn("mb-4 break-inside-avoid p-5", surfaceCard)}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <card.icon className="size-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {LANDING_FAQ.title}
            </h2>
            <Accordion className={cn("mt-10 px-4 sm:px-6", surfaceCard)}>
              {LANDING_FAQ.items.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="py-4 text-base text-foreground hover:text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-border px-4 py-24 sm:px-6">
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-b from-muted/60 via-background to-background"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-15 dark:opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 50% 100%, var(--primary), transparent)",
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              {LANDING_CTA.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{LANDING_CTA.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                nativeButton={false}
                className={btnPrimary}
                render={<Link href="/signup" />}
              >
                {LANDING_CTA.primaryCta}
              </Button>
              <Button
                size="lg"
                nativeButton={false}
                variant="outline"
                className={btnOutline}
                render={<Link href="/login" />}
              >
                {LANDING_CTA.secondaryCta}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </p>
              <ul className="mt-4 space-y-2">
                {LANDING_FOOTER.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Resources
              </p>
              <ul className="mt-4 space-y-2">
                {LANDING_FOOTER.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Account
              </p>
              <ul className="mt-4 space-y-2">
                {LANDING_FOOTER.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Legal
              </p>
              <ul className="mt-4 space-y-2">
                {LANDING_FOOTER.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <LandingLogo />
            <p className="text-sm text-muted-foreground">{LANDING_FOOTER.copyright}</p>
          </div>
        </div>
      </footer>

      <FloatingThemeToggle />
    </div>
  );
}

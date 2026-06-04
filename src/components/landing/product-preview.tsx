import { MessageSquare } from "lucide-react";

import { APP_NAME } from "@/lib/brand";

/** Stylized inbox preview — respects light/dark color scheme tokens. */
export function ProductPreview() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-3xl bg-primary/15 blur-3xl dark:bg-primary/20"
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 ring-1 ring-foreground/5">
        <div className="flex items-center gap-2 border-b border-border bg-muted/80 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-xs text-muted-foreground">{APP_NAME} — Inbox</span>
        </div>
        <div className="grid min-h-[280px] md:grid-cols-[240px_1fr]">
          <aside className="hidden border-r border-border bg-muted/50 p-3 md:block">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Conversations
            </p>
            <ul className="space-y-1.5">
              {["Acme Corp", "Sarah K.", "Order #4821", "Support queue"].map(
                (name, i) => (
                  <li
                    key={name}
                    className={`rounded-lg px-2.5 py-2 text-xs ${
                      i === 0
                        ? "bg-primary/15 font-medium text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {name}
                  </li>
                ),
              )}
            </ul>
          </aside>
          <div className="flex flex-col p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MessageSquare className="size-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Acme Corp</p>
                <p className="text-xs text-muted-foreground">Assigned · Open</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-sm text-foreground">
                Hi — can you confirm our order status?
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3 py-2 text-sm text-primary-foreground">
                Sure — it shipped this morning. Tracking link is on the way.
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-sm text-foreground">
                Perfect, thank you!
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-border bg-muted/80 px-3 py-2.5 text-xs text-muted-foreground">
              Reply via WhatsApp Business API…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

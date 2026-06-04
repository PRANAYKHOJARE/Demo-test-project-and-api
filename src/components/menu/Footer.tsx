export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="grid gap-8 px-6 py-12 md:grid-cols-3 md:px-12">
        <div>
          <p className="font-serif text-xl">Pranay's Kitchen & Bar</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Seasonal European cuisine. Open Tue – Sun, 5pm – late.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 text-foreground">Visit</p>
          <p>128 Howard Street</p>
          <p>San Francisco, CA</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 text-foreground">Reservations</p>
          <p>hello@pranaykhojars.kitchen</p>
          <p>9358452258</p>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pranay's Kitchen & Bar. All rights reserved.
      </div>
    </footer>
  );
}

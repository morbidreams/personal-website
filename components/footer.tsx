export function Footer() {
  return (
    <footer className="bg-card border-t lg:ml-80">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex justify-end">
        <div className="text-muted-foreground text-sm">
          Designed and build by{" "}
          <a
            href="https://github.com/morbidreams"
            className="text-muted-foreground underline"
            target="_blank"
          >
            Ela Debichi
          </a>
          {" <3"}
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="bg-card border-t lg:ml-80">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex sm:justify-end justify-center">
        <div className="text-muted-foreground text-xs">
          Designed and built by{" "}
          <a
            href="https://github.com/morbidreams"
            className="text-muted-foreground underline"
            target="_blank"
          >
            yours truly
          </a>
          {" <3"}
        </div>
      </div>
    </footer>
  );
}

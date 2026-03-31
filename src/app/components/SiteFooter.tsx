export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 text-zinc-600 md:flex">
          <span className="h-px w-14 bg-zinc-800" />
          <span className="text-sm tracking-[0.18em] text-zinc-500">◇</span>
          <span className="h-px w-14 bg-zinc-800" />
        </div>
        <p>© 2026 Artem Diatlenko. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:adyatlenko5@gmail.com"
            aria-label="Email"
            className="social-icon-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/artem-diatlenko"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-icon-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 9.76h2.68V18H5.6V9.76Zm4.36 0h2.57v1.13h.04c.36-.68 1.23-1.4 2.54-1.4 2.72 0 3.22 1.79 3.22 4.12V18h-2.68v-3.88c0-.93-.02-2.12-1.29-2.12-1.3 0-1.5 1.01-1.5 2.05V18H9.96V9.76Z" />
            </svg>
          </a>

          <a
            href="https://github.com/ArtemDiatlenko"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-icon-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
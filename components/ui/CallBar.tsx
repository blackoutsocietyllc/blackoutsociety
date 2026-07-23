export default function CallBar() {
  return (
    <a
      href="tel:+18779570491"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-blood py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-blood/90"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8Z" />
      </svg>
      Call Now! (877) 957-0491
    </a>
  );
}

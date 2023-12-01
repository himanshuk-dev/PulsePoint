export default function DashboardLayout({
  children,
  health,
  fitness, // will be a page or nested layout
}) {
  return (
    <section>
      {/* className="flex flex-col items-center justify-between p-1" */}
      {children}
      {health}
      {fitness}
    </section>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <section className="font-mono flex flex-col bg-gray-200 rounded-lg  pt-5 pb-5">
      {children}
    </section>
  );
}

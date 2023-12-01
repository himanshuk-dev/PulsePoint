export default function DashboardLayout({
  children,
  heartRate,
  blood,
  dailysleep,
}) {
  return (
    <section className="font-mono flex flex-col rounded-lg m-5 bg-[#969C9C]">
      {children}
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center">
        {heartRate}
        {blood}
        {dailysleep}
      </div>
    </section>
  );
}

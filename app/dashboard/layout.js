export default function DashboardLayout({
  children,
  header,
  health,
  fitness,
  heart,
  sleep,
  chat,
}) {
  return (
    <section className="font-mono flex flex-col bg-gray-200 rounded-lg items-center justify-between p-5">
      {children}
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center">
        {header}
        <div className="flex flex-col flex-wrap justify-center">
          <div className="flex flex-row flex-wrap lg:flex-nowrap ">
            {fitness}
            {health}
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {heart}
            <div className="flex flex-col flex-wrap justify-center">
              {sleep}
              {chat}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

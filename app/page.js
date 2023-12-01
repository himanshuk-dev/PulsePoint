import Image from "next/image";
import Button from "./button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-10 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <figure>
            <Image
              src="/logo.png"
              alt="PulsePoint Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            &nbsp;
            <p className="font-mono font-bold text-center">PulsePoint</p>
          </figure>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className=" flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://himanshu.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/himanshu.png"
              alt="Himanshu Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="font-mono font-bold text-center font-height-xl text-2xl lg:text-4xl lg:align-middle lg:text-center">
        <h4>Your Personal Wellness Partner</h4>
      </div>
      <div className="mb-32 flex flex-col items-center text-center lg:align-middle  lg:text-center">
        <Button />
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Check your Wellness stats
        </p>
      </div>
    </main>
  );
}

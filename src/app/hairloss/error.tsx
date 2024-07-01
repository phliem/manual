"use client";

import Image from "next/image";

export default function ErrorPage({ error }: { error: Error }) {
  // TODO implement: Ticket number (ie: DS-458) - Connect to Sentry
  // useEffect(() => {
  //   // Log the error to an error reporting service (ie: Sentry)
  // }, [error]);

  return (
    <main className="container mx-auto px-16 text-center">
      <a href="/" className="flex items-center justify-center space-x-5 mt-16">
        <Image
          src="/logo.svg"
          alt="Manual logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-4xl uppercase">Manual</span>
      </a>
      <h1 className="text-4xl font-bold mt-10">Something has gone wrong!</h1>
      <p className="text-lg mt-3">
        Looks like we’ve taken a wrong turn. Shall we back up and give that
        another go?
      </p>
      <a href="/" className="inline-block btn-primary mt-6">
        Back to homepage
      </a>
    </main>
  );
}

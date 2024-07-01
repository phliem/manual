import Image from "next/image";
import QuizCta from "../_quiz/quizCta";

export default async function Hero() {
  return (
    <section className="bg-brand-300">
      <div className="container mx-auto px-4">
        <a href="/" className="inline-block mt-7">
          <Image
            src="/logo.svg"
            alt="Manual logo"
            width={40}
            height={40}
            priority
          />
        </a>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-end md:justify-between gap-4">
          <div className="max-w-full md:max-w-lg my-3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-8xl -tracking-wider text-nowrap">
              Be good <br className="hidden md:block" />
              to yourself
            </h1>
            <p className="mt-5">
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
            <QuizCta />
          </div>
          <Image
            src="/hero.png"
            width={620}
            height={699}
            alt="Picture of a man looking happy and smiling"
            className="w-2/3 md:w-[620px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

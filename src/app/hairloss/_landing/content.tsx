import Image from "next/image";
import TextBlock from "./textBlock";

export default async function Content() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl mt-16 text-center">What we can help with</h2>

      <div className="flex flex-wrap-reverse items-center justify-evenly py-16 relative">
        <Image
          src="/photo-01.png"
          width={370}
          height={445}
          alt="Man's head that started to lose hair from an above perpective"
          className="mt-10"
        />
        <span className="hidden lg:block text-[450px] text-brand-50 tracking-tighter absolute top-0 left-[500px] -z-10">
          01
        </span>
        <TextBlock
          caption="Hair loss"
          title="Hair loss needn’t be irreversible. We can help!"
          text="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
        />
      </div>

      <div className="flex flex-wrap items-center justify-evenly py-16 relative">
        <TextBlock
          caption="Erecetile dysfunction"
          title="Erections can be a tricky thing. But no need to feel down!"
          text="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
        />
        <span className="hidden lg:block text-[450px] text-brand-50 tracking-tighter absolute top-0 right-[500px] -z-10">
          02
        </span>
        <Image
          src="/photo-02.png"
          width={370}
          height={445}
          alt="Headshot of a man that is not looking confortable"
          className="mt-10"
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <>
      {/* <header className="bg-black text-white p-2 sticky top-0 z-[1000] flex justify-between items-center">
        <a className="text-2xl font-light" href="/">
          ham club
        </a>
        <nav>
          <ul className="flex gap-5 list-none m-0 p-0">
            <li className="flex gap-5">
              <Link className="hover:underline" href="/faq">
                faq
              </Link>
              faq
            </li>
          </ul>
        </nav>
      </header> */}
      <a className="banner" href="https://hackclub.com/">
        <img
          src="https://contribute.hackclub.com/images/flag-orpheus-top.png"
          alt="Dinosaur arm holding flag that reads 'Hack Club'"
        />
      </a>
      <div className="pb-2">
        <hr className="dashed" />

        <div className="w-screen text-wrap pt-2.5 md:pt-10 lg:pt-12">
          <div className="flex">
            <Image
              src="/hamclub.svg"
              alt="Logo"
              width={500}
              height={500}
              className="pb-9 mx-auto"
            />
          </div>
        </div>
        <div className="px-20 pt-20">
          <div className="prose flex mx-auto flex-col">
            <h1 className="w-full text-center">
              Welcome to Hack Club&apos;s Ham Club!
            </h1>

            <h1 className="w-full text-center">
              📻
              <span className="text-xl italic font-semibold">
                {" "}
                Radios are magical{" "}
              </span>
              ✨
            </h1>

            <p>
              Hey there! Are you ready to dive into the world of ham radio? This
              is where you&apos;ll learn all about radio communication, connect
              with a cool community, and earn your{" "}
              <span className="font-semibold">technician license</span>—the
              first step in your ham radio journey.
            </p>

            <p>
              We run a program that meets every night from{" "}
              <span className="font-semibold">8-9 PM Eastern Time</span> to
              study together. Don&apos;t worry if you can&apos;t make it to
              every session—you can always study alone and at your own pace. As
              long as you&apos;ve passed the test by May 31st, you&apos;re on
              track to qualify for our grant, which covers the cost of your
              technician license.
            </p>

            <p>
              Plus, when you pass the exam, we&apos;ll send you a UV-K5
              radio—perfect for diving into the world of ham radio and even
              doing some fun hacking!
            </p>

            <p>
              Ham radio is more than just a hobby—it&apos;s a way to make real
              connections, help during emergencies, and get involved with local
              events like parades and marathons. Plus, it looks fantastic on
              college applications! So, come join our program, make some new
              friends, and let&apos;s get you on the air.
            </p>

            <i>
              <p>Find us in #hamradio to study together!</p>
            </i>

            <p>
              Have Questions? Visit our <Link href="/faq">FAQ.</Link>
            </p>
            <div className="py-5" />
            <div className="md:flex md:flex-row md:space-x-5 pb-5 flex justify-center flex-col">
              <Card phase={1} />
              <Card phase={2} />
            </div>
            <div className="md:flex md:flex-row md:space-x-5 flex justify-center flex-col">
              <Card phase={3} />
              <Card phase={4} />
            </div>
            <div className="py-5" />
            <div className="flex justify-center">
              <Link href="https://hackclub.com/slack?event=HAM%20Night">
                <button className="bg-black text-white rounded-2xl p-5 mt-10">
                  Join the Hack Club Slack!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-48 bg-black">
        <div className="flex justify-center items-center h-full">
          <p className="text-white">
            Made by{" "}
            <Link className="text-2xl underline" href="https://hackclub.com">
              Hack Club
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export function Card({ phase }: { phase: number }) {
  return (
    <>
      {phase === 1 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/1.png')] pt-5">
          <h2 className="text-white pl-3 pt-5 md:pt-0">Study!</h2>
        </div>
      )}
      {phase === 2 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/2.png')] pt-5">
          <h2 className="pl-[4rem]">Take the Exam!</h2>
        </div>
      )}
      {phase === 3 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/3.png')] pt-5">
          <h2 className="text-white pl-5 pt-[9rem]">Get a Radio!</h2>
        </div>
      )}
      {phase === 4 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/4.jpg')] pt-5">
          <h2 className="text-white pl-5">Explore!</h2>
        </div>
      )}
    </>
  );
}

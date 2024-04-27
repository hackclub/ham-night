import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Image
        className="sticky top-0 left-10"
        src="/hackclub.svg"
        alt="Logo"
        width={125}
        height={125}
      />
      <div className="pl-5 md:pl-0 pb-20">
        <div className="w-screen text-wrap pt-5 md:pt-20 lg:pt-48">
          <div className="flex justify-center">
            <Image
              src="/hamclub.svg"
              alt="Logo"
              width={500}
              height={500}
              className="pr-20 pb-9 mx-auto"
            />
          </div>
          <Link
            href="https://hackclub.com/slack?event=HAM%20Night"
            className="flex justify-center"
          >
            <button className="bg-black text-white rounded-2xl p-5 items-center mx-auto">
              Join the Hack Club Slack!
            </button>
          </Link>
        </div>
        <div className="pt-20">
          <div className="prose flex mx-auto flex-col">
            <h1 className="w-full text-center">
              📻
              <span className="text-xl italic font-semibold">
                {" "}
                Radios are magical{" "}
              </span>
              ✨
            </h1>
            <p>
              Have you ever looked at a radio and wondered, how does that thing
              work?
            </p>
            <p>
              HAM radio is one of the oldest forms of communication with radios!
              It{"'"}s where any licensed radio amateurs can communicate with
              each other in a secret code only they know.{" "}
            </p>
            <p>
              Here{"'"}s the cool part: anyone can get a license! This includes teens like you!
              So, now you{"'"}re thinking, how can I get into this secret club?
              Well, it does involve some studying and a test.
            </p>{" "}
            <p>
              Hack Club wants to make easier than ever for you to join this secret
              club.{" "}
            </p>
            <p className="font-semibold">
              So, we{"'"}re running an experiment until May 31st for all students in the US:
              we will waive your exam fees, and once you past your test, we will buy you your
              own radio!
            </p>

            <p>Have Questions? Vist our <Link href="/faq">FAQ</Link></p>
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
                <button className="bg-black text-white rounded-2xl p-5">
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

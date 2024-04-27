import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <header className="header">
        <Link className="logo" href="/">ham club</Link>
        <nav>
          <ul className="navList">
            <li className="navItem">
              <Link href="/faq">faq</Link>
              <Link href="/faq">how it works</Link>
              <Link href="/faq">study links!</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="p-20">
        <div className="w-screen text-wrap pt-0">
          <Image
            src="/hamclub.svg"
            alt="Logo"
            width={500}
            height={500}
            className="pr-20"
          />
        </div>
        <div className="pt-20">
          <div className="prose">
            <h1>
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
              :radio: + :ham: = Ham Radio!
            </p>
            <p>
              I bet you{"'"}ve used a walkie before…
              but have you have you ever RADIOED SOMEONE IN SPACE??? :telescope:
            </p>
            <p>
              Ham radio is one of the oldest forms of remote communication.
              With Ham radios, you can communicate with other ham radio users on
              frequencies that regular radios just can{"'"}t use!
              A regular walkie talkie can only communicate under a mile,
              whereas ham radios can communicate 30 or more miles! :toitle-remote-control: :tw_world_map:
            </p>
            <p>
              We want to make it easier than ever for you to join this super cool
              and very exclusive club! From now until May 31st, if you get ship your
              ham radio license, we will pay for your license exam, and <span className="font-semibold">SHIP YOU A HAM RADIO!</span> :dancing-ham:
            </p>
            <span className="font-semibold">
              How it works:{" "}
            </span>
            <p>
              1{")"} We recommend you study for the next 14 days!
              Collaborative Study Huddles will be happening from 8-9pm Eastern Time
              for the next 14 days in the #hamradio channel, and we would love to study with you!
              (you can totally start a study huddle at other times in the channel if you are inspired tho!) :headphones:
            </p>
            <p>
              2{")"} Schedule & Take your Ham Exam!
              (We will help you set one up if you need one, DM @Jasper on slack, or email jasper@hackclub.com) :writing_hand:
            </p>
            <p>
              3{")"} Fill out our completion form
              (link to be posted in #hamradio and on this website soon!)
              once you have your license, and we{"'"}ll do the rest! Enjoy your :ham:.
            </p>
            <span className="italic">
              <p>
                Not required, but encouraged, post your progress in #scrapbook along the way!
              </p>
            </span>
            <div className="py-5" />
            <div className="md:flex md:flex-row md:space-x-5 pb-5">
              <Card phase={1} />
              <Card phase={2} />
            </div>
            <div className="md:flex md:flex-row md:space-x-5">
              <Card phase={3} />
              <Card phase={4} />
            </div>
            <div className="py-5" />

          </div>
        </div>
      </div>
      <div className="w-screen h-48 bg-black">
        <div className="flex justify-center items-center h-full">
          <p className="text-white">Made with love by Charlie, Aram, and Jasper for <Link className="underline" href="https://hackclub.com">Hack Club</Link></p>
        </div>
      </div>
    </>
  );
}

export function Card({ phase }: { phase: number }) {
  return (
    <>
      {phase === 1 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/1.png')]">
          <h2 className="text-white pl-3 pt-5 md:pt-0">Study!</h2>
        </div>
      )}
      {phase === 2 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/2.png')]">
          <h2 className="pl-[4rem]">Take the Exam!</h2>
        </div>
      )}
      {phase === 3 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/3.png')]">
          <h2 className="text-white pl-5 pt-[9rem]">Get a Radio!</h2>
        </div>
      )}
      {phase === 4 && (
        <div className="bg-cover rounded-2xl w-60 h-60 bg-[url('/images/4.jpg')]">
          <h2 className="text-white pl-5">Explore!</h2>
        </div>
      )}
    </>
  );
}

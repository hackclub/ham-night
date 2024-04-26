import Image from "next/image";

export default function Index() {
  return (
    <>
      <div className="p-20">
        <div className="w-screen text-wrap pt-10 md:pt-40 lg:pt-70">
          <Image src="/hamhuddles.svg" alt="Logo" width={500} height={500} className="pr-20" />
          <div className="pt-5"></div>
        </div>
        <div className="pt-20">
          <div className="prose">
            <h1 className="text-xl italic">📻 Radios are magical ✨</h1>
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
              Heres the cool part anyone can get one! Including teens like you!
              So now you{"'"}re thinking? How can I get to this secret club?
              Well it does involve some studying and a test.
            </p>{" "}
            Hack Club wants to make easier than ever for you to join this secret
            club. So were running a experiment for all student in the US: Pass
            the test and we will waive your exam fees, and we will buy you your
            own radio! All you need to do is post in #scrapbook on what you
            learned and join our nightly HAM nights!
          </div>
        </div>
      </div>
    </>
  );
}

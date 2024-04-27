import Link from "next/link";

const FAQ = () => {
  return (
    <>
      <header className="header">
        <Link className="logo" href="/">
          ham club
        </Link>
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
      <div className="p-20 prose">
        <h1>Some FAQs about ham radio and this program:</h1>
        <ul>
          <li>
            This is a new Hack Club you-ship-we-ship program. You can opt in to
            study as a community with our nightly, one hour huddles from 8-9 PM
            Eastern Time. Or, you can study by yourself, for a more self-paced
            experience.
          </li>
          <br></br>
          <li>
            We currently only offer support for students getting the technician
            license. This is the basic license that everyone needs to take
            before moving on to other licenses. Don{"'"}t worry, you can still
            do pretty much everything besides HF with a technician license.
          </li>
          <br></br>
          <li>
            If you already have a license, but want a radio, we will still make
            sure you get one! Just email ham@hackclub.com and we will figure
            something out.
          </li>
          <br></br>
          <li>
            If you can{"'"}t make it to the huddle every night for two weeks,
            don{"'"}t worry! You can still study on your own.
            <b>
              {" "}
              Make sure you are done studying and testing by May 31st to be
              eligible for the grant.
            </b>
          </li>
          <br></br>
          <li>
            To find your testing center, follow our upcoming guide! Hang tight
            for now.
          </li>
          <br></br>
          <li>
            To study for your test, click on the “study links” link in the
            navigation bar. This will be updated shortly!
          </li>
          <br></br>
          <li>
            Your ham radio license is valid for 10 years, and you can renew it
            for only $35 without taking the test again.
          </li>
          <br></br>
          <li>
            No, ham radios aren{"'"}t made of ham - ham is an abbreviation for
            amateur!
          </li>
          <br></br>
          <li>
            Because this is amateur radio - of course{" "}
            <b>you can hack your radio and program custom firmware! </b>
            This will be required. Don{"'"}t worry, we will offer guides to do
            this.
          </li>
          <br></br>
          <li>
            Yes, <b>colleges love this</b> stuff! Ham radio is a great way to
            distinguish yourself from other students while having fun.
          </li>
          <br></br>
          <li>
            If you want to go even further with your license, many counties and
            colleges offer local ham clubs - a great way to connect with your
            community!
          </li>
          <br></br>
          <li>
            Ham radio is not just about having fun - it{"'"}s also about doing
            service. Ham radio has been used in countless situations - like
            hurricanes - to save people{"'"}s lives, coordinate local events
            like parades and marathons, and to aid in emergency communication.
          </li>
          <br></br>
          <li>
            No, you cannot choose your callsign for free. If you wish to choose
            your license, you must pay $50 to get a custom callsign. This is not
            covered by this grant.
          </li>
          <br></br>
          <li>
            Currently,{" "}
            <b>this program is only available to students in the US</b>. We have
            plans to expand in the future. If you would like to be an ambassador
            for your country, please email ham@hackclub.com.
          </li>
          <br></br>
          <li>
            When you pass the test, you are going to get the highly-hackable
            UV-K5 radio.
          </li>
        </ul>
      </div>
      <div className="w-screen h-48 bg-black">
        <div className="flex justify-center items-center h-full">
          <p className="text-white">
            Made with love by{" "}
            <Link className="underline" href="https://hackclub.com">
              Hack Club
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQ;

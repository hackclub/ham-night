import Link from "next/link";

const FAQ = () => {
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
                <h2>Some FAQs about ham radio:</h2>
                <ul>
                    <li>
                        You will be getting the technician license. This is the basic license that everyone needs to take
                        before moving on to other licenses. Don’t worry, you can still do pretty much everything besides
                        HF with a technician license.
                    </li>
                    <li>
                        If you already have a license, but want a radio, we will still make sure you get one! Just DM one
                        of the organizers.
                    </li>
                    <li>
                        If you can’t make it every day for two weeks, don’t worry! We are doing an initial crash course
                        before 🌲The Trail🌲 to get as many people registered as possible, but this will be a rolling event
                        using Scrapbook, minus the nightly huddles.
                    </li>
                    <li>
                        Your ham radio license is valid for 10 years, and you can renew it for only $35 without taking the
                        test again.
                    </li>
                    <li>
                        No, ham radios aren’t made of ham - ham is an abbreviation for amateur!
                    </li>
                    <li>
                        Because this is amateur radio - of course you can hack your radios and program custom firmware
                        and digital modes!
                    </li>
                    <li>
                        Yes, colleges love this stuff! Ham radio is a great way to distinguish yourself from other students
                        while having fun.
                    </li>
                    <li>
                        If you want to go even further with your license, many counties and colleges offer local ham clubs -
                        a great way to connect with your community!
                    </li>
                    <li>
                        Ham radio is not just about having fun - it’s also about doing service. Ham radio has been used in
                        countless situations - like hurricanes - to save people's lives, coordinate local events like parades
                        and marathons, and to aid in emergency communication.
                    </li>
                    <li>
                        No, you cannot choose your callsign for free. If you wish to choose your license, you must pay $50 to
                        get a custom callsign. This is not covered by this grant.
                    </li>
                </ul>
            </div>
            <div className="w-screen h-48 bg-black">
                <div className="flex justify-center items-center h-full">
                    <p className="text-white">Made with love by Charlie, Aram, and Jasper for <Link className="underline" href="https://hackclub.com">Hack Club</Link></p>
                </div>
            </div>
        </>
    );
};

export default FAQ;
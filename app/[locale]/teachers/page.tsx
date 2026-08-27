import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { buildPageMetadata } from "@/lib/seo";
import { TeachersEmailSignup } from "@/components/teachers-email-signup";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    title: "For Teachers — Hack Club",
    description:
      "Hack Club is a welcoming, supportive space where teens can explore technology, make friends, and build things they're proud of — all with independence and agency.",
    canonical: "/teachers",
    locale,
  });
}

const ENGAGE_BOXES = [
  {
    label: "Build technical projects",
    image: "/assets/parent1.png",
    body: "Learn AI-proof advanced technical skills by shipping open-source projects valued in every career.",
  },
  {
    label: "Get prizes",
    image: "/assets/parent2.png",
    body: "Get funding to build hardware projects and earn prizes like MacBooks and iPads — over $2m distributed this past year.",
  },
  {
    label: "Travel to hackathons",
    image: "/assets/parent3.jpg",
    body: "Attend in-person hackathons with travel stipends, develop independence, and form life-long friendships.",
  },
  {
    label: "Socializing online",
    image: "/assets/parent4.png",
    body: "Teens exchange millions of messages in our moderated online community in Slack.",
  },
  {
    label: "Meet tech leaders",
    image: "/assets/parent5.png",
    body: "Join AMA calls with tech leaders like Elon Musk, Jared Isaacman, Michael Dell, etc. and directly ask them questions.",
  },
  {
    label: "Coding clubs",
    image: "/assets/parent6.png",
    body: "Our coding clubs meet typically 1 hour each week in high schools or community spaces and build things together.",
  },
];

export default async function TeachersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <section className={styles["teacher-hero"]}>
          <h1 className={styles["teacher-hero-title"]}>For Teachers,</h1>
          <p className={styles["teacher-hero-subtitle"]}>
            the ones who say yes:
          </p>
          <p className={styles["teacher-hero-lede"]}>
            Hack Club is a supportive space where teens 13 - 18 year olds can
            explore technology, make friends, and build things they&apos;re
            proud of — all with independence and agency. You don&apos;t need to
            code to help make it happen!
          </p>
          <div className={styles["teacher-hero-signup"]}>
            <p className={styles["teacher-hero-signup-label"]}>
              Get updates on how to support Hack Club near you
            </p>
            <TeachersEmailSignup />
          </div>
        </section>

        <section className={styles["teacher-band"]}>
          <div className={`wave-container ${styles["teacher-band-wave-top"]}`}>
            <svg
              viewBox="0 0 1920 22"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-thin"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,18 C40,18 40,2 80,2 C120,2 120,18 160,18 C200,18 200,2 240,2 C280,2 280,18 320,18 C360,18 360,2 400,2 C440,2 440,18 480,18 C520,18 520,2 560,2 C600,2 600,18 640,18 C680,18 680,2 720,2 C760,2 760,18 800,18 C840,18 840,2 880,2 C920,2 920,18 960,18 C1000,18 1000,2 1040,2 C1080,2 1080,18 1120,18 C1160,18 1160,2 1200,2 C1240,2 1240,18 1280,18 C1320,18 1320,2 1360,2 C1400,2 1400,18 1440,18 C1480,18 1480,2 1520,2 C1560,2 1560,18 1600,18 C1640,18 1640,2 1680,2 C1720,2 1720,18 1760,18 C1800,18 1800,2 1840,2 C1880,2 1880,18 1920,18"
                fill="none"
                className={styles["teacher-wave-stroke-red"]}
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <svg
              viewBox="0 0 1920 40"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-fill"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,40 L0,27 C40,27 40,8 80,8 C120,8 120,27 160,27 C200,27 200,8 240,8 C280,8 280,27 320,27 C360,27 360,8 400,8 C440,8 440,27 480,27 C520,27 520,8 560,8 C600,8 600,27 640,27 C680,27 680,8 720,8 C760,8 760,27 800,27 C840,27 840,8 880,8 C920,8 920,27 960,27 C1000,27 1000,8 1040,8 C1080,8 1080,27 1120,27 C1160,27 1160,8 1200,8 C1240,8 1240,27 1280,27 C1320,27 1320,8 1360,8 C1400,8 1400,27 1440,27 C1480,27 1480,8 1520,8 C1560,8 1560,27 1600,27 C1640,27 1640,8 1680,8 C1720,8 1720,27 1760,27 C1800,27 1800,8 1840,8 C1880,8 1880,27 1920,27 L1920,40 Z"
                className={styles["teacher-wave-fill-red"]}
              />
            </svg>
          </div>

          <Image
            src="/assets/creature1.webp"
            alt=""
            width={1867}
            height={1485}
            sizes="(max-width: 1023px) 28vw, 28.33vw"
            quality={85}
            className={styles["teacher-band-creature"]}
          />
          <h2 className={styles["teacher-band-heading"]}>Hack Club is:</h2>
          <ul className={styles["teacher-band-list"]}>
            <li className={styles["teacher-band-list-item"]}>
              a nonprofit and the{" "}
              <strong>world&apos;s largest community</strong> of teenagers who
              like to <strong>code</strong> and{" "}
              <strong>build awesome stuff</strong>
            </li>
            <li className={styles["teacher-band-list-item"]}>
              we engage over <strong>140k+ teenagers</strong> from over{" "}
              <strong>100 countries</strong> in our programs
            </li>
            <li className={styles["teacher-band-list-item"]}>
              a teen-led community that fosters agency; teachers and grown-ups
              just sit back and support
            </li>
            <li className={styles["teacher-band-list-item"]}>
              supported by MIT, NASA, GitHub, AMD, Dell Technologies and more
            </li>
            <li className={styles["teacher-band-list-item"]}>
              always free for teens - no matter what
            </li>
          </ul>

          <div
            className={`wave-container ${styles["teacher-band-wave-bottom"]}`}
          >
            <svg
              viewBox="0 0 1920 22"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-thin"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,18 C40,18 40,2 80,2 C120,2 120,18 160,18 C200,18 200,2 240,2 C280,2 280,18 320,18 C360,18 360,2 400,2 C440,2 440,18 480,18 C520,18 520,2 560,2 C600,2 600,18 640,18 C680,18 680,2 720,2 C760,2 760,18 800,18 C840,18 840,2 880,2 C920,2 920,18 960,18 C1000,18 1000,2 1040,2 C1080,2 1080,18 1120,18 C1160,18 1160,2 1200,2 C1240,2 1240,18 1280,18 C1320,18 1320,2 1360,2 C1400,2 1400,18 1440,18 C1480,18 1480,2 1520,2 C1560,2 1560,18 1600,18 C1640,18 1640,2 1680,2 C1720,2 1720,18 1760,18 C1800,18 1800,2 1840,2 C1880,2 1880,18 1920,18"
                fill="none"
                className={styles["teacher-wave-stroke-bg"]}
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <svg
              viewBox="0 0 1920 40"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-fill"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,40 L0,27 C40,27 40,8 80,8 C120,8 120,27 160,27 C200,27 200,8 240,8 C280,8 280,27 320,27 C360,27 360,8 400,8 C440,8 440,27 480,27 C520,27 520,8 560,8 C600,8 600,27 640,27 C680,27 680,8 720,8 C760,8 760,27 800,27 C840,27 840,8 880,8 C920,8 920,27 960,27 C1000,27 1000,8 1040,8 C1080,8 1080,27 1120,27 C1160,27 1160,8 1200,8 C1240,8 1240,27 1280,27 C1320,27 1320,8 1360,8 C1400,8 1400,27 1440,27 C1480,27 1480,8 1520,8 C1560,8 1560,27 1600,27 C1640,27 1640,8 1680,8 C1720,8 1720,27 1760,27 C1800,27 1800,8 1840,8 C1880,8 1880,27 1920,27 L1920,40 Z"
                className={styles["teacher-wave-fill-bg"]}
              />
            </svg>
          </div>
        </section>

        <section className={styles["teacher-whats-section"]}>
          <h2 className={styles["teacher-whats-heading"]}>
            What&apos;s a Hack Club?
          </h2>
          <p className={styles["teacher-whats-body"]}>
            <strong>Hacking</strong> is the skill of finding creative solutions
            to problems. For us, it means making the world a better place
            through technology.
          </p>
          <p className={styles["teacher-whats-body"]}>
            A <strong>Hack Club</strong> is a coding club where members meet
            weekly in schools and communities. Leaders kick things off, members
            build websites, apps, and games at their own pace, then everyone
            demos what they made!
          </p>
        </section>

        <section
          className={`section-padded ${styles["teacher-video-section"]}`}
        >
          <div className={styles["teacher-video-wrap"]}>
            <div className={styles["teacher-video-embed"]}>
              <YouTubeEmbed id="xXIxwV7bQTw" title="Hack Club meetings" />
            </div>
            <p className={styles["teacher-video-caption"]}>
              Students building and demoing projects at a weekly Hack Club
              meeting
            </p>
          </div>

          <div className={styles["teacher-video-gradient"]} />
          <div
            className={`wave-container ${styles["teacher-video-wave-bottom"]}`}
          >
            <svg
              viewBox="0 0 1920 22"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-thin"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,18 C40,18 40,2 80,2 C120,2 120,18 160,18 C200,18 200,2 240,2 C280,2 280,18 320,18 C360,18 360,2 400,2 C440,2 440,18 480,18 C520,18 520,2 560,2 C600,2 600,18 640,18 C680,18 680,2 720,2 C760,2 760,18 800,18 C840,18 840,2 880,2 C920,2 920,18 960,18 C1000,18 1000,2 1040,2 C1080,2 1080,18 1120,18 C1160,18 1160,2 1200,2 C1240,2 1240,18 1280,18 C1320,18 1320,2 1360,2 C1400,2 1400,18 1440,18 C1480,18 1480,2 1520,2 C1560,2 1560,18 1600,18 C1640,18 1640,2 1680,2 C1720,2 1720,18 1760,18 C1800,18 1800,2 1840,2 C1880,2 1880,18 1920,18"
                fill="none"
                className={styles["teacher-wave-stroke-bg"]}
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <svg
              viewBox="0 0 1920 40"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-fill"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,40 L0,27 C40,27 40,8 80,8 C120,8 120,27 160,27 C200,27 200,8 240,8 C280,8 280,27 320,27 C360,27 360,8 400,8 C440,8 440,27 480,27 C520,27 520,8 560,8 C600,8 600,27 640,27 C680,27 680,8 720,8 C760,8 760,27 800,27 C840,27 840,8 880,8 C920,8 920,27 960,27 C1000,27 1000,8 1040,8 C1080,8 1080,27 1120,27 C1160,27 1160,8 1200,8 C1240,8 1240,27 1280,27 C1320,27 1320,8 1360,8 C1400,8 1400,27 1440,27 C1480,27 1480,8 1520,8 C1560,8 1560,27 1600,27 C1640,27 1640,8 1680,8 C1720,8 1720,27 1760,27 C1800,27 1800,8 1840,8 C1880,8 1880,27 1920,27 L1920,40 Z"
                className={styles["teacher-wave-fill-bg"]}
              />
            </svg>
          </div>
        </section>

        <section className={styles["teacher-engage-heading-section"]}>
          <h2 className={styles["teacher-engage-heading"]}>
            How do teens engage in Hack Club?
          </h2>
        </section>

        <section className={styles["teacher-engage-section"]}>
          <div className={styles["teacher-engage-grid"]}>
            {ENGAGE_BOXES.map((box) => (
              <div key={box.label} className={styles["teacher-engage-box"]}>
                <Image
                  src={box.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles["teacher-engage-box-image"]}
                />
                <p className={styles["teacher-engage-box-label"]}>
                  {box.label}
                </p>
                <p className={styles["teacher-engage-box-body"]}>{box.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles["teacher-benefits-section"]}>
          <div
            className={`wave-container ${styles["teacher-benefits-wave-top"]}`}
          >
            <svg
              viewBox="0 0 1920 22"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-thin"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,18 C40,18 40,2 80,2 C120,2 120,18 160,18 C200,18 200,2 240,2 C280,2 280,18 320,18 C360,18 360,2 400,2 C440,2 440,18 480,18 C520,18 520,2 560,2 C600,2 600,18 640,18 C680,18 680,2 720,2 C760,2 760,18 800,18 C840,18 840,2 880,2 C920,2 920,18 960,18 C1000,18 1000,2 1040,2 C1080,2 1080,18 1120,18 C1160,18 1160,2 1200,2 C1240,2 1240,18 1280,18 C1320,18 1320,2 1360,2 C1400,2 1400,18 1440,18 C1480,18 1480,2 1520,2 C1560,2 1560,18 1600,18 C1640,18 1640,2 1680,2 C1720,2 1720,18 1760,18 C1800,18 1800,2 1840,2 C1880,2 1880,18 1920,18"
                fill="none"
                className={styles["teacher-wave-stroke-benefits"]}
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <svg
              viewBox="0 0 1920 40"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-fill"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,40 L0,27 C40,27 40,8 80,8 C120,8 120,27 160,27 C200,27 200,8 240,8 C280,8 280,27 320,27 C360,27 360,8 400,8 C440,8 440,27 480,27 C520,27 520,8 560,8 C600,8 600,27 640,27 C680,27 680,8 720,8 C760,8 760,27 800,27 C840,27 840,8 880,8 C920,8 920,27 960,27 C1000,27 1000,8 1040,8 C1080,8 1080,27 1120,27 C1160,27 1160,8 1200,8 C1240,8 1240,27 1280,27 C1320,27 1320,8 1360,8 C1400,8 1400,27 1440,27 C1480,27 1480,8 1520,8 C1560,8 1560,27 1600,27 C1640,27 1640,8 1680,8 C1720,8 1720,27 1760,27 C1800,27 1800,8 1840,8 C1880,8 1880,27 1920,27 L1920,40 Z"
                className={styles["teacher-wave-fill-benefits"]}
              />
            </svg>
          </div>

          <h2 className={styles["teacher-benefits-heading"]}>
            What benefits do students get from Hack Club?
          </h2>
          <ul className={styles["teacher-benefits-list"]}>
            <li className={styles["teacher-benefits-list-item"]}>
              Students build{" "}
              <strong>portfolio-ready, open-source projects</strong> valued by
              employers and college admission officers.
            </li>
            <li className={styles["teacher-benefits-list-item"]}>
              Students gain <strong>leadership skills</strong> by running a
              hackathon or leading a coding club.
            </li>
            <li className={styles["teacher-benefits-list-item"]}>
              Hack Club offers <strong>internships</strong>, 1-year paid{" "}
              <strong>fellowships</strong>, and employs teens for{" "}
              <strong>contract positions</strong>.
            </li>
            <li className={styles["teacher-benefits-list-item"]}>
              Hack Club alumni regularly host{" "}
              <strong>meet-ups nationwide</strong> and build a{" "}
              <strong>powerful friend network</strong>.
            </li>
            <li className={styles["teacher-benefits-list-item"]}>
              <strong>Make friends</strong> with serious, ambitious, technical
              people.
            </li>
            <li className={styles["teacher-benefits-list-item"]}>
              Hack Club will never try to sell or market anything to your
              students — we are a charity.
            </li>
          </ul>

          <div
            className={`wave-container ${styles["teacher-benefits-wave-bottom"]}`}
          >
            <svg
              viewBox="0 0 1920 22"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-thin"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,18 C40,18 40,2 80,2 C120,2 120,18 160,18 C200,18 200,2 240,2 C280,2 280,18 320,18 C360,18 360,2 400,2 C440,2 440,18 480,18 C520,18 520,2 560,2 C600,2 600,18 640,18 C680,18 680,2 720,2 C760,2 760,18 800,18 C840,18 840,2 880,2 C920,2 920,18 960,18 C1000,18 1000,2 1040,2 C1080,2 1080,18 1120,18 C1160,18 1160,2 1200,2 C1240,2 1240,18 1280,18 C1320,18 1320,2 1360,2 C1400,2 1400,18 1440,18 C1480,18 1480,2 1520,2 C1560,2 1560,18 1600,18 C1640,18 1640,2 1680,2 C1720,2 1720,18 1760,18 C1800,18 1800,2 1840,2 C1880,2 1880,18 1920,18"
                fill="none"
                className={styles["teacher-wave-stroke-bg"]}
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <svg
              viewBox="0 0 1920 40"
              preserveAspectRatio="none"
              className={styles["teacher-wave-svg-fill"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,40 L0,27 C40,27 40,8 80,8 C120,8 120,27 160,27 C200,27 200,8 240,8 C280,8 280,27 320,27 C360,27 360,8 400,8 C440,8 440,27 480,27 C520,27 520,8 560,8 C600,8 600,27 640,27 C680,27 680,8 720,8 C760,8 760,27 800,27 C840,27 840,8 880,8 C920,8 920,27 960,27 C1000,27 1000,8 1040,8 C1080,8 1080,27 1120,27 C1160,27 1160,8 1200,8 C1240,8 1240,27 1280,27 C1320,27 1320,8 1360,8 C1400,8 1400,27 1440,27 C1480,27 1480,8 1520,8 C1560,8 1560,27 1600,27 C1640,27 1640,8 1680,8 C1720,8 1720,27 1760,27 C1800,27 1800,8 1840,8 C1880,8 1880,27 1920,27 L1920,40 Z"
                className={styles["teacher-wave-fill-bg"]}
              />
            </svg>
          </div>
        </section>

        <section className={styles["teacher-signup-section"]}>
          <h2 className={styles["teacher-signup-heading"]}>
            Interested in supporting Hack Club at your school or community
            space?
          </h2>
          <p className={styles["teacher-signup-lede"]}>
            Leave your email and we’ll keep you updated on opportunities to
            support Hack Club in your community!
          </p>
          <TeachersEmailSignup />
        </section>
      </main>
      <Footer />
    </>
  );
}

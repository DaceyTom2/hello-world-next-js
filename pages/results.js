import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ResultsCardContainer from "../components/card/resultsCardContainer";
import Link from "next/link";

export async function getStaticProps() {
  const allResultsData = {
    votables: [
      {
        id: "Hulk",
        name: "The Hulk",
        votes: 0,
      },
      {
        key: "Spiderman",
        name: "Spiderman",
        votes: 2,
      },
      {
        key: "Ironman",
        name: "Ironman",
        votes: 0,
      },
    ],
    totalVotes: 2,
  };

  return {
    props: {
      allResultsData,
    },
  };
}

export default function Results({ allResultsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Voting tiles</h1>
        <p>Select a tile you'd like to place your vote on</p>
      </section>
      <section>
        <ResultsCardContainer resultsCards={allResultsData.votables} />
        <Link href={`voting`}>
          <a>Voting</a>
        </Link>
      </section>
    </Layout>
  );
}

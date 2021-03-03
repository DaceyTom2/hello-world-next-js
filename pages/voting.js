import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import CardContainer from "../components/card/cardContainer";
import Link from "next/link";
import { usePostVotes } from "../lib/useVotes";
import { getSortedVotingData } from "../lib/votesData";

export async function getStaticProps() {
  const allVoteCardData = getSortedVotingData();

  return {
    props: {
      allVoteCardData,
    },
  };
}

export const handleCardClick = (e, id) => {
  usePostVotes("/api/votes", id);
};

export default function Voting({ allVoteCardData }) {
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
        <CardContainer
          votingCards={allVoteCardData}
          onCardClick={handleCardClick}
        />
        <Link href={`results`}>
          <a>Results</a>
        </Link>
      </section>
    </Layout>
  );
}

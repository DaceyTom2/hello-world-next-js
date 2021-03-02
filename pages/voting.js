import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import CardContainer from "../components/card/cardContainer";

export async function getStaticProps() {
  const allPostsData = {
    votingCards: [
      {
        key: "Hulk",
        name: "The Hulk",
        description: "Strong green man",
        image: "/images/hulk.png",
      },
      {
        key: "Spiderman",
        name: "Spiderman",
        description: "Spider like senses",
        image: "/images/spiderman.png",
      },
      {
        key: "Ironman",
        name: "Ironman",
        description: "Tech enabled nerd",
        image: "/images/ironman.png",
      },
    ],
  };

  return {
    props: {
      allPostsData,
    },
  };
}

export const handleCardClick = (e, id) => {
  console.log(id);
};

export default function Voting({ allPostsData }) {
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
          votingCards={allPostsData.votingCards}
          onCardClick={handleCardClick}
        />
      </section>
    </Layout>
  );
}

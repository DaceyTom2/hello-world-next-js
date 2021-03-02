import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ResultsCardContainer from "../components/card/resultsCardContainer";
import Link from "next/link";
import { useGetResults } from "../lib/useResults";

export default function Results() {
  const { results, error } = useGetResults("http://localhost:3000/api/votes");
  if (error) return <h1>Something went wrong!</h1>;
  if (!results) return <h1>Loading...</h1>;
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
        <ResultsCardContainer resultsCards={results.votables} />
        <Link href={`voting`}>
          <a>Voting</a>
        </Link>
      </section>
    </Layout>
  );
}

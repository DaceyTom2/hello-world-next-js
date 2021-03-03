import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ResultsCardContainer from "../components/card/resultsCardContainer";
import Link from "next/link";
import { useGetResults } from "../lib/useResults";
import { usePostResetVotes } from "../lib/useVotes";

export default function Results() {
  const { results, error } = useGetResults("/api/votes");
  if (error) return <h1>Something went wrong!</h1>;
  if (!results) return <h1>Loading...</h1>;
  let handleResetVotesClick = (e) => {
    usePostResetVotes();
  };
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Voting Results</h1>
      </section>
      <section>
        <ResultsCardContainer resultsCards={results.votables} />
        <Link href={`voting`}>
          <a>Voting</a>
        </Link>
        <button onClick={handleResetVotesClick}>Clear Results</button>
      </section>
    </Layout>
  );
}

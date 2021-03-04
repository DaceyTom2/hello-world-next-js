import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Thomas Dacey";
export const siteTitle = "SITE-VOTE";

export default function Layout({ children, home }) {
  return (
    <div className="cd-hero">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div class="cd-slider-nav">
        <nav class="navbar">
          <div class="tm-navbar-bg">
            <Link href="/">
              <a class="navbar-brand text-uppercase">
                <i class="fa fa-flash tm-brand-icon"></i>
                {siteTitle}
              </a>
            </Link>
            <button
              class="navbar-toggler hidden-lg-up"
              type="button"
              data-toggle="collapse"
              data-target="#tmNavbar"
            >
              &#9776;
            </button>
            <div
              class="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar"
              id="tmNavbar"
            >
              <ul class="nav navbar-nav">
                <li class="nav-item">
                  <Link href="/">
                    <a class="nav-link">Home</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/voting">
                    <a class="nav-link">Voting</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/results">
                    <a class="nav-link">Results</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class="cd-hero-slider">
        <li class="selected">
          <div class="cd-full-width">
            <div
              class="container-fluid js-tm-page-content tm-page-pad"
              data-page-no="1"
            >
              <div class="row">
                <div class="tm-3-col-container">
                  <main>{children}</main>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={styles.heroBanner}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--primary button--lg"
						to="/docs/intro"
					>
						Lire la documentation →
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="https://github.com/progres-docs/progres-docs.github.io/issues/new"
					>
						Contribuer
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description={siteConfig.tagline}>
			<HomepageHeader />
			<main>
				<div
					className="container"
					style={{ padding: "3rem 0", textAlign: "center" }}
				>
					<h2>Choisissez un module</h2>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "1.5rem",
							marginTop: "2rem",
							flexWrap: "wrap",
						}}
					>
						<Link
							className="button button--primary button--lg"
							to="/docs/webfve"
						>
							webfve — Formation
						</Link>
						<Link
							className="button button--secondary button--lg"
							to="/docs/webgrh"
						>
							webgrh — RH
						</Link>
						<Link
							className="button button--secondary button--lg"
							to="/docs/webetu"
						>
							webetu — Étudiants
						</Link>
					</div>
				</div>
			</main>
		</Layout>
	);
}

import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeContext } from '../../app';
import BlogSection from './BlogSection';

const MainImage = lazy(() => import('./MainImage'));
const FullName = lazy(() => import('../../components/FullName'));

export default function Home() {
	const { selectedTheme } = React.useContext(ThemeContext);

	return (
		<>
		<Helmet>
			<meta name="description" content="Stefan Djokic - Portfolio website of a fullstack web developer and SEO specialist." />
		</Helmet>
			<section className="home-page">
				<div className="container">
					<section className="home-page__image">
						<img
							alt="Stefan Djokic developer profile picture 2019"
							src={
								selectedTheme === 'light'
									? 'https://res.cloudinary.com/sdee3-com/image/upload/v1563285594/stefan_djokic_2_z7uz6y.jpg'
									: 'https://res.cloudinary.com/sdee3-com/image/upload/v1521535854/stefan_djokic_dzja6v.png'
							}
						/>
						<FullName large />
						<section className="home-page__headlines">
							<p>Fullstack Developer</p>
							<span className="dot" />
							<p>SEO Professional</p>
							<span className="dot" />
							<p>Born in 🇷🇸, Living in 🇨🇿</p>
						</section>
					</section>
				</div>
				<MainImage Link={Link} />
				<BlogSection Link={Link} />
			</section>
		</>
	);
}

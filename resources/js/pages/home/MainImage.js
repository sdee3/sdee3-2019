import React from 'react';

export default function MainImage({ Link }) {
	return (
		<section className="home-page__main-image">
			<div className="container">
				<h2>Serving clients since 2015</h2>
				<section className="home-page__main-image--stack">
					<i className="fab fa-react" />
					<i className="fab fa-vuejs" />
					<i className="fab fa-js-square" />
					<i className="fab fa-sass" />
					<i className="fab fa-docker" />
					<i className="fab fa-laravel" />
					<i className="fab fa-android" />
				</section>
				<Link to="/contact">
					<button className="button">Get in touch</button>
				</Link>
			</div>
		</section>
	);
}

import React, { lazy } from 'react';

const BlogPostCards = lazy(() => import('../blog/BlogPostCards'));

export default function BlogSection({ Link }) {
	return (
		<section className="home-page__blog-section">
			<div className="container">
				<h2>Do You Blog?</h2>
				<p>
					Not as rarely as{' '}
					<a
						href="https://overreacted.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						@dan_abramov
					</a>
					, but not as frequently as the guys over at{' '}
					<a href="https://scotch.io" target="_blank" rel="noopener noreferrer">
						scotch.io
					</a>
					.
				</p>
				<p>
					I do post an occasional article, though. That&apos;s probably the
					important thing.
				</p>
				<section className="home-page__blog-section--latest">
					<h3>Check out the latest articles:</h3>
					<BlogPostCards />
					<Link to="/blog">
						<button className="button">View all</button>
					</Link>
				</section>
			</div>
		</section>
	);
}

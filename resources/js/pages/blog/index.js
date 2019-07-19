import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Helpers';

const BlogPostCards = lazy(() => import('./BlogPostCards'));
const Breadcrumbs = lazy(() => import('../../components/Breadcrumbs'));

export default function Blog() {
	return (
		<>
			<Breadcrumbs page={<Link to="/blog">Blog</Link>} />
			<section className="blog-page">
				<div className="container">
					<div className="blog-page__top-heading">
						<h1>Blog</h1>
						{isAuthenticated() ? (
							<Link to="/blog/new">
								<button className="button">New Article</button>
							</Link>
						) : null}
					</div>
					<BlogPostCards />
				</div>
			</section>
		</>
	);
}

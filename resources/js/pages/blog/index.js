import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { isAuthenticated } from '../../Helpers';

const BlogPostCards = lazy(() => import('./BlogPostCards'));
const Breadcrumbs = lazy(() => import('../../components/Breadcrumbs'));

export default function Blog() {
	return (
		<>
			<Helmet>
				<title>Stefan Djokic | Blog</title>
				<meta name="description" content="This blog, created and curated by Stefan Djokic, features personal views on the latest web development trends." />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`https://sdee3.com/blog`} />
				<meta property="og:title" content="Stefan Djokic | Blog" />
				<meta property="og:description" content="This blog, created and curated by Stefan Djokic, features personal views on the latest web development trends." />
				<meta property="og:image" content="https://res.cloudinary.com/sdee3-com/image/upload/v1522847747/blog/Web-Dev-Company-Whiteboard.jpg" />
				
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={`https://sdee3.com/blog`} />
				<meta property="twitter:title" content="Stefan Djokic | Blog" />
				<meta property="twitter:description" content="This blog, created and curated by Stefan Djokic, features personal views on the latest web development trends." />
				<meta property="twitter:image" content="https://res.cloudinary.com/sdee3-com/image/upload/v1522847747/blog/Web-Dev-Company-Whiteboard.jpg" />
			</Helmet>
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

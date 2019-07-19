import React, { lazy } from 'react';
import axios from 'axios';
import { CategoriesContext } from '../../app';

const ArticleCard = lazy(() => import('./ArticleCard'));

export default function BlogPostCards() {
	const [blogPosts, setBlogPosts] = React.useState([]);
	const categoriesContext = React.useContext(CategoriesContext);

	React.useEffect(() => {
		axios
			.get('/api/articles')
			.then(res => {
				setBlogPosts(res.data);
			})
			.catch(err => console.error(err.response.data));
	}, []);

	return (
		<section className="blog-page__blog-posts">
			{blogPosts.map((blogPost, index) => (
				<ArticleCard
					article={blogPost}
					key={index}
					category={
						categoriesContext
							? categoriesContext.categories.length
								? categoriesContext.categories.filter(
									c => c.id === blogPost.category_id
								  )[0].name
								: null
							: null
					}
				/>
			))}
		</section>
	);
}

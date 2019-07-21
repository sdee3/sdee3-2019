import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<section className="footer">
			<div className="footer__content container">
				<section className="contact-info">
					<ul>
						<li>
							<i className="fa fa-envelope fa-2x mr-3" />
							<a href="mailto:stefandjokic@pm.me">stefandjokic@pm.me</a>
						</li>
					</ul>
				</section>
				<section className="social">
					<ul>
						<li>
							<a
								href="https://www.facebook.com/thestefandjokic"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook-f fa-2x" />
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/thestefandjokic"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-twitter fa-2x" />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/thestefandjokic/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-instagram fa-2x" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/stefandjokic96/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin fa-2x" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/sdee3"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github fa-2x" />
							</a>
						</li>
					</ul>
				</section>
				<section className="links">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/blog">Blog</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</section>
			</div>
			<div className="container footer__copyright">
				Copyright &copy; Stefan Đokić 2019.
			</div>
		</section>
	);
}

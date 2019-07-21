import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

const FullName = lazy(() => import('./FullName'));
const ThemeSwitcher = lazy(() => import('./ThemeSwitcher'));

export default function Navbar() {
	return (
		<section className="navbar">
			<div className="container">
				<div className="navbar__brand">
					<Link to="/">
						<FullName />
					</Link>
				</div>
				<input type="checkbox" id="nav-check" />
				<section className="navbar__mobile-buttons">
					<label htmlFor="nav-check">
						<span />
						<span />
						<span />
					</label>
				</section>
				<section className="navbar__links">
					<ThemeSwitcher />
					<Link to="/blog">Blog</Link>
					<Link to="/contact">Contact</Link>
				</section>
			</div>
		</section>
	);
}

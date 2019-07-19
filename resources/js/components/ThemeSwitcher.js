import React from 'react';
import { ThemeContext } from '../app';

export default function ThemeSwitcher() {
	const [checked, setChecked] = React.useState(false);
	const { selectedTheme, setSelectedTheme } = React.useContext(ThemeContext);

	React.useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			setChecked(true);
		} else if (localStorage.getItem('theme') === 'light') {
			setChecked(false);
		}
	}, []);

	React.useEffect(() => {
		if (checked && selectedTheme !== 'dark') {
			setSelectedTheme('dark');
		} else if (!checked && selectedTheme !== 'light') {
			setSelectedTheme('light');
		}
	});

	return (
		<section className="navbar__links--theme-switch">
			<i className="fas fa-sun" />
			<label className="switch">
				<input
					type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<span className="slider round" />
			</label>
			<i className="fas fa-moon" />
		</section>
	);
}

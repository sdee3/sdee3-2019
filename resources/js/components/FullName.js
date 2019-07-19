import React from 'react';

export default function FullName({ large }) {
	return (
		<div className="full-name" style={large ? { fontSize: '2.5rem' } : null}>
			<span className="full-name__first">Stefan</span>
			<span className="full-name__last">Đokić</span>
		</div>
	);
}

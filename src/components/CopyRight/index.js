import React from 'react'

import './footer.scss'

function CopyRight() {
	const email = 'myko@grymyk.com';
	const year = '2021';

	return (
		<div className="footer">
			<a href="mailto:{email}">{email}</a>
			<span> &#169;{year}</span>
		</div>
	)
}

export default CopyRight;

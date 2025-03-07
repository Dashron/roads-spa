import * as React from 'react';

export const title = 'Home';

export function Index(props: {}) {
	return (
		<div>
			<div>
				Hi!
			</div>
			<div>
				<a href="/firstpage">Check out the next page.</a>
			</div>
			<div>
				<a href="https://github.com/Dashron/roads-spa">Or the roads-spa github</a>
			</div>
		</div>

	);
}
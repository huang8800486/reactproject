import React from 'react';
import './index.scss';
import Bsearch from '@/components/Bsearch';
import BlockList from './BlockList';
export default function Home() {
	const callback = (value) => {
		console.log('父级接收的value', value)
	};
	return (
		<div className="inner_content index_inner">
			<div className="banner_wrapper">
				<div className="banner_box">
					<div className="page_view">
						<div className="banner_search">
							<h1>The RMC Blockchain Explorer</h1>
							<Bsearch handleInput={callback}></Bsearch>
						</div>
					</div>
				</div>
			</div>

			<BlockList></BlockList>
		</div>
	);
}

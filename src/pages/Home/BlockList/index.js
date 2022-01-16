import React from 'react';

export default function blockList(props) {
	const blockList = [
		{
			img: require('@/assets/images/block_01.png'),
			name: '',
			value: '',
		},
		{
			img: require('@/assets/images/block_02.png'),
			name: '',
			value: '',
		},
		{
			img: require('@/assets/images/block_03.png'),
			name: '',
			value: '',
		},
	];
	return (
		<div className="block_main_wrapper">
			<div className="page_view">
				<div className="block_main_box clearfix">
					{blockList.map((item, index) => {
						return (
							<div className="block_item clearfix" key={index}>
								<div className="block_img">
									<img src={item.img} alt="" />
								</div>
								<div className="block_text">
									<h2>{item.name}</h2>
									<span>{item.value}</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

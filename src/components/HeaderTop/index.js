import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
const HeaderTop = () => {
	const navList = [
		{ path: '/', type: 'self', text: 'Home' },
		{ path: '/blocks', type: 'self', text: 'Blocks' },
		{ path: 'https://www.rmc.city', type: 'target', text: 'About RMC' },
	];

	return (
		<div className="header_top">
			<div className="header_wrap clearfix">
				<Link to="/" className="header_logo">
					<img src={require('@/assets/images/logo-dark.png')} alt="" />
				</Link>
				<div className="header_navs">
					<div className="header_big header_right clearfix">
						<div className="navs_list_wrap">
							<div className="navs_list clearfix">
								<div className="navs clarfix">
									{navList.map((item, index) => {
										return item.type === 'self' ? (
											<Fragment key={index}>
												<NavLink
													to={item.path}
													className={({ isActive }) => 'tit' + (isActive ? ' router-link-active' : '')}
												>
													{item.text}
												</NavLink>
											</Fragment>
										) : (
											<Fragment key={index}>
												<a href={item.path} className="tit" rel="noopener noreferrer" target="_blank">
													{item.text}
												</a>
											</Fragment>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeaderTop;

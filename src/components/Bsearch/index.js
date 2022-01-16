import React, { useRef } from 'react';
import './index.scss';
export default function Bsearch(props) {
	// 从父级传过来的事件
	const { handleInput, placeholder } = props;

	// useRef定义input输入的值
	const inputVal = useRef(null);

	return (
		<div className="base_search_components">
			<div className="search_wrapper">
				<div className="search_input">
					<input
						type="text"
						ref={inputVal}
						placeholder={placeholder || 'Search by Address / Txn Hash / Block'}
						onChange={() => {
							handleInput(inputVal.current.value);
						}}
					/>
					<button
						className="search_button"
						onClick={() => {
							handleInput(inputVal.current.value);
						}}
					>
						<img src={require('@/assets/images/search.png')} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}

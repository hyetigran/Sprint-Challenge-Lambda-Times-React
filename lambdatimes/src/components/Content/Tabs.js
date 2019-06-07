import React from 'react';
import Tab from './Tab';
import pt from 'prop-types';

const Tabs = props => {
	return (
		<div className="tabs">
			<div className="topics">
				<span className="title">TRENDING TOPICS:</span>
				{/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
				{props.tabs.map(tab => (
					<Tab
						key={tab}
						tab={tab}
						selectedTab={props.selectedTab}
						selectTabHandler={props.selectTabHandler}
					/>
				))}
			</div>
		</div>
	);
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
	tabs: pt.array.isRequired,
	selectedTab: pt.string.isRequired,
	selectTabHandler: pt.func.isRequired
};
export default Tabs;

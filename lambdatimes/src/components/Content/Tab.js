import React from 'react';
import '../../CSS/index.css';
import pt from 'prop-types';

const Tab = props => {
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	const isMatch = props.tab === props.selectedTab;
	console.log(props.tab, props.selectedTab);
	const activeTab = isMatch ? `tab active-tab` : `tab`;

	const onTabChange = event => {
		props.selectTabHandler(props.tab);
	};

	return (
		<div className={activeTab} onClick onClick={onTabChange}>
			{props.tab.toUpperCase()}
		</div>
	);
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
	tab: pt.string.isRequired,
	selectedTab: pt.string.isRequired,
	selectTabHandler: pt.func.isRequired
};

export default Tab;

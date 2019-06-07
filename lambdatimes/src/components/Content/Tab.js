import React from 'react';
import '../../CSS/index.css';

const Tab = props => {
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	const isMatch = props.tab === props.selectedTab;
	const activeTab = isMatch ? `tab .active-tab` : `tab`;

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

export default Tab;

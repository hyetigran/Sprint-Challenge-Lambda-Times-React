import React, { Component } from 'react';
import Card from './Card';
import pt from 'prop-types';

const Cards = props => {
	return <div className="cards-container">{props.cards.map(card => <Card key={card.id} card={card} />)}</div>;
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
	card: pt.shape({
		id: pt.string.isRequired,
		headline: pt.string.isRequired,
		tab: pt.string.isRequired,
		img: pt.string.isRequired,
		author: pt.string.isRequired
	})
};

export default Cards;

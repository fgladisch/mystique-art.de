import React from "react";
import { Row, Col, Media } from "reactstrap";

import "./Offer.css";

const renderPreview = (image, title) => {
	if (image) {
		return (
			<Col xs="12" lg className="Offer-preview mb-3">
				<Media object src={image} alt={title} className="Offer-preview-image shadow" />
			</Col>
		);
	}
	return null;
};

const Offer = ({ title, price, image, children }) => (
	<Row className="mb-5">
		{renderPreview(image, title)}
		<Col xs="10" lg>
			<h5>{title}</h5>
			{children}
		</Col>
		<Col xs="2">{price}</Col>
	</Row>
);

export default Offer;

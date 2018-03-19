import React from "react";

const Offer = ({ title, text, price }) => (
	<div>
		<h5>{title}</h5>
		<dl className="row">
			<dd className="col-10">{text}</dd>
			<dt className="col-2 text-right">{price}</dt>
		</dl>
	</div>
);

export default Offer;

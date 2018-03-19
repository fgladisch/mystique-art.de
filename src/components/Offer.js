import React from "react";

const Offer = ({ title, price, children }) => (
	<div>
		<h5>{title}</h5>
		<dl className="row">
			<dd className="col-10">{children}</dd>
			<dt className="col-2 text-right">{price}</dt>
		</dl>
	</div>
);

export default Offer;

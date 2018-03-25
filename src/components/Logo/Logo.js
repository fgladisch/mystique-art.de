import React from "react";
import { Media } from "reactstrap";

import "./Logo.css";

import imageLogo from "../../images/logo.png";

const Logo = () => (
	<div className="Logo">
		<Media object src={imageLogo} alt="Logo" />
		<div className="Logo-subtitle">Photography</div>
	</div>
);

export default Logo;

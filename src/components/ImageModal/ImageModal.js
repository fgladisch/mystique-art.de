import React, { Component } from "react";
import { Button, Modal, Media, ModalFooter } from "reactstrap";

import "./ImageModal.css";

class ImageModal extends Component {
	state = {
		isLarge: false
	};

	onLoaded = ({ target: img }) => {
		console.log(img);
		this.setState({
			isLarge: img.offsetWidth > img.offsetHeight
		});
	};

	render() {
		const { isOpen, toggle, image } = this.props;
		console.log(this.state.isLarge);
		return (
			<Modal size={this.state.isLarge ? "lg" : ""} centered={true} isOpen={isOpen} toggle={toggle}>
				<Media object width="100%" src={image} alt="Vorschau" onLoad={this.onLoaded} />
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Schließen
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default ImageModal;

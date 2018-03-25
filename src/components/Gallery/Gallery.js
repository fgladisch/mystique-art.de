import React, { Component } from "react";
import Masonry from "masonry-layout";

import "./Gallery.css";
import images from "../../images/gallery";
import ImageModal from "../ImageModal/ImageModal";

const MasonryOptions = {
	itemSelector: ".tile",
	transitionDuration: 0,
	stagger: 0
};

class Gallery extends Component {
	state = {
		loaded: 0,
		loadingCompleted: false,
		modalImageIndex: -1,
		isModalOpen: false
	};

	onLoaded = () => {
		const newState = { loaded: this.state.loaded + 1 };
		if (newState.loaded === images.length) {
			newState.loadingCompleted = true;
		}
		this.setState(newState);
	};

	toggleModal = imageIndex => {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
			modalImageIndex: imageIndex !== null ? imageIndex : this.state.modalImageIndex
		});
	};

	render() {
		if (this.state.loadingCompleted) {
			new Masonry(this.element, MasonryOptions);
		}

		const tiles = images.map((item, index) => {
			const tileClasses = `tile ${!this.state.loadingCompleted ? "hidden" : ""}`;
			return (
				<div className={tileClasses} key={index} onClick={() => this.toggleModal(index)}>
					<img src={item} alt={index} onLoad={() => this.onLoaded()} />
				</div>
			);
		});

		return (
			<div>
				<ImageModal
					image={images[this.state.modalImageIndex]}
					isOpen={this.state.isModalOpen}
					toggle={() => this.toggleModal(null)}
				/>
				<div className="mb-5" ref={ref => (this.element = ref)}>
					{tiles}
				</div>
			</div>
		);
	}
}

export default Gallery;

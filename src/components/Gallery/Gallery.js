import React, { Component } from "react";
import Masonry from "masonry-layout";

import "./Gallery.css";
import images from "../../images/gallery";

const MasonryOptions = {
	itemSelector: ".tile",
	transitionDuration: 0,
	stagger: 0
};

class Gallery extends Component {
	state = {
		loaded: 0,
		loadingCompleted: false
	};

	onLoaded = () => {
		const newState = { loaded: this.state.loaded + 1 };
		if (newState.loaded === images.length) {
			newState.loadingCompleted = true;
		}
		this.setState(newState);
	};

	render() {
		if (this.state.loadingCompleted) {
			new Masonry(this.element, MasonryOptions);
		}

		const tiles = images.map((item, index) => {
			const tileClasses = `tile ${!this.state.loadingCompleted ? "hidden" : ""}`;
			return (
				<div className={tileClasses} key={index}>
					<img className="shadow" src={item} alt={index} onLoad={() => this.onLoaded()} />
				</div>
			);
		});

		return (
			<div className="mb-5" ref={ref => (this.element = ref)}>
				{tiles}
			</div>
		);
	}
}

export default Gallery;

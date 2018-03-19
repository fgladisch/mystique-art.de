import React, { Component } from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl
	// CarouselIndicators
} from "reactstrap";

import slideImage1 from "../../images/slides/merle.jpg";
import slideImage2 from "../../images/slides/cira.jpg";
import slideImage3 from "../../images/slides/stina.jpg";
import slideImage4 from "../../images/slides/aliencira.jpg";

import "./Slides.css";

const items = [
	{
		src: slideImage1,
		altText: "Model Merle"
	},
	{
		src: slideImage2,
		altText: "Model Cira"
	},
	{
		src: slideImage3,
		altText: "Model Stina"
	},
	{
		src: slideImage4,
		altText: "Model Cira als Alien"
	}
];

class Slides extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img className="w-100" src={item.src} alt={item.altText} />
				</CarouselItem>
			);
		});

		return (
			<Carousel
				slide={true}
				interval={5000}
				pause={false}
				ride="carousel"
				className="mb-5"
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}
			>
				{/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={this.previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={this.next}
				/>
			</Carousel>
		);
	}
}

export default Slides;

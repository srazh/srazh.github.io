import React from 'react';
import antelopeCanyon from "../../assets/Play/antelopeCanyon.jpg";
import ballet from "../../assets/Play/ballet.jpg";
import goldfish from "../../assets/Play/goldfish.jpg";
import jellyfish from "../../assets/Play/jellyfish.jpg";

export default function Play() {

	return (
		<div class="row">
		<div class="column">
			<img src={antelopeCanyon} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>
		</div>
		<div class="column">
			<img src={ballet} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>
		</div>
		<div class="column">
			<img src={goldfish} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>
		</div>
		<div class="column">
			<img src={jellyfish} className="play-pics" alt="antelope canyon" onclick="myFunction(this);" width="300" height="400"/>
		</div>
		</div>

	);
}











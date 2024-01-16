import React from "react";
import "./styles.css";
import rewind from "../assets/rewind.jpg";
import boots from "../assets/boots.jpg";
import eras from "../assets/eras.jpg";
console.log(rewind);
console.log(boots);
console.log(eras);

class MovieList extends React.Component {
	render() {
		return (
			<>
				<div class="img-group">
					<div class="cont">
						<h3>Rewind</h3>
						<hr />
						<a href="https://www.imdb.com/title/tt28152455/" target="_blank">
							<img src={rewind} class="card-img" alt="Rewind" />
						</a>
						<hr />
						<p>
							A man gets the extraordinary opportunity to rewind time and save
							the life of the woman he loves.
						</p>
						<hr />
					</div>
					<div class="cont">
						<h3>Puss in Boots</h3>
						<hr />
						<a href="https://www.imdb.com/title/tt3915174/" target="_blank">
							<img src={boots} class="card-img" alt="Boots" />
						</a>
						<hr />
						<p>
							Puss in Boots discovers that his passion for adventure has taken
							its toll when he learns that he has burnt through eight of his
							nine lives.
						</p>
						<hr />
					</div>
					<div class="cont">
						<h3>The Eras Tour</h3>
						<hr />
						<a href="https://www.imdb.com/title/tt28814949/" target="_blank">
							<img src={eras} class="card-img" alt="Eras" />
						</a>
						<hr />
						<p>
							Immerse yourself in cinematic views from the history-making tour,
							which features music from Taylor's 17-year award-winning career.
						</p>
						<hr />
					</div>
				</div>
			</>
		);
	}
}
export default MovieList;

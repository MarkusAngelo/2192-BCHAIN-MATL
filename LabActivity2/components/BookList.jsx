import "./styles.css";
import gatsby from "../assets/gatsby.jpg";
import grey from "../assets/grey.jpg";
import games from "../assets/games.jpg";
console.log(gatsby);
console.log(grey);
console.log(games);

export default function BookList() {
	return (
		<>
			<div class="img-group">
				<div class="cont">
					<h3>The Great Gatsby</h3>
					<hr />
					<a
						href="https://en.wikipedia.org/wiki/The_Great_Gatsby"
						target="_blank"
					>
						<img src={gatsby} class="card-img" alt="The Great Gatsby" />
					</a>
					<hr />
					<p>
						The Great Gatsby explores themes of wealth, love, and the American
						Dream through Jay Gatsby, set against the backdrop of the 1920s.
					</p>
					<hr />
				</div>
				<div class="cont">
					<h3>50 Shades of Grey</h3>
					<hr />
					<a
						href="https://en.wikipedia.org/wiki/Fifty_Shades_of_Grey"
						target="_blank"
					>
						<img src={grey} class="card-img" alt="Fifth Shades" />
					</a>
					<hr />
					<p>
						Fifty Shades of Grey delves into the complex relationship between
						Anastasia Steele and Christian Grey.
					</p>
					<hr />
				</div>
				<div class="cont">
					<h3>The Hunger Games</h3>
					<hr />
					<a
						href="https://en.wikipedia.org/wiki/The_Hunger_Games"
						target="_blank"
					>
						<img src={games} class="card-img" alt="Hunger Games" />
					</a>
					<hr />
					<p>
						The Hunger Games follows Katniss Everdeen as she navigates a
						televised fight to the death in a post-apocalyptic world.
					</p>
					<hr />
				</div>
			</div>
		</>
	);
}

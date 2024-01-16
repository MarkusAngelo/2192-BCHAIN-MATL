import "./styles.css";
import React from "react";
import porch from "../assets/porch.jpg";
import wash from "../assets/wash.jpg";
import bchain from "../assets/bchain.jpg";
console.log(porch);
console.log(wash);
console.log(bchain);

class ToDoList extends React.Component {
	render() {
		return (
			<>
				<div class="img-group">
					<div class="cont">
						<h3>Clean Porch</h3>
						<hr />
						<a
							href="https://www.marthastewart.com/1145149/tips-porch-looking-like-new"
							target="_blank"
						>
							<img src={porch} class="card-img" alt="Porch" />
						</a>
						<hr />
						<p>
							Prioritize a serene outdoor space – sweep away debris, scrub
							surfaces, and tidy up the porch for a warm and inviting haven.
						</p>
						<hr />
					</div>
					<div class="cont">
						<h3>Wash Car</h3>
						<hr />
						<a
							href="https://www.realsimple.com/home-organizing/cleaning/home-car-wash"
							target="_blank"
						>
							<img src={wash} class="card-img" alt="Car Wash" />
						</a>
						<hr />
						<p>
							Invest time in the car's upkeep – polish and clean the exterior,
							vacuum and tidy the interior, ensuring a well-maintained, gleaming
							vehicle.
						</p>
						<hr />
					</div>
					<div class="cont">
						<h3>Attend BCHAIN Class</h3>
						<hr />
						<a href="https://www.ibm.com/topics/blockchain" target="_blank">
							<img src={bchain} class="card-img" alt="BlockChain" />
						</a>
						<hr />
						<p>
							Dedicate time to attend the blockchain class for an understanding
							of decentralized systems and innovative digital ledger
							technologies.
						</p>
						<hr />
					</div>
				</div>
			</>
		);
	}
}
export default ToDoList;

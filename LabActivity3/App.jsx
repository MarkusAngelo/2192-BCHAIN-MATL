// Laus, Mark Angelo T.
// WD - 401

import { useState } from "react";
import "./App.css";
import ShinyButton from "./components/Conditional-Demo-1";
import Appl from "./components/Conditional-Demo-2";
import Appli from "./components/Conditional-Demo-3";
import Applic from "./components/Conditional-Demo-4";

function App() {
	return (
		<>
			<div class="accordion accordion-flush" id="accordionFlushExample">
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							Demo 1
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						class="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div class="accordion-body">
							<ShinyButton />
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							aria-controls="flush-collapseTwo"
						>
							Demo 2
						</button>
					</h2>
					<div
						id="flush-collapseTwo"
						class="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div class="accordion-body">
							<Appl />
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree"
						>
							Demo 3
						</button>
					</h2>
					<div
						id="flush-collapseThree"
						class="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div class="accordion-body">
							<Appli />
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseFour"
							aria-expanded="false"
							aria-controls="flush-collapseFour"
						>
							Demo 4
						</button>
					</h2>
					<div
						id="flush-collapseFour"
						class="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div class="accordion-body">
							<Applic />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

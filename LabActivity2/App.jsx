// Laus, Mark Angelo T.
// WD - 401

import { useState } from "react";
import "./App.css";
import ToDoList from "./components/TodoList";
import MovieList from "./components/MovieList";
import BookList from "./components/BookList";

function App() {
	return (
		<>
			<div
				class="btn-group"
				role="group"
				aria-label="Basic mixed styles example"
			>
				<button
					type="button"
					class="btn btn-primary"
					data-bs-toggle="collapse"
					href="#multiCollapseExample1"
					aria-expanded="false"
					aria-controls="multiCollapseExample1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-card-checklist"
						viewBox="0 0 16 16"
					>
						<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
						<path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
					</svg>
				</button>
				<button
					type="button"
					class="btn btn-warning"
					data-bs-toggle="collapse"
					data-bs-target="#multiCollapseExample2"
					aria-expanded="false"
					aria-controls="multiCollapseExample2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-film"
						viewBox="0 0 16 16"
					>
						<path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
					</svg>
				</button>
				<button
					type="button"
					class="btn btn-success"
					data-bs-toggle="collapse"
					data-bs-target="#multiCollapseExample3"
					aria-expanded="false"
					aria-controls="multiCollapseExample3"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-book"
						viewBox="0 0 16 16"
					>
						<path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
					</svg>
				</button>
			</div>
			<div id="buttons">
				<div class="col">
					<div
						class="collapse"
						id="multiCollapseExample1"
						data-bs-parent="#buttons"
					>
						<div>
							<ToDoList />
						</div>
					</div>
				</div>
				<div class="col">
					<div
						class="collapse"
						id="multiCollapseExample2"
						data-bs-parent="#buttons"
					>
						<div>
							<MovieList />
						</div>
					</div>
				</div>
				<div class="col">
					<div
						class="collapse"
						id="multiCollapseExample3"
						data-bs-parent="#buttons"
					>
						<div>
							<BookList />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

import "./styles3.css";

function GreetFriend(props) {
	return (
		<>
			<h1>Hello, {props.name}!</h1>
		</>
	);
}

function Greeting() {
	return (
		<>
			<GreetFriend name="Willow" />
		</>
	);
}

const ArrowGreeting = () => <h1>Hello! I am an arrow Function.</h1>;

function ShinyButton() {
	const handleClick = () => {
		alert("You Clicked Me!");
	};
	return <button onClick={handleClick}>Click this Button!</button>;
}

export default ShinyButton;

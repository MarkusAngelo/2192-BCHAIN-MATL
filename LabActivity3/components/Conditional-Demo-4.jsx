export default function Applic() {
	return (
		<div className={`${isRainy === true ? "dark" : "light"}`}>
			<RainOrShine />
		</div>
	);
}

function Rainy() {
	return <h1>Bring Your Umbrella!</h1>;
}

function Sunny() {
	return <h1>Bring Your Sunglasses!</h1>;
}

const isRainy = true;

function RainOrShine(props) {
	const isRainy = props.isRainy;
	return isRainy ? <Rainy /> : <Sunny />;
}

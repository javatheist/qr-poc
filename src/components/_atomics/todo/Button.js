// src/components/Button.js
export const Button = ({
	bgColor = "lightblue",
	children = "Button",
	...props
}) => {
	return (
		<button style={{ backgroundColor: bgColor }} {...props}>
			{children}
		</button>
	);
};

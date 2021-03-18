// src/stories/Button.stories.js

import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components/Button";

const stories = storiesOf("Button Test", module);

stories.add("Button", () => {
	const handleClick = () => {
		alert("You clicked the button!");
	};

	return (
		<Button bgColor="white" onClick={handleClick}>
			This is the Button's children
		</Button>
	);
});

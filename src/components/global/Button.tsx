import React from "react";

export interface ButtonProps {
	type: "button" | "submit" | "reset" | undefined;
	value?: string;
	buttonText: string;
}

export default function Button(props: ButtonProps) {
	const { type, value, buttonText } = props;
	return (
		<button
			type={type}
			value={value}
			className="p-2 bg-black text-white hover:bg-pink-200"
		>
			{buttonText}
		</button>
	);
}

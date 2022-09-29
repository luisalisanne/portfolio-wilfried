import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import Button from "../global/Button";

export default function ContactForm() {
	const { t } = useTranslation();
	const form = useRef(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"contact_service",
				"template_xikeizg",
				form.current!,
				"kT5frNpa74BhxhWzl"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log(form);
					alert(t("views.contact.form.successMessage"));
					window.location.reload();
				},
				(error) => {
					console.log(error.text);
					alert(t("views.contact.form.errorMessage"));
				}
			);
	};
	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className="flex flex-col gap-2 md:w-1/2"
		>
			<label>{t("views.contact.form.name")}</label>
			<input type="text" name="sender_name" className="border p-1" required />
			<label>{t("views.contact.form.email")}</label>
			<input type="email" name="sender_email" className="border p-1" required />
			<label>{t("views.contact.form.message")}</label>
			<textarea name="message" className="border p-1" required />
			<Button
				type={"submit"}
				value={"Send"}
				buttonText={t("views.contact.form.button")}
			/>
		</form>
	);
}

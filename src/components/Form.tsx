import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Form = ({ onSubmit }: FormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);

    const formElement = form.current;
    if (!formElement) {
      console.log("Form element is null");
      return;
    }

    emailjs
      .sendForm(
        "service_ov7omlf", // service ID
        "template_7km1uf8", // template ID
        formElement, // form element
        "xCqj68TisgeLUvPFm" // user ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="message"
        rows={6}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>
      <button type="submit" className="btn btn2">
        Submit
      </button>
    </form>
  );
};

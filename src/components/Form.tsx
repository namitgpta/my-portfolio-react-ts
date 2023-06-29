import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";
import LoadingIcons from "react-loading-icons";

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

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    document.getElementById("emailMsg")!.style.display = "none";

    const formElement = form.current;
    if (!formElement) {
      console.log("Form element is null");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "not found", // service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "not found", // template ID
        formElement, // form element
        process.env.REACT_APP_EMAILJS_USER_ID ?? "not found" // user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          document.getElementById("emailMsg")!.innerHTML =
            "Email Sent to Namit !!";
          document.getElementById("emailMsg")!.style.display = "block";
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          document.getElementById("emailMsg")!.innerHTML =
            "Error Sending Email !!";
          document.getElementById("emailMsg")!.style.display = "block";
          document.getElementById("emailMsg")!.style.color = "red";
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
      <LoadingIcons.Bars
        className={isLoading ? "loading formLoading" : "loading formNotLoading"}
      />
    </form>
  );
};

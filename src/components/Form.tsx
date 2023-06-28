import { useState } from "react";
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
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>
        Name: */}
      <input
        type="text"
        name="Name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      {/* </label> */}
      {/* <br /> */}
      {/* <label>
        Age: */}
      <input
        type="email"
        name="Email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      {/* </label> */}
      {/* <br /> */}
      <textarea
        name="Message"
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

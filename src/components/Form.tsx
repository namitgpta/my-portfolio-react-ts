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
    const config = {
      Username: "namitgpta24@gmail.com",
      Password: "0B89DED1B2083CF7138B99EF2B114B476201",
      Host: "smtp.elasticemail.com",
      Port: 2525,
      To: "namitgpta24@gmail.com",
      From: formData.email,
      Subject: `Portfolio Contact by ${formData.name}`,
      Body: `${formData.name}\n\n${formData.message}`,
    };
    
    if (window.Email) {
      window.Email.send(config).then((msg: string) =>
        console.log("Email Sent Successfully!!" + msg)
      );
    }
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

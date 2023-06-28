import { Form } from "./Form";
import "./styles.css";
import { FormData } from "./Form";

export const ContactRight = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="contact-right">
      <Form onSubmit={handleSubmit} />
      <span id="msg">Email Sent Successfully !!</span>
    </div>
  );
};

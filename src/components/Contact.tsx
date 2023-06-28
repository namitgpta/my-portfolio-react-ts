import { ContactLeft } from "./ContactLeft";
import { ContactRight } from "./ContactRight";
import "./styles.css";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </div>
  );
};

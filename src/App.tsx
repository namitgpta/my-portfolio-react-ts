import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Copyright } from "./components/Copyright";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;

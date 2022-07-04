import "./App.css";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import FooterText from "../FooterText/FooterText";

function App() {
  return (
    <>      
      <Navbar className="navbar-container" />
      <main>
        <Title />
      </main>
      <footer>
        <FooterText />
      </footer>
    </>
  );
}

export default App;

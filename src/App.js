import "./App.css";
import Section from "./component/Section";
import data from "./img/data.json";
import Logo from "./img/logo.jpg";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} />
      {data.map((mainCategory, index) => {
        return <Section key={index} mainCategory={mainCategory} />;
      })}
    </div>
  );
}

export default App;

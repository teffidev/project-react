import { Header } from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {Form} from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Form />
      <Footer />
    </div>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/base/Nav";
import Footer from "./components/base/Footer";

function App() {
  document.body.style.backgroundColor = "#181616";

  return (
    <div className="App">
      <Nav />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

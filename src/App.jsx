import { Routes, Route } from "react-router-dom";
// import CardsList from "./components/CardsList";
// import SearchBar from "./components/SearchBar";
import CardDetails from "./routes/CardDetails";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/card/:id"} element={<CardDetails />} />
    </Routes>
  );
}

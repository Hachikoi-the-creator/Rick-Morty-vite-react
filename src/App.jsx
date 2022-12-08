import { Routes, Route } from "react-router-dom";
import CardDetails from "./routes/CardDetails";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Test from "./routes/Test";
import Favourites from "./routes/Favourites";

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/test"} element={<Test />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/favourites"} element={<Favourites />} />
      <Route path={"/character/:id"} element={<CardDetails />} />
    </Routes>
  );
}

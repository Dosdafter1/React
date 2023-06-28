import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter.jsx";
import Films from "./components/Films/Films.jsx";
import ToDo from "./components/ToDo/ToDo";
import Header from "./components/Header/Header.jsx";
import Users from "./components/Users/Users.jsx";
import UserInfo from "./components/Users/UserInfo.jsx";
import FilmAPI from "./components/Films/FilmAPI.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ToDo/>} />
        <Route path="/counter" element={<Counter/>} />

        <Route path="/users" element={<Users/>}>
          <Route path=":id" element={<UserInfo />} />
        </Route>

        <Route path="/films" element={<Films/>} />
        <Route path="/film-api" element={<FilmAPI />} />
        <Route path="*" element={<h1>page not found...</h1>} />
      </Routes>
    </>
  );
}

export default App;

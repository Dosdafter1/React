import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter.jsx";
import Films from "./components/Films/Films.jsx";
import ToDo from "./components/ToDo/ToDo";
import Header from "./components/Header/Header.jsx";
import Users from "./components/Users/Users.jsx";
import UserInfo from "./components/Users/UserInfo.jsx";
import FilmAPI from "./components/Films/FilmAPI.jsx";
import UsersContext from "./contexts/UsersContext.js";
import { useEffect, useState } from "react";
import ThemeProvider from "./providers/ThemeProvider.js";
import FavoriteFilmProvider from "./providers/FavoriteFilmProvider.js";
import FavoriteFilmList from "./components/Films/FavoriteFilmList.jsx";


function App() {
  const [users, setUser] = useState([]);
  const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const result = await response.json();
      setUser(result);
  }
  useEffect(()=>{
    getUsers();
  },[]);
  return (
    <>
    <UsersContext.Provider value={users}>
      <ThemeProvider>
        <FavoriteFilmProvider>
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
          <FavoriteFilmList/>
        </FavoriteFilmProvider>
      </ThemeProvider>
    </UsersContext.Provider>
    </>
  );
}

export default App;

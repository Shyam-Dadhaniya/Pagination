import "./App.css";
import CharacterList from "./components/CharacterList";
import { Navigate, Route, Routes } from "react-router-dom";
import Character from "./components/Character";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          strict
          path="/"
          element={<Navigate to="/pagination/1" />}
        />

        <Route path="/pagination/:page" element={<CharacterList />} />
        <Route strict path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;

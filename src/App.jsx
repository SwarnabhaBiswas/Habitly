import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useHabits, ContextProvider } from "./contexts/HabitContext";


import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import AddHabit from "./pages/AddHabit";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/habits"} element={<Habits />} />
          <Route path={"/add"} element={<AddHabit />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

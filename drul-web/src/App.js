import { Route, Routes } from "react-router-dom";
import About from "./routes/about/about.component";
import Auth from "./routes/auth/auth.component";
import Explore from "./routes/explore/explore.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Auth />} />
        <Route path="profile/*" element={<About />} />
        <Route path="explore/*" element={<Explore />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;

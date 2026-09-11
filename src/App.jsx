import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Module01 from "./components/Module01";
import Learn01 from "./components/Learn01";
import Examples01 from "./components/Examples01";
import Practice01 from "./components/Practice01";
import LessonComplete01 from "./components/LessonComplete01";
import Homework01 from "./components/Homework01";
import HomeworkTeams from "./components/HomeworkTeams";
import HomeworkEmail from "./components/HomeworkEmail";
import HomeworkCalendar from "./components/HomeworkCalendar";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/project01" element={<Module01 />} />

      <Route path="/project01/grammar" element={<Learn01 />} />

      <Route path="/project01/examples" element={<Examples01 />} />

      <Route path="/project01/practice" element={<Practice01 />} />

      <Route path="/project01/complete" element={<LessonComplete01 />} />

      <Route
        path="/project01/homework"
        element={<Homework01 />}
      />
<Route
  path="/project01/homework/teams"
  element={<HomeworkTeams />}
/><Route
  path="/project01/homework/email"
  element={<HomeworkEmail />}
/>
<Route
  path="/project01/homework/calendar"
  element={<HomeworkCalendar />}
/>
    </Routes>
  );
}
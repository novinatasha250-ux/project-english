
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";

// PROJECT 01
import Module01 from "./components/Module01";
import Learn01 from "./components/Learn01";
import Examples01 from "./components/Examples01";
import Practice01 from "./components/Practice01";
import LessonComplete01 from "./components/LessonComplete01";

import Homework01 from "./components/Homework01";
import HomeworkTeams from "./components/HomeworkTeams";
import HomeworkEmail from "./components/HomeworkEmail";
import HomeworkCalendar from "./components/HomeworkCalendar";

// PROJECT 02
import Learn02 from "./components/Learn02";
import Module02 from "./components/Module02";
import Examples02 from "./components/Examples02";
import Practice02 from "./components/Practice02";
import LessonComplete02 from "./components/LessonComplete02";
import Homework02 from "./components/Homework02";
import HomeworkTeams02 from "./components/HomeworkTeams02";
import HomeworkEmail02 from "./components/HomeworkEmail02";
import HomeworkCalendar02 from "./components/HomeworkCalendar02";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PROJECT 01 */}
        <Route path="/project01" element={<Module01 />} />
        <Route path="/project01/grammar" element={<Learn01 />} />
        <Route path="/project01/examples" element={<Examples01 />} />
        <Route path="/project01/practice" element={<Practice01 />} />
        <Route path="/project01/complete" element={<LessonComplete01 />} />

        {/* PROJECT 01 HOMEWORK */}
        <Route
          path="/project01/homework"
          element={<Homework01 />}
        />

        <Route
          path="/project01/homework/teams"
          element={<HomeworkTeams />}
        />

        <Route
          path="/project01/homework/email"
          element={<HomeworkEmail />}
        />

        <Route
          path="/project01/homework/calendar"
          element={<HomeworkCalendar />}
        />

        {/* PROJECT 02 */}
<Route path="/project02" element={<Module02 />} />
<Route path="/project02/grammar" element={<Learn02 />} />
<Route path="/project02/examples" element={<Examples02 />} />
<Route path="/project02/practice" element={<Practice02 />} />
<Route path="/project02/complete" element={<LessonComplete02 />} />
{/* PROJECT 02 HOMEWORK */}

<Route
  path="/project02/homework"
  element={<Homework02 />}
/>

<Route
  path="/project02/homework/teams"
  element={<HomeworkTeams02 />}
/>

<Route
  path="/project02/homework/email"
  element={<HomeworkEmail02 />}
/>

<Route
  path="/project02/homework/calendar"
  element={<HomeworkCalendar02 />}
/>

      </Routes>
    </>
  );
}

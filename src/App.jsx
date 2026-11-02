
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";

// ============================================
// PROJECT 01
// ============================================

// Lesson
import Module01 from "./components/Module01";
import Learn01 from "./components/Learn01";
import Examples01 from "./components/Examples01";
import Practice01 from "./components/Practice01";
import LessonComplete01 from "./components/LessonComplete01";

// Homework
import Homework01 from "./components/Homework01";
import HomeworkTeams from "./components/HomeworkTeams";
import HomeworkEmail from "./components/HomeworkEmail";
import HomeworkCalendar from "./components/HomeworkCalendar";

// ============================================
// PROJECT 02
// ============================================

// Lesson
import Module02 from "./components/Module02";
import Learn02 from "./components/Learn02";
import Examples02 from "./components/Examples02";
import Practice02 from "./components/Practice02";
import LessonComplete02 from "./components/LessonComplete02";

// Homework
import Homework02 from "./components/Homework02";
import HomeworkTeams02 from "./components/HomeworkTeams02";
import HomeworkEmail02 from "./components/HomeworkEmail02";
import HomeworkCalendar02 from "./components/HomeworkCalendar02";

// ============================================
// PROJECT 03
// ============================================

// Lesson
import Module03 from "./components/Module03";
import Learn03 from "./components/Learn03";
import Examples03 from "./components/Examples03";
import Practice03 from "./components/Practice03";
import LessonComplete03 from "./components/LessonComplete03";

// Homework
import Homework03 from "./components/Homework03";
import HomeworkTeams03 from "./components/HomeworkTeams03";
import HomeworkEmail03 from "./components/HomeworkEmail03";
import HomeworkCalendar03 from "./components/HomeworkCalendar03";
import HomeworkWriting03 from "./components/HomeworkWriting03";
import HomeworkComplete03 from "./components/HomeworkComplete03";

// ============================================
// PROJECT 04
// ============================================

// Lesson
import Module04 from "./components/Module04";
import Learn04 from "./components/Learn04";
import Examples04 from "./components/Examples04";
import Practice04 from "./components/Practice04";
import LessonComplete04 from "./components/LessonComplete04";

// Homework
import Homework04 from "./components/Homework04";
import HomeworkPacking04 from "./components/HomeworkPacking04";
import HomeworkArrival04 from "./components/HomeworkArrival04";
import HomeworkMeeting04 from "./components/HomeworkMeeting04";
import HomeworkEmail04 from "./components/HomeworkEmail04";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ====================================
            PROJECT 01 — LESSON
        ==================================== */}
        <Route path="/project01" element={<Module01 />} />
        <Route path="/project01/grammar" element={<Learn01 />} />
        <Route path="/project01/examples" element={<Examples01 />} />
        <Route path="/project01/practice" element={<Practice01 />} />
        <Route
          path="/project01/complete"
          element={<LessonComplete01 />}
        />

        {/* PROJECT 01 — HOMEWORK */}
        <Route path="/project01/homework" element={<Homework01 />} />
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

        {/* ====================================
            PROJECT 02 — LESSON
        ==================================== */}
        <Route path="/project02" element={<Module02 />} />
        <Route path="/project02/grammar" element={<Learn02 />} />
        <Route path="/project02/examples" element={<Examples02 />} />
        <Route path="/project02/practice" element={<Practice02 />} />
        <Route
          path="/project02/complete"
          element={<LessonComplete02 />}
        />

        {/* PROJECT 02 — HOMEWORK */}
        <Route path="/project02/homework" element={<Homework02 />} />
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

        {/* ====================================
            PROJECT 03 — LESSON
        ==================================== */}
        <Route path="/project03" element={<Module03 />} />
        <Route path="/project03/grammar" element={<Learn03 />} />
        <Route path="/project03/examples" element={<Examples03 />} />
        <Route path="/project03/practice" element={<Practice03 />} />
        <Route
          path="/project03/complete"
          element={<LessonComplete03 />}
        />

        {/* PROJECT 03 — HOMEWORK */}
        <Route path="/project03/homework" element={<Homework03 />} />
        <Route
          path="/project03/homework/teams"
          element={<HomeworkTeams03 />}
        />
        <Route
          path="/project03/homework/email"
          element={<HomeworkEmail03 />}
        />
        <Route
          path="/project03/homework/calendar"
          element={<HomeworkCalendar03 />}
        />
        <Route
          path="/project03/homework/writing"
          element={<HomeworkWriting03 />}
        />
        <Route
          path="/project03/homework/complete"
          element={<HomeworkComplete03 />}
        />

        {/* ====================================
            PROJECT 04 — LESSON
        ==================================== */}
        <Route path="/project04" element={<Module04 />} />
        <Route path="/project04/grammar" element={<Learn04 />} />
        <Route path="/project04/examples" element={<Examples04 />} />
        <Route path="/project04/practice" element={<Practice04 />} />
        <Route
          path="/project04/complete"
          element={<LessonComplete04 />}
        />

        {/* PROJECT 04 — HOMEWORK */}
        <Route path="/project04/homework" element={<Homework04 />} />
        <Route path="/project04/homework/packing" element={<HomeworkPacking04 />} />
        <Route path="/project04/homework/arrival" element={<HomeworkArrival04 />} />
        <Route path="/project04/homework/meeting" element={<HomeworkMeeting04 />} />
        <Route path="/project04/homework/email" element={<HomeworkEmail04 />} />
      </Routes>
    </>
  );
}

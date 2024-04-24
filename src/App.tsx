import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import Welcome from "./pages/auth/welcome";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar from "./components/sidebar/sidebar";
import Courses from "./pages/courses/courses";
import Shedule from "./pages/shedule/shedule";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/settings";
import Community from "./pages/community/community";

function App() {
  const logedIn = true;

  if (logedIn) {
    return (
      <div className="bg-[#f6f9fb] relative h-screen">
        <Sidebar />
        <div className="absolute top-0 bottom-0 left-20 md:left-80 right-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/community" element={<Community />} />
            <Route path="/shedule" element={<Shedule />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f9fb] h-screen grid place-content-center">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import Welcome from "./pages/auth/welcome";

function App() {
  const logedIn = false;

  if (logedIn) {
    return <div>Home page</div>;
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

import { Link } from "react-router-dom";
import { MdOutlineLock } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import gLogo from "../../assets/google-logo.png";
import { ChangeEvent, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

function SignIn() {
  const [passVisible, setPassVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassVisibility = () => {
    setPassVisible(!passVisible);
  };

  return (
    <form className="bg-white rounded-box p-8 w-[28rem]">
      <h1 className="text-xl font-bold text-primary text-center">Sign In</h1>
      <p className="text-center text-primary opacity-60 mt-2">
        Welcome back! We're thrilled to have you here again.
      </p>

      <div className="input mt-4 input-bordered input-primary flex items-center gap-2">
        <HiOutlineMail className="text-xl text-primary" />
        <input
          type="text"
          className=" grow"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="input mt-4 input-bordered input-primary flex items-center gap-2">
        <MdOutlineLock className="text-xl text-primary" />
        <input
          type={passVisible ? "text" : "password"}
          className=" grow"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={togglePassVisibility}>
          {passVisible ? (
            <IoEyeOutline className="text-xl text-primary" />
          ) : (
            <FaRegEyeSlash className="text-xl text-primary" />
          )}
        </button>
      </div>
      <button className="btn mt-4 btn-primary btn-block">Sign In</button>
      <p className="text-primary opacity-60 mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:link">
          Sign Up
        </Link>
      </p>
      <div className="text-primary opacity-60 flex items-center gap-2 mt-3">
        <div className="border-t w-full"></div>
        <span>or</span>
        <div className="border-t w-full"></div>
      </div>
      <button className="btn mt-6 btn-outline text-primary btn-primary btn-block">
        <img src={gLogo} className=" h-6" alt="google logo" />
        <span>Continue with Google</span>
      </button>
      <p className="text-primary opacity-60 mt-6 text-center">
        By signing in to create an account you accept our{" "}
        <Link to="/terms" className="text-blue-500 hover:link">
          Terms of Use and Privacy Policy
        </Link>
      </p>
    </form>
  );
}

export default SignIn;

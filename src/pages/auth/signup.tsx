import { Link } from "react-router-dom";
import { MdOutlineLock } from "react-icons/md";
import { FaRegEyeSlash, FaRegUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import gLogo from "../../assets/google-logo.png";
import { ChangeEvent, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

function SignUp() {
  const [passVisible, setPassVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassVisibility = () => {
    setPassVisible(!passVisible);
  };

  return (
    <form className="bg-white rounded-box shadow-2xl p-8 w-[28rem]">
      <h1 className="text-xl font-bold text-primary text-center">Sign Up</h1>
      <p className="text-center text-primary opacity-60 mt-2">
        Let's get started with your 30 days free trial
      </p>
      <div className="input mt-6 input-bordered input-primary flex items-center gap-2">
        <FaRegUser className="text-xl text-primary" />
        <input
          type="text"
          className=" grow"
          placeholder="Full Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
      </div>
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
      <button className="btn mt-4 btn-primary btn-block">Sign Up</button>
      <p className="text-primary opacity-60 mt-3 text-center">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-500 hover:link">
          Sign In
        </Link>
      </p>
      <div className=" divider">or</div>
      <button className="btn mt-6 btn-outline text-primary btn-primary btn-block">
        <img src={gLogo} className=" h-6" alt="google logo" />
        <span>Sign up with Google</span>
      </button>
      <p className="text-primary opacity-60 mt-6 text-center">
        By signing up to create an account you accept our{" "}
        <Link to="/terms" className="text-blue-500 hover:link">
          Terms of Use and Privacy Policy
        </Link>
      </p>
    </form>
  );
}

export default SignUp;

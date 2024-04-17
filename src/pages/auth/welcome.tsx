import { MdOutlineMail } from "react-icons/md";
import gLogo from "../../assets/google-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <form className="bg-white rounded-box p-8 w-[28rem]">
      <h1 className="text-xl font-bold text-primary text-center">Welcome</h1>
      <p className="text-center text-primary opacity-60 mt-2">
        Let's get started with your 30 days free trial
      </p>
      <button className="btn mt-6 btn-outline text-primary btn-primary btn-block">
        <img src={gLogo} className=" h-6" alt="google logo" />
        <span>Sign up with Google</span>
      </button>
      <button
        onClick={() => navigate("/signup")}
        className="btn mt-4 btn-primary btn-block"
      >
        <MdOutlineMail className="text-xl" />
        <span>Sign up with Email</span>
      </button>
      <p className="text-primary opacity-60 mt-3 text-center">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-500 hover:link">
          Sign In
        </Link>
      </p>
      <p className="text-primary opacity-60 mt-6 text-center">
        By signing up to create an account you accept our{" "}
        <Link to="/terms" className="text-blue-500 hover:link">
          Terms of Use and Privacy Policy
        </Link>
      </p>
    </form>
  );
}

export default Welcome;

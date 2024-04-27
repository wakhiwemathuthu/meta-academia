import { IoSearchOutline } from "react-icons/io5";
import Header from "../../components/header/header";
import { LuClock3 } from "react-icons/lu";
import { PiFilesBold } from "react-icons/pi";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

function Courses() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="h-full">
      <Header title="Courses" />
      <div className="absolute top-20 left-0 right-0 bottom-0 grid lg:grid-cols-3 lg:grid-rows-4 gap-4 p-4">
        <div className="lg:col-span-2 lg:row-span-4 bg-white rounded-2xl shadow-2xl flex flex-col">
          <div className="shadow-4xl p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-primary">Available Courses</h2>
              <div className="input input-bordered border-neutral-200 input-sm flex items-center gap-2">
                <IoSearchOutline className="text-primary opacity-40 text-xl" />
                <input className="grow" type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="p-4 h-full">
            <div className="hover:shadow-4xl hover:border-white border border-neutral-100 transition-all cursor-pointer rounded-2xl p-4 flex items-start gap-4">
              <img
                src="https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1714160808~exp=1714164408~hmac=d31b6ae9d0e4198b4bbfe304cd0648ee7ea9146ebf855901eba0b5ef6a76f50f&w=826"
                alt=""
                className="block h-36 w-36 object-cover rounded-xl"
              />
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-primary">
                    UX & Web Design Master Course: Strategy, Design, Development
                  </p>
                  <div className="">
                    <button
                      onClick={toggleLike}
                      className="btn btn-ghost btn-circle hover:bg-neutral-100"
                    >
                      {liked ? (
                        <IoMdHeart className="text-xl text-red-500" />
                      ) : (
                        <IoMdHeartEmpty className="text-xl text-red-500" />
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-primary opacity-60 mt-1">
                  Learn how to apply User Expereience (UX) principles to your
                  website designs
                </p>
                <div className="flex items-center gap-2 text-primary mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1714161128~exp=1714164728~hmac=592a4ff886d452e0cb54cbe8f6f5701e95acc4fac966ae723b112b0a0b4ddf19&w=826"
                      alt=""
                      className="block w-8 h-8 rounded-full"
                    />
                    <p className="opacity-60">Wakhiwe Mathuthu</p>
                  </div>
                  <BsDot className="opacity-60" />
                  <div className="flex items-center gap-2 opacity-60">
                    <PiFilesBold />
                    <p>62 lectures</p>
                  </div>
                  <BsDot className="opacity-60" />
                  <div className="flex items-center gap-2 opacity-60">
                    <LuClock3 />
                    <p>3h 4m total length</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <span className=" badge text-primary">Web Designing</span>
                    <span className=" badge">UI /UX Designing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-primary">(3/5)</p>
                    <div className="rating rating-sm">
                      <input
                        disabled
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        disabled
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        disabled
                        checked
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        disabled
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        disabled
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-2xl bg-white lg:row-span-3 p-4">
          <div className="flex items-center mb-4 justify-between">
            <h2 className="font-bold text-primary">Recomended Courses</h2>
          </div>
          <div className="hover:shadow-4xl hover:border-white border border-neutral-100 transition-all cursor-pointer rounded-2xl p-4">
            <img
              src="https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1714160808~exp=1714164408~hmac=d31b6ae9d0e4198b4bbfe304cd0648ee7ea9146ebf855901eba0b5ef6a76f50f&w=826"
              alt=""
              className="block h-20 w-20 object-cover rounded-xl float-left mr-3"
            />
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm text-primary">
                  UX & Web Design Master Course: Strategy, Design, Development
                </p>
                <div className="">
                  <button
                    onClick={toggleLike}
                    className="btn btn-ghost btn-circle hover:bg-neutral-100"
                  >
                    {liked ? (
                      <IoMdHeart className="text-xl text-red-500" />
                    ) : (
                      <IoMdHeartEmpty className="text-xl text-red-500" />
                    )}
                  </button>
                </div>
              </div>
              <p className="text-primary opacity-60 mt-1 text-sm">
                Learn how to apply User Expereience (UX) principles to your
                website designs
              </p>
              <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1714161128~exp=1714164728~hmac=592a4ff886d452e0cb54cbe8f6f5701e95acc4fac966ae723b112b0a0b4ddf19&w=826"
                    alt=""
                    className="block w-6 h-6 rounded-full"
                  />
                  <p className="opacity-60">Wakhiwe Mathuthu</p>
                </div>
                <BsDot className="opacity-60" />
                <div className="flex items-center gap-2 opacity-60">
                  <PiFilesBold />
                  <p>62 lectures</p>
                </div>
                <BsDot className="opacity-60" />
                <div className="flex items-center gap-2 opacity-60">
                  <LuClock3 />
                  <p>3h 4m total length</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <span className=" badge text-primary">Web Designing</span>
                  <span className=" badge">UI /UX Designing</span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-primary">(3/5)</p>
                  <div className="rating rating-sm">
                    <input
                      disabled
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      disabled
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      disabled
                      checked
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      disabled
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      disabled
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;

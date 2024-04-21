import { FaRegHeart } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  title: string;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const formattedDate = `${
  months[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()}`;

function Header({ title }: Props) {
  return (
    <div className="py-3 px-3 h-20 md:px-6 absolute top-0 left-0 right-0 flex items-center gap-4">
      <div className="flex items-center gap-4 w-full">
        <h2 className=" hidden md:block text-xl font-bold text-primary">
          {title}
        </h2>
        <div className="flex items-center gap-2 input input-sm shadow-2xl grow">
          <IoSearchOutline className="text-primary opacity-40 text-xl" />
          <input type="text" className="grow" placeholder="Search..." />
        </div>
        <p className=" hidden xl:block font-bold text-sm text-primary">
          {formattedDate}
        </p>
      </div>
      <div className="flex items-center gap-2 ml-3 ">
        <button className=" hidden lg:grid btn btn-circle btn-ghost group hover:bg-primary">
          <FaRegHeart className="text-xl text-primary group-hover:text-white group-hover:opacity-100 opacity-40 " />
        </button>
        <button className="hidden lg:grid btn btn-circle btn-ghost group hover:bg-primary">
          <FiBell className="text-xl text-primary group-hover:text-white group-hover:opacity-100 opacity-40 " />
        </button>
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img
                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1713694595~exp=1713698195~hmac=4cdad1225f423b424a37a9cd732201b5b7b9356775b6ca3a775cd2bc5618a47d&w=826"
                alt="profile image"
              />
            </div>
          </div>
          <IoIosArrowDown className="text-xl text-primary opacity-40" />
        </div>
      </div>
    </div>
  );
}

export default Header;

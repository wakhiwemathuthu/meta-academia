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
    <div className="py-3 px-3 md:px-6  flex items-center gap-4">
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
      <div className="flex items-center gap-2 ml-3">
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
                src="https://img.freepik.com/free-vector/hand-drawn-people-with-dreadlocks-illustration_23-2149752847.jpg?t=st=1713689235~exp=1713692835~hmac=971d63f09dcba6cfb570686d150128f0236580dc14dc6261c0e8c1205582c9e7&w=826"
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

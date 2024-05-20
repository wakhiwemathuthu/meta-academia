import Avatar from "react-avatar";
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
      <div className="flex items-center gap-3 ml-3 ">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button">
            <FiBell className="text-lg text-primary group-hover:text-white group-hover:opacity-100 opacity-40 " />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu mt-8 z-[1] w-60 bg-white rounded-2xl shadow-4xl"
          >
            <li>
              <a href="#">Notification 1</a>
            </li>
            <li>
              <a href="#">Notification 2</a>
            </li>
            <li>
              <a href="#">Notification 3</a>
            </li>
            <li>
              <a href="#">Notification 4</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="avatar">
            <Avatar size="30" round name="John Doe" />
          </div>
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="cursor-pointer">
              <IoIosArrowDown className="text-primary opacity-40" />
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-8 menu z-[1] bg-white w-52 rounded-2xl shadow-4xl"
            >
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

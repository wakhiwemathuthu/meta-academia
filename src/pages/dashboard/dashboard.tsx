import Header from "../../components/header/header";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import studentIllustration from "../../assets/student-studying.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { ChangeEvent, useState } from "react";
import CourseCard from "../../components/course-card";
import { Link } from "react-router-dom";
import ChatCard from "../../components/chat-card";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import { TbDotsVertical } from "react-icons/tb";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [activity, setActivity] = useState("daily");

  const doughnutData = {
    labels: ["Completed", "In Progress", "Not Started"],

    datasets: [
      {
        data: [30, 26, 8],
        backgroundColor: [
          "rgb(255, 132, 75)",
          "rgb(81, 128, 153)",
          "rgb(159, 201, 221)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  const daily = [65, 59, 80, 81, 56, 55, 40];
  const monthly = [54, 31, 43, 76, 56, 55, 40, 65, 59, 44, 39, 56];

  const data = {
    labels: activity === "daily" ? weekdays : months,
    datasets: [
      {
        data: activity === "daily" ? daily : monthly,
        fill: false,
        borderColor: "rgb(255, 132, 75)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 0,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Header title="Dashboard" />
      <div className="absolute top-20 left-0 right-0 bottom-0 grid grid-cols-4 grid-rows-5 gap-4 p-4">
        <div className="p-4 rounded-2xl bg-secondary shadow-3xl col-span-3 row-span-1 flex items-center justify-between">
          <div className="lg:w-2/3">
            <h3 className="text-xl font-bold text-white">Hi, John!</h3>
            <p className="text-white mt-3">
              It's a pleasure to have you back with us. Your commitment to
              learning is truly commendable, and we're excited to continue
              supporting you on your educational journey.Don't miss the latest
              UI challenges.
            </p>
            <button className="btn btn-sm bg-white border-none mt-3 text-primary hover:bg-white px-6">
              View
            </button>
          </div>
          <img
            className=" h-64"
            src={studentIllustration}
            alt="illutration of a student studying"
          />
        </div>
        <div className="row-span-3 p-4 rounded-2xl bg-white shadow-2xl flex flex-col">
          <div className="h-full">
            <Calendar
              prev2Label={
                <div className="flex justify-center">
                  <FaAnglesLeft />
                </div>
              }
              prevLabel={
                <div className="flex justify-center">
                  <FaAngleLeft />
                </div>
              }
              next2Label={
                <div className="flex justify-center">
                  <FaAnglesRight />
                </div>
              }
              nextLabel={
                <div className="flex justify-center">
                  <FaAngleRight />
                </div>
              }
              showNavigation={true}
              onChange={() => {}}
              value={[new Date(), new Date("25-04-23")]}
              className="text-primary"
            />
          </div>
          <div className="h-fit">
            <div className="flex items-start justify-between">
              <p className="font-bold text-primary">Upcomming</p>
              <Link
                to="/#"
                className="text-primary opacity-60 text-sm hover:link"
              >
                See All
              </Link>
            </div>
            <div className="gap-3 bg-white hover:shadow-4xl hover:border-white border border-neutral-100 transition-all cursor-pointer flex items-center justify-between mt-4 rounded-2xl p-3">
              <div>
                <p className="font-bold text-sm text-primary">Design meeting</p>
                <p className="text-sm text-primary opacity-60 w-24 text-ellipsis text-nowrap overflow-hidden">
                  24-04-2024
                </p>
              </div>
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button">
                  <TbDotsVertical className="text-primary text-lg" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu w-max bg-white rounded-2xl shadow-4xl"
                >
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                  <li>
                    <a href="#">Option 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-2xl bg-white shadow-2xl row-span-2">
          <div>
            <p className="font-bold text-primary">My progress</p>
          </div>
          <div className="flex justify-center mt-3" style={{ height: "60%" }}>
            <Doughnut
              options={{ plugins: { legend: { display: false } } }}
              data={doughnutData}
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="text-center">
              <div className="indicator">
                <span className="indicator-item w-2 h-2 rounded-full bg-secondary"></span>
                <p className="font-bold text-primary">30</p>
              </div>
              <p className="text-sm text-primary opacity-60">Completed</p>
            </div>
            <div className="text-center">
              <div className="indicator">
                <span className="indicator-item w-2 h-2 rounded-full bg-[#518099]"></span>
                <p className="font-bold text-primary">26</p>
              </div>
              <p className="text-sm text-primary opacity-60">In Progress</p>
            </div>
            <div className="text-center">
              <div className="indicator">
                <span className="indicator-item w-2 h-2 rounded-full bg-[#9fc9dd]"></span>
                <p className="font-bold text-primary">8</p>
              </div>
              <p className="text-sm text-primary opacity-60">Not Started</p>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-2xl bg-white shadow-2xl col-span-2 row-span-2">
          <div className="flex items-center justify-between">
            <p className="font-bold text-primary">Activity</p>
            <select
              value={activity}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setActivity(e.target.value);
              }}
              className=" select select-sm select-ghost"
            >
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="h-[90%] w-full">
            <Line data={data} options={options} />
          </div>
        </div>
        <div className=" p-4 rounded-2xl bg-white shadow-2xl col-span-3 row-span-2">
          <div className="h-full flex flex-col">
            <div className="flex items-start justify-between h-full">
              <p className="font-bold text-primary">My Courses</p>
              <select className=" select select-sm select-ghost">
                <option value="daily">All</option>
                <option value="daily">Completed</option>
                <option value="monthly">In Progress</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 h-full">
              <CourseCard
                title="Graphic Design Theory - Typography"
                createdBy="Boyd Lewis"
                progress={100}
                status="completed"
              />
              <CourseCard
                title="Digital Marketing:How to Generate Sales"
                createdBy="Tony Matt"
                progress={58}
                status="in progress"
              />
              <CourseCard
                title="Web Development"
                createdBy="Dave Gray"
                progress={6}
                status="in progress"
              />
            </div>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white shadow-2xl row-span-2">
          <div className="h-full flex flex-col">
            <div className="flex items-start h-full justify-between">
              <p className="font-bold text-primary">Community</p>
              <Link
                to="/community"
                className="text-primary opacity-60 text-sm hover:link"
              >
                See All
              </Link>
            </div>
            <div className="h-full flex flex-col gap-3">
              <ChatCard
                username={"John Doe"}
                message={"Guys i need help in TypeScript"}
                date="24-04-24"
              />
              <ChatCard
                username={"Wakhiwe"}
                message={"Hello Everyone"}
                date="22-04-24"
              />
              <ChatCard
                username={"Faith Matt"}
                message={" Lorem ipsum dolor sit amet."}
                date="26-04-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

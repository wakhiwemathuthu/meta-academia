import Header from "../../components/header/header";
import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
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
import { Bar, Doughnut } from "react-chartjs-2";

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
            <button className="btn btn-sm bg-white border-none mt-3 text-primary hover:bg-white">
              View
            </button>
          </div>
          <img
            className=" h-64"
            src={studentIllustration}
            alt="illutration of a student studying"
          />
        </div>
        <div className="row-span-3 p-4 rounded-2xl bg-white shadow-2xl">
          <Calendar
            onChange={() => {}}
            value={[new Date(), new Date("25-04-23")]}
            className="text-primary"
          />
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
          activity
        </div>
        <div className=" p-4 rounded-2xl bg-white shadow-2xl col-span-3 row-span-2">
          Courses
        </div>
        <div className="p-4 rounded-2xl bg-white shadow-2xl row-span-2">
          chats
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

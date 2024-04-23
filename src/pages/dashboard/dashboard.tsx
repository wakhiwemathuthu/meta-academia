import Header from "../../components/header/header";
import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import studentIllustration from "../../assets/student-studying.png";

function Dashboard() {
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
          progress
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

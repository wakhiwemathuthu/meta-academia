import Header from "../../components/header/header";
import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";

function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="absolute top-20 left-0 right-0 bottom-0 grid grid-cols-4 gap-4 p-4">
        <div className="border-2 border-green-400 col-span-3">welcome</div>
        <div className="row-span-2 p-4 rounded-2xl bg-white shadow-2xl">
          <Calendar
            onChange={() => {}}
            value={[new Date(), new Date("25-04-23")]}
            className="text-primary"
          />
        </div>
        <div className="border-2 border-green-400">progress</div>
        <div className="border-2 border-green-400 col-span-2">activity</div>
        <div className="border-2 border-green-400 col-span-3">Courses</div>
        <div className="border-2 border-green-400">chats</div>
      </div>
    </div>
  );
}
export default Dashboard;

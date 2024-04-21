import Header from "../../components/header/header";

function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="absolute top-20 left-0 right-0 bottom-0 grid grid-cols-4 gap-4 p-4">
        <div className="border-2 border-green-400 col-span-3">welcome</div>
        <div className="border-2 border-green-400 row-span-2">calender</div>
        <div className="border-2 border-green-400">progress</div>
        <div className="border-2 border-green-400 col-span-2">activity</div>
        <div className="border-2 border-green-400 col-span-3">Courses</div>
        <div className="border-2 border-green-400">chats</div>
      </div>
    </div>
  );
}
export default Dashboard;

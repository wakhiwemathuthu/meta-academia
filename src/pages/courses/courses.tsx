import Header from "../../components/header/header";

function Courses() {
  return (
    <div className="h-full">
      <Header title="Courses" />
      <div className="absolute top-20 left-0 right-0 bottom-0 border-2 border-red-500 grid lg:grid-cols-3 lg:grid-rows-4 gap-4 p-4">
        <div className="lg:col-span-2 lg:row-span-4 bg-white rounded-2xl shadow-2xl"></div>
        <div className="rounded-2xl shadow-2xl bg-white lg:row-span-3"></div>
      </div>
    </div>
  );
}
export default Courses;

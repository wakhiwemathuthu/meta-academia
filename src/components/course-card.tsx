type Props = {
  id?: string;
  title: string;
  createdBy: string;
  progress: number;
  status: string;
};

function CourseCard({ status, title, createdBy, progress }: Props) {
  return (
    <div className="gap-3 bg-white shadow-4xl flex items-center justify-between  rounded-2xl p-3">
      <div className="flex items-center gap-3 w-full">
        <span
          className={`w-3 h-3 rounded-full ${
            status === "completed"
              ? "bg-secondary"
              : status === "in progress"
              ? "bg-[#518099]"
              : ""
          } `}
        ></span>
        <div>
          <p className="font-bold text-sm text-primary">{title}</p>
          <p className="text-sm text-primary opacity-60">
            Created by {createdBy}
          </p>
        </div>
      </div>
      <div className="label hidden lg:block w-full">
        <span className="label-text mr-3">{progress}%</span>
        <progress
          className=" progress progress-secondary w-40"
          value={progress}
          max={100}
        />
      </div>
      <button className="btn btn-sm btn-outline btn-primary px-6">View</button>
    </div>
  );
}

export default CourseCard;

import { IoSearchOutline } from "react-icons/io5";
import Header from "../../components/header/header";
import { RiMedalLine } from "react-icons/ri";
import Avatar from "react-avatar";

function LeaderBoard() {
  return (
    <div className="h-full">
      <Header title="LeaderBoard" />
      <div className="border-2 border-red-500 absolute flex flex-col gap-4 top-20 left-0 right-0 bottom-0 p-4">
        <div className="h-full bg-white rounded-2xl shadow-2xl p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-primary">Leaderboard</h2>
            <div className="flex items-center gap-3">
              <div className="input input-bordered border-neutral-200 input-sm flex items-center gap-2">
                <IoSearchOutline className="text-primary opacity-40 text-xl" />
                <input className="grow" type="text" placeholder="Search" />
              </div>
              <div role="tablist" className=" tabs tabs-boxed bg-[#f6f9fb] ">
                <a role="tab" className="tab bg-white text-primary">
                  All Time
                </a>
                <a role="tab" className="tab text-primary">
                  Weekly
                </a>
                <a role="tab" className="tab text-primary">
                  Monthly
                </a>
              </div>
            </div>
          </div>
          <table className="mt-4 table">
            <thead>
              <tr>
                <th>RANK</th>
                <th>NAME</th>
                <th>TOTAL POINTS</th>
                <th>COMPLETED COURSES</th>
                <th>COMPLETED QUIZZES</th>
                <th>LEARNING TIME</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center w-fit gap-2 bg-[#fcf6e3] py-1 px-2 rounded-full">
                    <RiMedalLine className="text-[#ebc641] text-xl" />
                    <span className="text-primary">1</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <Avatar name="Amanda Rollins" size="35" round />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-primary font-bold">
                        Amanda Rollins
                      </p>
                      <p className="text-sm text-primary">USA New York</p>
                    </div>
                  </div>
                </td>
                <td className="text-primary">45321</td>
                <td className="text-primary">345</td>
                <td className="text-primary">144</td>
                <td className="text-primary">240h 39m</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-2 border-green-500 h-14"></div>
      </div>
    </div>
  );
}
export default LeaderBoard;

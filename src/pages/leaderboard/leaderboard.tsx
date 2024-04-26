import { IoSearchOutline } from "react-icons/io5";
import Header from "../../components/header/header";
import LeaderBoardTile from "../../components/leaderboard-tile";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function LeaderBoard() {
  return (
    <div className="h-full">
      <Header title="Leaderboard" />
      <div className="absolute flex flex-col gap-4 top-20 left-0 right-0 bottom-0 p-4">
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
              <LeaderBoardTile
                rank={1}
                profile={{
                  name: "Amanda Rollins",
                  location: "New York, USA",
                }}
                points={3523}
                completedCourses={431}
                completedQuizzes={136}
                learningTime={"239h 20m"}
              />
              <LeaderBoardTile
                rank={2}
                profile={{
                  name: "Ethan Hunt",
                  location: "Paris, France",
                }}
                points={3050}
                completedCourses={380}
                completedQuizzes={125}
                learningTime={"210h 45m"}
              />
              <LeaderBoardTile
                rank={3}
                profile={{
                  name: "Lara Croft",
                  location: "London, UK",
                }}
                points={2875}
                completedCourses={365}
                completedQuizzes={120}
                learningTime={"198h 15m"}
              />
              <LeaderBoardTile
                rank={4}
                profile={{
                  name: "Nathan Drake",
                  location: "Los Angeles, USA",
                }}
                points={2700}
                completedCourses={340}
                completedQuizzes={110}
                learningTime={"185h 30m"}
              />
              <LeaderBoardTile
                rank={5}
                profile={{
                  name: "Geralt of Rivia",
                  location: "Kaer Morhen, The Continent",
                }}
                points={2525}
                completedCourses={320}
                completedQuizzes={105}
                learningTime={"172h 45m"}
              />
              <LeaderBoardTile
                rank={6}
                profile={{
                  name: "Indiana Jones",
                  location: "Princeton, USA",
                }}
                points={2350}
                completedCourses={300}
                completedQuizzes={100}
                learningTime={"160h 00m"}
              />
              <LeaderBoardTile
                rank={7}
                profile={{
                  name: "Hermione Granger",
                  location: "Hogwarts, Scotland",
                }}
                points={2200}
                completedCourses={280}
                completedQuizzes={90}
                learningTime={"147h 15m"}
              />
              <LeaderBoardTile
                rank={8}
                profile={{
                  name: "Tony Stark",
                  location: "Malibu, USA",
                }}
                points={2050}
                completedCourses={260}
                completedQuizzes={85}
                learningTime={"134h 30m"}
              />
              <LeaderBoardTile
                rank={9}
                profile={{
                  name: "Ellie Williams",
                  location: "Jackson, USA",
                }}
                points={1900}
                completedCourses={240}
                completedQuizzes={80}
                learningTime={"121h 45m"}
              />
              <LeaderBoardTile
                rank={10}
                profile={{
                  name: "Bruce Wayne",
                  location: "Gotham City, USA",
                }}
                points={1750}
                completedCourses={220}
                completedQuizzes={75}
                learningTime={"109h 00m"}
              />
            </tbody>
          </table>
        </div>
        <div className="join flex justify-center">
          <button className="join-item btn btn-sm bg-white text-primary group hover:bg-primary">
            <IoIosArrowBack className="text-xl text-primary group-hover:text-white" />
          </button>
          <button className="btn btn-sm join-item bg-white text-primary">
            Page 1
          </button>
          <button className="join-item btn btn-sm bg-white text-primary group hover:bg-primary">
            <IoIosArrowForward className="text-xl text-primary group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default LeaderBoard;

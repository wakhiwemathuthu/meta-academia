import Avatar from "react-avatar";
import { RiMedalLine } from "react-icons/ri";

type Props = {
  rank: number;
  profile: { name: string; location: string };
  points: number;
  completedCourses: number;
  completedQuizzes: number;
  learningTime: string;
};

function LeaderBoardTile({
  rank,
  profile,
  points,
  completedCourses,
  completedQuizzes,
  learningTime,
}: Props) {
  return (
    <tr>
      <td>
        {rank <= 3 ? (
          <div
            className={`flex items-center w-fit gap-2 ${
              rank === 1
                ? "bg-[#fcf6e3]"
                : rank === 2
                ? "bg-[#f7ecdc]"
                : "bg-[#eceff3]"
            }  py-1 px-2 rounded-full`}
          >
            <RiMedalLine
              className={` ${
                rank === 1
                  ? "text-[#ebc641]"
                  : rank === 2
                  ? "text-[#cc8213]"
                  : "text-[#a3a5ab]"
              }  text-xl`}
            />
            <span className="text-primary">{rank}</span>
          </div>
        ) : (
          <span className="text-primary">{rank}</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <Avatar name={profile.name} size="35" round />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-primary font-bold">{profile?.name}</p>
            <p className="text-sm text-primary">{profile?.location}</p>
          </div>
        </div>
      </td>
      <td className="text-primary">{points}</td>
      <td className="text-primary">{completedCourses}</td>
      <td className="text-primary">{completedQuizzes}</td>
      <td className="text-primary">{learningTime}</td>
    </tr>
  );
}

export default LeaderBoardTile;

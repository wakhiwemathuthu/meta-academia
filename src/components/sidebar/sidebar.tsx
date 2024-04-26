import { PiNotebook } from "react-icons/pi";
import SidebarItem from "./item";
import { TbDashboard } from "react-icons/tb";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdOutlineDateRange, MdOutlineWorkspacePremium } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import learningIllustration from "../../assets/learning-illustartion.png";
import { GoTrophy } from "react-icons/go";

function Sidebar() {
  return (
    <aside className="absolute top-0 bottom-0 w-20 md:w-80 py-6 bg-white shadow-2xl md:rounded-r-[2rem]">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-primary text-center">
              <span className="text-secondary"> Meta</span> Academia
            </h1>
            <p className="text-primary opacity-40 text-center text-sm">
              Engage in online learning
            </p>
          </div>
          <div className=" flex flex-col gap-3 md:mt-6">
            <SidebarItem to="/" title="Dashboard" icon={<TbDashboard />} />
            <SidebarItem to="/courses" title="Courses" icon={<PiNotebook />} />
            <SidebarItem
              to="/community"
              title="Community"
              icon={<HiOutlineChatBubbleBottomCenterText />}
            />
            <SidebarItem
              to="/leaderboard"
              title="LeaderBoard"
              icon={<GoTrophy />}
            />
            <SidebarItem
              to="/shedule"
              title="Shedule"
              icon={<MdOutlineDateRange />}
            />
            <SidebarItem to="/profile" title="Profile" icon={<FaRegUser />} />
            <SidebarItem
              to="/settings"
              title="Settings"
              icon={<FiSettings />}
            />
          </div>
        </div>
        <div className="px-8 hidden md:block">
          <img
            src={learningIllustration}
            alt="learning illustartion"
            className=" h-48 block mx-auto"
          />
          <p className="text-primary opacity-40 text-sm text-center">
            Purchase premium to gain access to new courses and numerous
            additional features.
          </p>
          <button className="btn btn-block btn-secondary mt-4 text-white">
            Upgrade Now
          </button>
        </div>
        <div
          data-tip="Upgrade to premium"
          className="flex justify-center md:hidden tooltip tooltip-right"
        >
          <button className="btn btn-secondary text-xl">
            <MdOutlineWorkspacePremium />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

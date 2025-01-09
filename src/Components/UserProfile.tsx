import img from "../assets/user.png";
import logoutIcon from "../assets/icons/logout.svg";

const UserProfile: React.FC = () => {
  return (
    <article className="min-w-[108px]">
      {/* user basic information */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-[36px] h-[36px] rounded-[50%] border-[0.5px] border-black/20 object-cover">
          <img src={img} className="w-full h-full" alt="user img not found" />
        </div>
        <p className="text-base font-bold text-black/60 ">Aravind</p>
      </div>

      {/* logout button */}
      <button className="ring-1 w-[108px] flex items-center gap-2 h-[40px] bg-[#FFF9F9] ring-[#7B1984]/10 px-2 rounded-xl">
        <img src={logoutIcon} alt="logout svg not found" />
        <span className="text-[12px] font-semibold">Logout</span>
      </button>
    </article>
  );
};

export default UserProfile;

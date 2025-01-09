import { ListView, Logo, UserProfile } from "./index";

const Tasks = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 py-10">
      <header>
        <div className="flex justify-between">
          {/* left */}
          <div>
            <Logo />
            {/* add the tabs here later */}
          </div>

          {/* user */}
          <UserProfile />
        </div>
      </header>

      <div className="h-[0.5px] w-full bg-black/20 mt-5 mb-4"></div>

      <ListView />
    </section>
  );
};

export default Tasks;

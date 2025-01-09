import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { account } from "./appwrite";
import { setUser } from "./feature/auth/authSlice";
import { RootState } from "./store";
import { Login, Tasks } from "./Components/index.ts";
import { Toaster } from "react-hot-toast";

function App() {
  const { currUserData } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();

  // function to get the user
  const getUser = async () => {
    try {
      const resp = await account.get();
      console.log(resp);
      dispatch(setUser(resp));
    } catch (error) {
      console.log("Error in getUser", error);
    }
  };

  // get the user when the page loads
  useEffect(() => {
    getUser();
  }, []);

  // if the currUserData is not present, then show the login page
  if (currUserData === null) {
    return (
      <>
        <Login />
      </>
    );
  }

  return (
    <main>
      <Toaster />
      <Tasks />
    </main>
  );
}

export default App;

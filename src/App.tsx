import { useEffect } from "react";
import Login from "./Components/Login";
import { useDispatch, useSelector } from "react-redux";
import { account } from "./appwrite";
import { setUser } from "./feature/auth/authSlice";
import { RootState } from "./store";

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
      <h2>Welcome</h2>
    </main>
  );
}

export default App;

import { createSlice } from "@reduxjs/toolkit";
import { account } from "../../appwrite";
import { OAuthProvider } from "appwrite";

// type for user obj returned after account.get()
export interface User {
  $id: string | null;
  email: string | null;
  name: string | null;
  $createdAt: string | null;
}

export interface AuthState {
  currUserData: User | null; // curruserData is null if not logged in
}

const initialState: AuthState = {
  currUserData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: () => {
      try {
        account.createOAuth2Session(
          OAuthProvider.Google, // provider
          "http://localhost:5173/", // success (optional)
          "http://localhost:5173/", // failure (optional)
          [] // scopes (optional)
        );
      } catch (error) {
        console.log(error);
      }
    },
    setUser: (state, action) => {
      state.currUserData = action.payload;
      console.log("payload:", action.payload);
    },
  },
});

export const { loginUser, setUser } = authSlice.actions;
export default authSlice.reducer;

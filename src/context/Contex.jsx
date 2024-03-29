import { createContext, useReducer, useEffect } from "react";
import { db } from "../db/db";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  postData: [...db],
  categorie: [],
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        allPosts: state.postData,
        categorie: state.categorie,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

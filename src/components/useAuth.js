import { useState, createContext, useContext } from "react";

const authContext = createContext();

function useAuth() {
  const LOGGED_KEY = 'isLogged'
  const USERNAME_KEY = 'user'
  const [authed, setAuthed] = useState(false);
  const [user, setUser] =
    useState(sessionStorage.getItem(USERNAME_KEY));

  return {
    authed,
    user,
    login(user) {
      return new Promise((res) => {
        setAuthed('true');
        setUser(user);
        sessionStorage.setItem(LOGGED_KEY, 'true');
        sessionStorage.setItem(USERNAME_KEY, user);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed('false');
        sessionStorage.setItem(LOGGED_KEY, 'false');
        sessionStorage.setItem(USERNAME_KEY, "");
        res();
      });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();
  return <authContext.Provider value={auth}>
    {children}
  </authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}
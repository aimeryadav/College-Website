// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import api from "../api";

const AuthContext = createContext({
  user: null,
  loading: true,
  setUser: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { id, role } or null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const res = await api.get("/auth/me");
        if (!ignore) {
          setUser(res.data); // expecting { id, role }
        }
      } catch (err) {
        if (!ignore) {
          setUser(null);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  const value = { user, setUser, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

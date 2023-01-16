import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/Header";
import Main from "../components/main/main";
import { useUsers } from "../hooks/useUsers";
import { API } from "../services/axios";

export function HomePage() {
  const { setUser } = useUsers();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function redirectLogin() {
      const token = localStorage.getItem("icePickToken");
      const id = localStorage.getItem("icePickId");

      if (token) {
        try {
          API.defaults.headers.common.authorization = `Bearer ${token}`;
          const response = await API.get(`users/${id}`);
          setUser(response.data);
          navigate("/home");
        } catch (error) {}
      }

      setLoading(false);
    }

    redirectLogin();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

import React, { createContext, useEffect, useState } from "react";
import {
  iLoginRequest,
  iRegisterRequest,
  iUser,
  iLoginResponse,
  iEditRequest,
  iUserContext,
  iContextProps,
} from "../../types/types";
import { API } from "../../services/axios";

import { AxiosError } from "axios";
import { Toast } from "../../components/toast";
import { useLoading } from "../../hooks/useLoading";
import { useModal } from "../../hooks/useModal";

export interface iLoginError {
  error: string;
}

export const userContext = createContext({} as iUserContext);
//alguns erros ainda presentes no arquivo, enquanto eu implemento as funções em si :)
const UserProvider = ({ children }: iContextProps) => {
  const [user, setUser] = useState<iUser>();
  const [token, setToken] = useState<string>("");
  const { toggleLoading } = useLoading();
  const { closeModal } = useModal();
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("icePickToken");
      const id = localStorage.getItem("icePickId");

      if (token) {
        try {
          API.defaults.headers.common.authorization = `Bearer ${token}`;
          const response = await API.get(`users/${id}`);
          setUser(response.data);
        } catch (error) {
          localStorage.removeItem("icePickToken");
        }
      }

      setLoadingPage(false);
    }

    load();
  }, []);

  const login = async (data: iLoginRequest): Promise<void> => {
    toggleLoading(true);
    try {
      const response = await API.post<iLoginResponse>("login", data, {
        headers: { "Content-Type": "application/json" },
      });
      API.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;

      Toast("Login realizado com sucesso.", "sucess");
      
      setUser(response.data.user);
      setToken(response.data.accessToken);
      localStorage.setItem("icePickToken", response.data.accessToken);
      localStorage.setItem("icePickId", response.data.user.id.toString());
      closeModal();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  function logout() {
    setUser(undefined);
    setToken("");
    localStorage.removeItem("icePickToken");
    localStorage.removeItem("icePickId");
    Toast("Logout feito com sucesso.", "sucess");
  }

  const register = async (data: iRegisterRequest): Promise<void> => {
   
    toggleLoading(true);
    try {
      const response = await API.post<iLoginResponse>("users", {...data, favoriteSentences:[]}, {
        headers: { "Content-Type": "application/json" },
      });
     
      console.log(response.data)
      Toast("Cadastro realizado com sucesso.", "sucess");
      closeModal();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const edit = async (id: number, data: iEditRequest): Promise<void> => {
    toggleLoading(true);
    try {
      const response = await API.patch(`users/${id}`, data);
      Toast("Usuário editado com sucesso.", "sucess");
      closeModal();
      setUser(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const deletet = async (id: number): Promise<void> => {
    toggleLoading(true);
    try {
      await API.delete(`users/${id}`);
      Toast("Usuário deletado com sucesso.", "sucess");
      closeModal();
      setUser(undefined);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const get = async (id: number): Promise<void> => {
    toggleLoading(true);
    try {
      const response = await API.get<iUser>(`users/${id}`);
      /*  Toast("Dados obtidos com sucesso.", "sucess"); */
      closeModal();
      setUser(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        token,
        register,
        deletet,
        edit,
        login,
        logout,
        get,
        loadingPage,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

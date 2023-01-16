import { AxiosError } from "axios";
import { cloneDeep } from "lodash";
import React, { createContext, useState, useEffect, useContext } from "react";
import { Toast } from "../../components/toast";
import { useLoading } from "../../hooks/useLoading";
import { useModal } from "../../hooks/useModal";
import { API } from "../../services/axios";
import { iSentences, iSentencesAdd } from "../../types/types";
import { iLoginError, userContext } from "../userContext/userContext";

interface iContextProps {
  children: React.ReactNode;
}
interface idataEdit {
  text: string;
  type: string;
}

interface iSentenceContext {
  sentences: iSentences[];
  addSentence: (data: iSentencesAdd, id: number) => void;
  deleteSentence: (id: number) => void;
  editSentence: (data: idataEdit, id: number) => void;
  search: string;
  filtradedSentences: iSentences[];
  favoriteSentence: (sentence: iSentences, id: number) => void;
  unfavoriteSentence: (sentence: iSentences, id: number) => Promise<void>;
  favoritedUserSentences: iSentences[];
  getSentences: () => void;
  ghostState: iSentences[];
}

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({ children }: iContextProps) => {
  const { user, get } = useContext(userContext);
  const [sentences, setSentences] = useState<iSentences[]>([]);
  const [search] = useState("");
  const [favoritedUserSentences] = useState<iSentences[]>([]);
  const [filtradedSentences] = useState<iSentences[]>([]);
  const { toggleLoading } = useLoading();
  const { closeModal } = useModal();
  const [ghostState, setGhostState] = useState<iSentences[]>([]);

  async function getSentences() {
    const allSentences = await API.get<iSentences[]>("sentences");

    setSentences(allSentences.data);
  }
  useEffect(() => {
    getSentences();
    ghostRender();
  }, [user]);

  const ghostRender: () => void = async () => {
    const allSentences = await API.get<iSentences[]>("sentences");

    setGhostState(allSentences.data);
  };

  const addSentence = async (data: iSentencesAdd, id: number) => {
    try {
      toggleLoading(true);
      const fullData = {
        userId: id,
        like: 0,
        liked: false,
      };
      await API.post(`sentences/`, { ...data, ...fullData });
      closeModal();
      getSentences();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const editSentence = async (data: idataEdit, id: number) => {
    try {
      toggleLoading(true);
      await API.patch(`sentences/${id}`, data);
      closeModal();
      await getSentences();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const deleteSentence = async (id: number) => {
    toggleLoading(true);
    try {
      await API.delete(`sentences/${id}`);
      Toast("Frase deletada com sucesso.", "sucess");
      closeModal();
      await getSentences();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const responseLike = async (sentence: iSentences, type: string) => {
    let data = {
      like: sentence.like,
    };
    if (type === "+") {
      data.like = sentence.like + 1;
    } else {
      data.like = sentence.like - 1;
    }

    try {
      const response = await API.patch(`sentences/${sentence.id}`, data);
      return response.data;
    } catch (error) {}
  };

  const favoriteSentence = async (sentence: iSentences, id: number) => {
    const newFavorites = cloneDeep(user!.favoriteSentences);
    newFavorites.push(sentence);

    try {
      toggleLoading(true);
      await API.patch(`users/${id}`, { favoriteSentences: newFavorites });
      closeModal();
      await responseLike(sentence, "+");
      get(id);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const unfavoriteSentence = async (sentence: iSentences, id: number) => {
    const newFavoritesFiltered = user!.favoriteSentences.filter(
      (sentenceParam) => sentenceParam.id !== sentence.id
    );
    try {
      toggleLoading(true);
      await API.patch(`users/${id}`, {
        favoriteSentences: newFavoritesFiltered,
      });
      closeModal();
      await responseLike(sentence, "-");
      /* await getSentences(); */
      get(id);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  return (
    <sentenceContext.Provider
      value={{
        sentences,
        addSentence,
        deleteSentence,
        editSentence,
        search,
        filtradedSentences,
        favoriteSentence,
        unfavoriteSentence,
        favoritedUserSentences,
        getSentences,
        ghostState,
      }}
    >
      {children}
    </sentenceContext.Provider>
  );
};

export default SentenceProvider;

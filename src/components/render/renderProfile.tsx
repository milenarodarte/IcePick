import React from "react";
import { useLocation } from "react-router-dom";
import { useSentece } from "../../hooks/useSentence";
import { useUsers } from "../../hooks/useUsers";
import { iSentences } from "../../types/types";
import MiniCard from "../filter/card/card";

interface iRenderSentence {
  searchValue?: string;
  filterButton: string;
}

export const RenderProfile = ({
  searchValue,
  filterButton,
}: iRenderSentence) => {
  const { sentences } = useSentece();
  const { user } = useUsers();
  const { pathname } = useLocation();

  if (pathname === "/profile") {
    return (
      <ul>
        {filterButton === "Todas" &&
          sentences
            .filter((sentence) => sentence.userId === user!.id)
            .filter((sentence) => sentence.text.includes(searchValue!))
            .map((sentence: iSentences) => (
              <MiniCard type="created" sentence={sentence} key={sentence.id} />
            ))}
        {filterButton === "Todas" &&
          user!.favoriteSentences
            .filter((sentence) => sentence.text.includes(searchValue!))
            .map((sentence: iSentences) => (
              <MiniCard type="favorite" sentence={sentence} key={sentence.id} />
            ))}
        {filterButton === "Criadas" &&
          sentences
            .filter((sentence) => sentence.userId === user!.id)
            .filter((sentence) => sentence.text.includes(searchValue!))
            .map((sentence: iSentences) => (
              <MiniCard type="created" sentence={sentence} key={sentence.id} />
            ))}
        {filterButton === "Favoritas" &&
          user!.favoriteSentences
            .filter((sentence) => sentence.text.includes(searchValue!))
            .map((sentence: iSentences) => (
              <MiniCard type="favorite" sentence={sentence} key={sentence.id} />
            ))}
      </ul>
    );
  }
  return (
    <ul>
      {filterButton === "Todas"
        ? sentences
            .filter((sentence) => sentence.text.includes(searchValue!))
            .map((sentence: iSentences) => (
              <MiniCard type="favorite" sentence={sentence} key={sentence.id} />
            ))
        : sentences
            .filter((sentence) => sentence.type === filterButton)
            .filter((sentence) => sentence.text.includes(searchValue!))
            .map((sentence: iSentences) => (
              <MiniCard type="favorite" sentence={sentence} key={sentence.id} />
            ))}
    </ul>
  );
};

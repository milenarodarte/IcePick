import React from "react";
import { useSentece } from "../../hooks/useSentence";
import { iSentences } from "../../types/types";
import MiniCard from "../filter/card/card";

interface iRenderSentence{
  searchValue?: string,
  filterButton: string
}

export const RenderSentence = ({ searchValue, filterButton }:iRenderSentence) => {
  const { sentences } = useSentece();


  return (
    <ul>
      {filterButton === "Todas"?(
        sentences.filter((sentence)=> sentence.text.includes(searchValue!)).map((sentence: iSentences) => (
        <MiniCard type="favorite" sentence={sentence} key={sentence.id} />
      ))):
      (
        sentences.filter((sentence)=> sentence.type === filterButton).filter((sentence)=> sentence.text.includes(searchValue!)).map((sentence: iSentences) => (
          <MiniCard type="favorite" sentence={sentence} key={sentence.id} />
        ))
      )}
    </ul>
  );
};

/* eslint-disable no-lone-blocks */
import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { iSentences } from "../../../types/types";
import { StyledCard } from "./styledComponents";

import { useModal } from "../../../hooks/useModal";
import { useSentece } from "../../../hooks/useSentence";
import EditSentenceForm from "../../editSentenceForm/EditSentenceForm";
import { useUsers } from "../../../hooks/useUsers";
import ModalDelete from "../../deleteModal";

type tTypeCard = "created" | "favorite";

interface iMiniCard {
  type: tTypeCard;
  sentence: iSentences;
}
const MiniCard = ({ type, sentence }: iMiniCard) => {
  const { showModal } = useModal();
  const { favoriteSentence, unfavoriteSentence } = useSentece();
  const { user } = useUsers();

  return (
    <StyledCard key={sentence.id}>
      <div>
        <p>{sentence.text}</p>
      </div>
      <div>
        {type === "created" ? (
          <>
            <MdOutlineModeEditOutline
              onClick={() =>
                showModal(<EditSentenceForm sentence={sentence} />)
              }
            />
            <FiTrash2
              onClick={() => showModal(<ModalDelete sentence={sentence} />)}
            />
          </>
        ) : (
          <>
            {user!.favoriteSentences.some(
              (favoriteSentence) => sentence.id === favoriteSentence.id
            ) ? (
              <AiTwotoneStar
                onClick={() => unfavoriteSentence(sentence, user!.id)}
              />
            ) : (
              <AiOutlineStar
                onClick={() => favoriteSentence(sentence, user!.id)}
              />
            )}
            <span>{sentence.like}</span>
          </>
        )}
      </div>
    </StyledCard>
  );
};
export default MiniCard;

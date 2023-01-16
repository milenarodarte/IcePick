import DivDelete from "./deleteModalStyled";
import { Button } from "../buttons/button";
import { useContext } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import { iSentences } from "../../types/types";

interface iModalDelete {
  sentence: iSentences;
}
const ModalDelete = ({ sentence }: iModalDelete) => {
  const { deleteSentence } = useContext(sentenceContext);

  return (
    <DivDelete className="divDelete">
      <p className="pDelete">Deletar Frase</p>
      <p className="confirmDelete">Deseja deletar essa frase?</p>
      <Button
        text="Deletar"
        buttonSize="default"
        buttonStyle="bg-ColorRed"
        onClick={() => deleteSentence(sentence.id)}
      />
    </DivDelete>
  );
};
export default ModalDelete;

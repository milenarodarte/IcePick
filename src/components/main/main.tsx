import MainStyled from "./mainStyled";

import img from "../../Assets/Imgs/BgMoblie.jpg";
import imgDesktop from "../../Assets/Imgs/BgDesktop.jpg";
import { useContext, useEffect, useState } from "react";

import FilterSection from "../filter/filter";
import { Button } from "../buttons/button";

import { useUsers } from "../../hooks/useUsers";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";

const Main = () => {
  const { user } = useUsers();
  const { sentences, ghostState } = useContext(sentenceContext);
  const [phrase, setPhrase] = useState("");

  const [random, setRandom] = useState<number>(0);

  useEffect(() => {
    if (ghostState.length > 0) {
      const newRandom = Math.floor(Math.random() * ghostState.length);
      setPhrase(ghostState[newRandom].text);
    }
  }, [ghostState]);

  const handleClickRandomPhrase = () => {
    const newRandom = Math.floor(Math.random() * sentences.length);
    if (newRandom !== random) {
      setPhrase(sentences[newRandom].text);
      setRandom(newRandom);
    } else {
      setPhrase(sentences[newRandom + 1].text);
      setRandom(newRandom + 1);
    }
  };

  return (
    <MainStyled>
      <div className="containerBackground">
        <picture>
          {<source srcSet={imgDesktop} media="(min-width: 768px)" />}
          <img src={img} alt="background" />
        </picture>
      </div>

      {!user && (
        <div className="warningDiv">
          <p className="pDivWarning">
            Cadastre-se para ter acesso a mais funcionalidades
          </p>
        </div>
      )}

      <div className="textBox">
        <p className="pTextBox">{phrase}</p>
      </div>
      <Button
        buttonSize="big"
        buttonStyle="bg-ColorBlue"
        text="Gerar nova frase
"
        onClick={handleClickRandomPhrase}
        className="buttonNewPhrase"
      />

      {user && (
        <>
          <FilterSection page="home" />
        </>
      )}
    </MainStyled>
  );
};
export default Main;

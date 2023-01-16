import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSentece } from "../../hooks/useSentence";
import { StyledInputSearchBox } from "../search/styledComponents";
import {
  StyledFilterSection,
  StyledFilterSectionProfile,
} from "./styledComponents";
import { RenderProfile } from "../render/renderProfile";

interface iFilterSection {
  page: "home" | "profile";
}

/* const FilterSection = ({ page }: iFilterSection) => {
  const { sentences, filtradedSentences } =
    useContext(sentenceContext);
  const { user } = useUsers(); */
/*   const { profileSentences, setProfileSentences } = useContext(sentenceContext); */
/*  useEffect(() => {
    if (page === "profile") {
      const sentencesCreated = sentences.filter(
        (sentence) => sentence.userId === user?.id
      );
      setProfileSentences([...sentencesCreated]);
    }
  }, [sentences, profileSentences]); */

const FilterSection = ({ page }: iFilterSection) => {
  const { getSentences } = useSentece();

  const [categories, setCategories] = useState<string>("Todas");
  const [searchValue, setSearchValue] = useState("");

  const buttonFilter = (buttonName: string) => {
    setCategories(buttonName);

    getSentences();
  };
  return (
    <>
      <StyledInputSearchBox>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          defaultValue={""}
          onChange={(e) => {
            setSearchValue(e.target.value);
            getSentences();
          }}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </StyledInputSearchBox>
      <StyledFilterSection>
        {page === "home" ? (
          <div>
            <div>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => {
                  buttonFilter(e.currentTarget.innerHTML);
                }}
              >
                Todas
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => {
                  buttonFilter(e.currentTarget.innerHTML);
                }}
              >
                Formal
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => {
                  buttonFilter(e.currentTarget.innerHTML);
                }}
              >
                Engraçada
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => {
                  buttonFilter(e.currentTarget.innerHTML);
                }}
              >
                Paquera
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => {
                  buttonFilter(e.currentTarget.innerHTML);
                }}
              >
                Criativas
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => {
                  buttonFilter(e.currentTarget.innerHTML);
                }}
              >
                Pessoal
              </button>
              <button
                type="button"
                id="buttonLi"
                onClick={(e) => {
                  buttonFilter(e.currentTarget.innerHTML);
                }}
              >
                Intimidade
              </button>
            </div>
            <RenderProfile
              filterButton={categories}
              searchValue={searchValue}
            />
            {/* {filtradedSentences.length > 0? (
                    <ul>
                        {filtradedSentences.map((sentence:iSentences)=>
                            <MiniCard type="favorite" sentence={sentence} key={sentence.id}/>
                        )}
                    </ul>
                ):(
                    <div>
                        <h2>Ainda não existem frases cadastradas nesta categoria</h2>
                    </div>
                )} */}
          </div>
        ) : (
          <StyledFilterSectionProfile>
            <div>
              <div>
                <button
                  type="button"
                  id="buttonLi"
                  onClick={(e) => buttonFilter(e.currentTarget.innerHTML)}
                >
                  Todas
                </button>
                <button
                  type="button"
                  id="buttonLi"
                  onClick={(e) => buttonFilter(e.currentTarget.innerHTML)}
                >
                  Favoritas
                </button>
                <button
                  type="button"
                  id="buttonLi"
                  onClick={(e) => buttonFilter(e.currentTarget.innerHTML)}
                >
                  Criadas
                </button>
              </div>
              <RenderProfile
                filterButton={categories}
                searchValue={searchValue}
              />
            </div>
          </StyledFilterSectionProfile>
        )}
      </StyledFilterSection>
    </>
  );
};
export default FilterSection;

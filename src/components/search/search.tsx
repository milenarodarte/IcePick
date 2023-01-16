import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { sentenceContext } from '../../contexts/sentenceContext/sentenceContext';
import { StyledInputSearchBox } from "./styledComponents";

const SearchInput = () => {
    const { sentences, search } = useContext(sentenceContext)
    return(
        <StyledInputSearchBox>
            {/* <input type="text" placeholder="Digitar Pesquisa" onChange={(e)=>renderFilterAndSearchSentences(e.target.value)}/> */}
            <button><AiOutlineSearch/></button>
        </StyledInputSearchBox>
    )
}
export default SearchInput;
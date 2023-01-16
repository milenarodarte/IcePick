import { useContext } from 'react';
import { sentenceContext } from '../contexts/sentenceContext/sentenceContext';
export const useSentece = () => useContext(sentenceContext);

import { useContext } from 'react';
import { modalContext } from '../contexts/modalContext/modalContext';

export const useModal = () => useContext(modalContext);
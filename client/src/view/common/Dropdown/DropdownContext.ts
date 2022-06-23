import { createContext } from 'react';

interface IDropdownContext {
  handleClose: () => void;
}

export const DropdownContext = createContext({} as IDropdownContext);

import { createContext } from 'react';

export const ConfirmContext = createContext<{
  handleOpen: (_title: string, _cb: () => void) => void;
}>(undefined!);

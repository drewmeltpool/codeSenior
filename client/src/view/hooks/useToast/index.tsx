import { useContext } from 'react';
import ToastContext, { IProvidedData } from 'src/view/hoc/Toast/Context';

export const useToast = () => useContext<IProvidedData>(ToastContext);

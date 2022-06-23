import { useContext } from 'react';
import { ConfirmContext } from 'src/view/hoc/Confirm/ConfirmContext';

const useConfirm = () => useContext(ConfirmContext);

export default useConfirm;

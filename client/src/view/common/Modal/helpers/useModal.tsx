import { useState } from 'react';

const useModal = (state: any) => {
  const [isOpen, toggle] = useState(state);

  if (isOpen) {
    document.body.classList.add('open__modal');
  } else {
    document.body.classList.remove('open__modal');
  }

  return [isOpen, toggle];
};

export default useModal;

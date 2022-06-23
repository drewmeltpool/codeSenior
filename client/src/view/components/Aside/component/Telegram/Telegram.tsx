import React from 'react';
import telegram from 'src/assets/images/oauth/telegram.jpg';
import Image from 'src/view/common/Image';

const Telegram: React.FC = () => {
  return (
    <a
      className="advertisement__block"
      href="https://t.me/find_offer"
      target="_blank"
      rel="noreferrer"
    >
      <h4 className="heading heading--medium text--center">
        Subscribe to our telegram
      </h4>
      <Image
        className="advertisement__image-wrapper"
        imageClassName="advertisement__image"
        src={telegram}
      />
    </a>
  );
};

export default Telegram;

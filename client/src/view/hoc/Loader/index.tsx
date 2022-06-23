import React from 'react';
import { useSelector } from 'react-redux';
import { Colors } from 'src/constants';
import { Spinner, Loader } from 'src/view/common/Loader';

const LoaderHoc: React.FC = ({ children }) => {
  const isLoading = useSelector((state: any) => state.loading);

  return (
    <>
      <Loader
        flag={isLoading}
        spinner={<Spinner color={Colors.LIGHT_BLUE} />}
      />
      {children}
    </>
  );
};

export default LoaderHoc;

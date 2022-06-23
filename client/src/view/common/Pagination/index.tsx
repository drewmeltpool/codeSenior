import React from 'react';

interface IPagination {
  total: number;
  current: number;
  perPage: number;
}

const Pagination: React.FC<IPagination> = () => {
  return <div className="pagination"></div>;
};

export default Pagination;

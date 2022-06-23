type IRecord = {
  end: string;
  start: string;
};

export const sortByDate = (data: IRecord[]): IRecord[] => {
  return [...data].sort(function (a, b) {
    return new Date(b.end).getTime() - new Date(a.end).getTime();
  });
};

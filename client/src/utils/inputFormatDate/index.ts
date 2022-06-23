export const inputFormatDate = (date: string) => {
  try {
    return new Date(date).toISOString().slice(0, 10);
  } catch (error) {
    return '';
  }
};

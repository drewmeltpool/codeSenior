export const userName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return `${firstName} ${lastName}`;
};

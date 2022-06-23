export const initials = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const [firstNameLetter = ''] = firstName?.split('') || [''];
  const [lastNameLetter = ''] = lastName?.split('') || [''];

  return `${firstNameLetter}${lastNameLetter}`.toUpperCase();
};

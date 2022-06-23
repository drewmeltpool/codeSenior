import { EUserTableNames } from '../../constants';
import { developerRepository, recruiterRepository } from '../../Repository';

export const fullUserData = (tableName: EUserTableNames) => {
  const repositoryObject = {
    [EUserTableNames.Developer]: developerRepository,
    [EUserTableNames.Recruiter]: recruiterRepository,
  };

  return repositoryObject[tableName];
};

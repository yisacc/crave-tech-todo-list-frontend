import { gql } from '@apollo/client';

export const GET_TASKS = gql`{
  tasks{
    name,
    isLocked,
    _id,
    subTasks{
      name,
      isCompleted,
      _id
    }
  }
}
`;

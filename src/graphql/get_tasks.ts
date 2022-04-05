import { gql } from '@apollo/client';

export const GET_TASKS = gql`{
  tasks{
    name,
    _id,
    subTasks{
      name,
      isCompleted,
      _id
    }
  }
}
`;

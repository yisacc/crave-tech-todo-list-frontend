import { gql } from '@apollo/client';

export const CREATE_SUB_TASK = gql`
  mutation createSubTask($name: String!
  ){
  createSubTask(createSubTaskInput:{
    name:$name,
  }){
  _id
  }
}
`;

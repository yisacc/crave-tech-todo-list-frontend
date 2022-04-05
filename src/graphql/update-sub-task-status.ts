import { gql } from '@apollo/client';

export const UPDATE_SUB_TASK_STATUS = gql`
  mutation updateSubTaskStatus($id: String! $isCompleted: Boolean!
  ){
  updateSubTaskStatus(updateSubTaskStatusInput:{
    id:$id
    isCompleted:$isCompleted
  }){
    _id
  }
}
`;

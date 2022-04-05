import { gql } from '@apollo/client';

export const UPDATE_TASK = gql`
 mutation updateTask($id: String!
 $subTask: String!
  ){
  updateTask(updateTaskInput:{
    id:$id,
    subTask:$subTask
  }){
  _id
  }
}
`;

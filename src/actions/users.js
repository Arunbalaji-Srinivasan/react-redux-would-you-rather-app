import {addAnswer} from './questions'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveUsers(users){
    return {
        type : RECEIVE_USERS,
        users
    }
}

function addAnswerToUser(authUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_USER,
      authUser,
      qid,
      answer
    };
  }
  
  export function handleUpdateUserData(authUser, qid, answer) {
    return dispatch => {
      dispatch(addAnswerToUser(authUser, qid, answer));
      dispatch(addAnswer(authUser, answer,qid));
    };
  }
  
  export function addQuestionToUser({ id, author }) {
    return {
      type: ADD_QUESTION_TO_USER,
      id,
      author
    };
  }


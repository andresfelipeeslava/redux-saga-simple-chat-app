import { ADD_MESSAGE, RECEIVED_MESSAGE, USERS_LIST } from "../constants/ActionTypes";

let nextMessageId = 0;

export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  author,
  message,
});

export const receivedMessage = (message, author) => ({
  type: RECEIVED_MESSAGE,
  id: nextMessageId++,
  author,
  message,
});

export const populateUsersList = (users) => ({
  type: USERS_LIST,
  users,
});

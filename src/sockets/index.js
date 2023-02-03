import * as types from "../constants/ActionTypes";
import { receivedMessage, populateUsersList } from "../actions";

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket("ws://localhost:3001");

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username,
      })
    );
  };
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(receivedMessage(data.message, data.author));
        break;
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;

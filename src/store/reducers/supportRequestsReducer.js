const initialState = {
  data: [],
}

function supportRequests(state = initialState, action) {
  switch (action.type) {
    case 'SEED_SUPPORT_REQUESTS':
      return {
        ...state,
        data: {
          ...state.data,
          supportRequests: action.supportRequest.requests
       } };
    case 'POST_SUPPORT_REQUESTS':
      return {
        ...state,
        data: {
          ...state.data,
          supportRequests: [
            action.supportRequest,
            ...state.data.supportRequests
          ],
        }
      };
    case 'UPDATE_SUPPORT_REQUESTS':
      const index = state.data.supportRequests.findIndex(req => req.id === action.supportRequest.id);
      const newArray = [...state.data.supportRequests];
      newArray[index].status = action.supportRequest.status;

      return {
        ...state,
        data: {
          ...state.data,
          supportRequests: newArray,
        }
      }
    default:
      return state;
  }
}

export default supportRequests;
export async function addSupportRequest(data, dispatch) {
  await dispatch({ type: 'POST_SUPPORT_REQUESTS', supportRequest: data });
}

export async function updateSupportRequest(data, dispatch) {
  await dispatch({ type: 'UPDATE_SUPPORT_REQUESTS', supportRequest: data });
}

export async function seedStore(data, dispatch) {
  await dispatch({ type: 'SEED_SUPPORT_REQUESTS', supportRequest: data });
}

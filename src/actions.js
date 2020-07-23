export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: { filter },
});

export const requestInitialData = (data) => ({
  type: 'REQUEST_INITIAL_DATA',
  payload: { data },
});

export const requestData = (data) => ({
  type: 'REQUEST_DATA',
  payload: { data },
});

export const receiveData = (data, json) => ({
  type: 'RECEIVE_DATA',
  data,
  info: json.children.map((child) => child.data),
  receivedAt: Date.now(),
});

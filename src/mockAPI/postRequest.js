export async function post(url, body) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => {
      return err;
    })
};

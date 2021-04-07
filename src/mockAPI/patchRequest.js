export async function patch(url, body) {
  await fetch(`${url}/${body.id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => {
      return err;
    })
};

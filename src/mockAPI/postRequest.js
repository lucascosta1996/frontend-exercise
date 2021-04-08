export async function post(url, body) {
  const rawResponse = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const content = await rawResponse.json();
  return content;
};

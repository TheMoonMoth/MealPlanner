const HOST = 'http://10.0.0.238:3000';

export const getRecipes = async () => {
  // TODO Redux network calls
  try {
    const res = await fetch(`${HOST}/recipes`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: null,
    });
    return res.json();
  } catch (err) {
    return console.warn(err);
  }
};

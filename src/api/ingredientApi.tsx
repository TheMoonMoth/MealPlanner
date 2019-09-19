const HOST = "http://10.0.0.238:3000";

export const getIngredients = async () => {
  // TODO Reduxify network calls
  try {
    const res = await fetch(`${HOST}/ingredients`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: null
    });
    return res.json();
  }
  catch (err) {
    return console.warn(err);
  }
};

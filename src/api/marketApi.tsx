// const HOST = "http://10.0.0.238:3000";
const HOST = "http://192.168.1.132:3000";

export const getMarkets = async () => {
  // TODO Reduxify network calls
  try {
    const res = await fetch(`${HOST}/markets`, {
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

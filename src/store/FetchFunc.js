export const FetchFunc = async (Url) => {
  var response = "";
  response = await fetch(Url, {
    method: "POST",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-credentials": false,
      "Access-Control-Allow-Origin": Url,
      Authorization: "bearer ",
    },
  });
  return response.json();
};

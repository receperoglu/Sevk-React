export const FetchFunc = async (Url) => {
  var response = "";
  try {
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
    })
      .then((result) => {
        var statuscode = result.status;
        if (statuscode === 500) {
          response = { error: true };
        } else {
          response = result.json();
          
        }
      })
      .then((error) => {
        var statuscode = error.status;
        if (statuscode === 500) {
          response = { error: true };
        }
      });
  } catch (error) {}
  return response;
};

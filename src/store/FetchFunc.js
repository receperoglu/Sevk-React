export const FetchFunc = async (Url) => {
  Url = "https://recep.space/" + Url
  console.log(Url);
  var response = "";
  try {
    response = await fetch(Url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",

      },
    })
      .then((result) => {
        var statuscode = result.status;
        if (statuscode === 500) {
          response = { error: true };
        } else {
          try {
            response = result.json();

          }
          catch (e) {
            response = result;

          }
        }
      })
      .then((error) => {
        var statuscode = error.status;
        if (statuscode === 500) {
          response = { error: true };
        }
      });
  } catch (error) {
    var statuscode = error.status;
    if (statuscode === 500) {
      response = { error: true };
    }
  }
  return response;
};

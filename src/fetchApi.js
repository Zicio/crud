const fetchApi = async (method, data, id) => {
  const url = new URL("http://localhost:7777/notes");
  let response;
  // eslint-disable-next-line default-case
  switch (method) {
    case "GET": {
      response = await fetch(url);
      break;
    }
    case "POST": {
      response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });
      break;
    }
    case "DELETE":
      const newUrl = new URL("http://localhost:7777/notes");
      newUrl.searchParams.set("id", `${id}`);
      response = await fetch(newUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      break;
  }

  if (response.ok) {
    return response;
  } else {
    alert("HTTP-Error: " + response.status);
  }
};

export default fetchApi;

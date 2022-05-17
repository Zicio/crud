const fetchApi = async (data) => {
  const url = "http://localhost:7777/notes";
  let response;
  let result;
  if (data) {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response;
    }
  }
  response = await fetch(url);
  if (response.ok) {
    result = await response.json();
    console.log(result);
    return result;
  }
};

export default fetchApi;

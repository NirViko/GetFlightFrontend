const url = "https://localhost:7249";

export const get = async (path) => {
  try {
    const response = await fetch(`${url}/${path}`);
    if (response.status === 200) {
      return response.json();
    } else {
      console.error(`Failed to fetch. Status: ${response.status}`);
    }
  } catch (error) {
    console.log(`get error - ${error}`);

    throw error;
  }
};

export const post = async (path, body) => {
  try {
    debugger;
    const response = await fetch(`${url}/${path}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (response.status === 200) {
      var data = await response.json();
      console.log("data", data);
      return data;
    } else {
      console.log("check", data);
    }
  } catch (error) {
    console.log("error", error);
  }
};

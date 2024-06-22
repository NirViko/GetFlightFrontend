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

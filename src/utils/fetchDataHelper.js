export const fetchDataHelper = (apiURL, setData, setLoading) => {
  const fetchData = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    if (response) {
      setData(data);
      setLoading(false);
    }
  };
  fetchData();
};

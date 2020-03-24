const locationiqClient = options => {
  const { token, region, format } = options;

  return value => {
    const url = new URL(`http://localhost:5050/v1/search.php`);
    url.searchParams.set("key", token);
    url.searchParams.set("q", value);
    url.searchParams.set("format", format);
    return fetch(url, {
      method: "GET"
    });
  };
};
export const search = locationiqClient({
  token: "5e018387ce0e02",
  region: "eu1",
  format: "json"
});

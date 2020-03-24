export const saveToken = token => {
  localStorage.setItem("tokenData", JSON.stringify(token));
  console.log(token);
};

export const getTokenData = (email, password) => {
  return fetch("//localhost:5050/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(async res => {
    if (res.status === 200) {
      const tokenData = await res.json();
      saveToken(JSON.stringify(tokenData));
      return Promise.resolve();
    }
    return Promise.reject();
  });
};

export async function fetchWithAuth(url, options) {
  const loginUrl = "/login";
  let tokenData = null;
  if (localStorage.getItem("tokenData")) {
    tokenData = JSON.parse(localStorage.getItem("tokenData"));
  } else {
    return window.location.replace(loginUrl);
  }

  if (tokenData) {
    if (!options.headers) {
      options.headers = {};
    }

    options.headers.Authorization = `${tokenData.token_type} ${tokenData.token}`;
  }

  return fetch(url, options);
}

export function isAuth() {
  return !!(
    localStorage.getItem("tokenData") &&
    JSON.parse(localStorage.getItem("tokenData"))
  );
}

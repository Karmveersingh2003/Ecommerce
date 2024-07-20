import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:5000/api/";

let TOKEN = null;
const userData = Cookies.get("userData");

if (userData) {
  try {
    const parsedUserData = JSON.parse(userData);
    if (parsedUserData && parsedUserData.currentUser) {
      TOKEN = parsedUserData.currentUser.accessToken;
    }
  } catch (error) {
    console.error("Error parsing userData from cookies:", error);
  }
}

console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: TOKEN ? `Bearer ${TOKEN}` : "" },
});










// import axios from "axios";
// import Cookies from "js-cookie";


// const BASE_URL = "http://localhost:5000/api/";

// const TOKEN =
//   Cookies.get("userData") &&
//   JSON.parse(Cookies.get("userData")).currentUser.accessToken;
// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// console.log(TOKEN);
// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });

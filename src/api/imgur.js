import qs from "qs";
import axios from "axios";

const CLIENT_ID = "cbb096cda285cfb";
//const CLIENT_SECRET = "f2a79a8bc0f089f8bb5cfb4d010a249a84872fbd";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token"
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

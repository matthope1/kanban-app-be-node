import axios from 'axios'
import { log } from 'console'


export const getUserInfo = async (accessToken: string) => {
  const domain = "dev-8mqlgmbq3y23i00o.us.auth0.com"
  // const url = `https://${process.env.AUTH0_DOMAIN}/userinfo`;
  const url = `https://${domain}/userinfo`;

  const config = {
    headers: {
      Authorization: `${accessToken}`,
      'Content-type': 'application/json'
    }
  };

  try {
    const response = await axios.get(url, config);
    log("res from getting user info", response)
    return response.data
  } catch (err) {
    log("err", err)
    return false 
  }
}





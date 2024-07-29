import { nanoid } from "nanoid";
// import apiProd from "../../../config/API/api-prod";
import { ApiPost } from "../../../src/helpers/API/ApiData";

import apiProd from "../../../src/config/API/api-prod";
const API_BASE_URL = "https://api.videosdk.live/v1";
const VIDEOSDK_TOKEN = process.env.REACT_APP_VIDEOSDK_TOKEN;
const API_AUTH_URL = apiProd.endpoint;

export const getToken = async () => {
  // if (VIDEOSDK_TOKEN && API_AUTH_URL) {
  //   console.error(
  //     "Error: Provide only ONE PARAMETER - either Token or Auth API"
  //   );
  // } else if (VIDEOSDK_TOKEN) {
  //   return VIDEOSDK_TOKEN;
  // } else
  if (API_AUTH_URL) {
    const res = await fetch(`${API_AUTH_URL}/meeting/get`, {
      method: "GET",
    });

    const jsonResponse = await res.json();

    // const { payload: {   token },} = jsonResponse;
    // const { payload: { jsonResponse?.payload.payload.token },} = jsonResponse;
    // payload.payload.token
    const token = jsonResponse?.payload?.payload?.token 
    

    return token;
  } else {
    console.error("Error: ", Error("Please add a token or Auth Server URL"));
  }
};

export const createMeeting = async ({ token }) => {
  const url = `${API_BASE_URL}/meetings`;
  const options = {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
    body: JSON.stringify({ region: "sg001", userMeetingId: nanoid() }),
  };

  const { meetingId } = await fetch(url, options)
    .then((response) => response.json()  )
    .catch((error) => console.error("error", error));

  return meetingId;
};



export const validateMeeting = async ({ meetingId, token }) => {
  const url = `${API_BASE_URL}/meetings/${meetingId}`;

  const options = {
    method: "POST",
    headers: { Authorization: token },
  };

  const result = await fetch(url, options)
    .then((response) => response.json()) //result will have meeting id
    .catch((error) => console.error("error", error));

  return result ? result.meetingId === meetingId : false;
};

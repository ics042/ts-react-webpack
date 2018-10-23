import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("Request Timeout!");
    return Promise.resolve(err);
  },
);
axios.interceptors.response.use(
  (data) => {
    if (data.status && data.status === 200 && data.data.status === "error") {
      console.log(data.data.msg ? data.data.msg : "Error");
      return;
    }
    return data;
  },
  (err) => {
    if (err.response.status === 404) {
      console.log({ message: "404 Not Found" });
    } else if (err.response.status === 403) {
      console.log("403 Forbidden");
    } else if (err.response.status === 400) {
      console.log("400 Bad Request");
    } else {
      console.log("Server Error");
    }
    return Promise.resolve(err);
  },
);

const base = process.env.BASE_URL;

export const postRequest = (url: string, params: any) => {
  return axios({
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "post",
    transformRequest: [
      (data) => {
        let ret = "";
        for (const it of data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      },
    ],
    url: `${base}${url}`,
  });
};
export const uploadFileRequest = (url: string, params: any) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const putRequest = (url: string, params: any) => {
  return axios({
    method: "put",
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      (data) => {
        let ret = "";
        for (const it of data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      },
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
export const deleteRequest = (url: string) => {
  return axios({
    method: "delete",
    url: `${base}${url}`,
  });
};
export const getRequest = (url: string) => {
  return axios({
    method: "get",
    url: `${base}${url}`,
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};

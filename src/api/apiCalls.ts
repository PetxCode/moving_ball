import axios from "axios";

const url: string = "http://localhost:3311/api";
export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyAccount = async (userID: string) => {
  try {
    return await axios.patch(`${url}/verify-user/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyAccountUser = async () => {
  try {
    return await axios
      .get(`${url}/login-success/`, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const loginAccount = async (data: any) => {
  try {
    return await axios
      .post(`${url}/login`, data, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    // return await axios.post(`${url}/login-auth`, data).then((res) => {
    //   return res.data;
    // });
  }
};

export const loginAuthAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/login-auth`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const logoutAccount = async () => {
  try {
    return await axios
      .delete(`${url}/logout`, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

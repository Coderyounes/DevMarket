import axios, { AxiosResponse } from "axios";

import Cookies from 'js-cookie';

export const getData = async (url: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(url);
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in getData:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

export const getDataAuth = async (url: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        // Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    });
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in getDataAuth:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

export const postData = async (url: string, {arg}: any): Promise<any> => {
  console.log(arg,'lalalalla')
  try {
    const response: AxiosResponse = await axios.post(url, arg, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in postData:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

export const postDataAuth = async (url: string, {arg}: any): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.post(url, arg, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get("jwtToken")}`,
      },
    });
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in postDataAuth:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

export const patchFormAuth = async (url: string, {arg}: any): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.patch(url, arg, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${Cookies.get("jwtToken")}`,
      },
    });
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in patchFormAuth:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

export const postFormAuth = async (url: string, {arg}: any): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.post(url, arg, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${Cookies.get("jwtToken")}`,
      },
    });
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in postFormAuth:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

export const patchDataAuth = async (url: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.patch(url, null, {
      headers: {
        // Authorization: `Bearer ${Cookies.get("jwtToken")}`,
      },
    });
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in patchDataAuth:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

export const putAuth = async (url: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.put(url, null, {
      headers: {
        // Authorization: `Bearer ${Cookies.get("jwtToken")}`,
      },
    });
    return { ...response.data, status: response.status };
  } catch (error) {
    console.error("Error in putAuth:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error.message;
    }
    throw error;
  }
};

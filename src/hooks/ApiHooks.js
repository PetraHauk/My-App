// TODO: add necessary imports
import {useEffect, useState} from "react";
import {fetchData} from "../lib/fetchData.js";

const useMedia = () => {

  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    const {getUserById} = useUser();
    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media'
    );

    const mediaWithUsers = await Promise.all(
      mediaResult.map(async (mediaItem) => {
        const userResult = await getUserById(mediaItem.user_id);
        return {...mediaItem, username: userResult.username};
    }));

    setMediaArray(mediaWithUsers);
  };

  useEffect(() => {
    getMedia();
  }, []);

  const postMedia = async (file, inputs, token) => {

    const mediaObject = {
      title: inputs.title,
      description: inputs.description,
      filename: file.name,
      media_type: file.type,
      filesize: file.size,
    };

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(mediaObject),
    };

    const response = await fetch(
      import.meta.env.VITE_MEDIA_API + '/media',
      options
    );
    const mediaData = await response.json();

    console.log('postMedia', mediaObject);

    return mediaData;
  };

  return {mediaArray, postMedia};
};


const useUser = () => {
  const getUserById = async (userId) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/' + userId,
    );
    return userResult;
  };

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    const tokenResult = await fetchData(
        import.meta.env.VITE_AUTH_API + '/users/token',
        options,
        );
    return tokenResult;
  };

  const register = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const registerResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      options,
    );
    return registerResult;
  }

  return {getUserById, getUserByToken, register};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      options,
    );
    return loginResult;
  };

  return {postLogin};
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    // Add file to FormData
    formData.append('file', file);
    // Set up options for fetch
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, // Pass formData as the body
    };
    const fileData = await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + '/upload',
      options,
    );
    // Return the file data
    return fileData;
  };

  return { postFile };
};

export {useMedia, useUser, useAuthentication, useFile};

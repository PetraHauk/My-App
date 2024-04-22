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
  }

  useEffect(() => {
    getMedia();
  }, []);


  return {mediaArray};
};


const useUser = () => {
  const getUserById = async (userId) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/' + userId,
    );
    return userResult;
  }
  return {getUserById};
};

export {useMedia, useUser};

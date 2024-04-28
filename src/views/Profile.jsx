import {Link} from "react-router-dom";
import {useAuthentication} from "../hooks/ApiHooks.js";
import {useEffect, useState} from "react";

export const Profile = () => {
  const {user, setuser} = useState(null);
  const {getUserByToken} = useAuthentication();


  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const userData = await getUserByToken(token);
        setuser(userData.user);
      } catch (e) {
        console.error(e);
      }
    }
    getUser();
  }, []);

  return <div>
    <h2 class="m-5 text-4xl">Profiilinäkymä</h2>

    <p class="text-2xl font-bold">Tämä on profiilinäkymä.</p>
    <p class="m-2">
      <Link to="/">Takaisin etusivulle</Link>
    </p>
    <div>
      {user  && (
        <>
          <p>Käyttäjätunnus: {user.username}</p>
          <p>Sähköposti: {user.email}</p>
          <p>Luotu: {user.created_at}</p>
        </>
      )}
    </div>
  </div>
}

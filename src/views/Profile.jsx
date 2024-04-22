import {Link} from "react-router-dom";

export const Profile = () => {
  return <div>
    <h2 class="m-5 text-4xl">Profiilinäkymä</h2>

    <p class="text-2xl font-bold">Tämä on profiilinäkymä.</p>
    <p class="m-2">
      <Link to="/">Takaisin etusivulle</Link>
    </p>
  </div>
}

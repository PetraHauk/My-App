import { useState } from "react";

const Upload = () => {

  const {file, setfile} = useState("");
  const {name, setName} = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("tiedostoa yritettiin lähettää.");
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type="file" name="tiedosto" onChange={(event) =>
        setfile(event.target.files[0])
      } />
      <label htmlFor="name">Nimi:</label>
      <input type="text" id="name" name="name" onChange={(event) =>
        setName(event.target.value)
      } />

      <button type="submit">Upload</button>
    </form>
  </>
}
export default Upload;

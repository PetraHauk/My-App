// Upload.jsx
import {useNavigate} from "react-router-dom";
import {useFile, useMedia} from "../hooks/ApiHooks";
import {useState} from "react";
import useForm from "../hooks/formhooks.js";

const Upload = () => {
  const { inputs, setInputs, handleInputChange } = useForm({ title: "", description: "" });
  const [file, setFile] = useState(null);
  const {postMedia} = useMedia();
  const {postFile} = useFile();
  const navigate = useNavigate();

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      setFile(evt.target.files[0]);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await doUpload();
    } catch (e) {
      console.log(e.message);
    }
  };


  const doUpload = async () => {
    try {
      await postFile(file, localStorage.getItem('token'));
      const mediaData = await postMedia(
        file,
        inputs,    // Pass inputs object as the second parameter
        localStorage.getItem('token')  // Pass token as the third parameter
      );
      console.log('doUpload', mediaData);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://via.placeholder.com/200?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;

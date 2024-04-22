import {useLocation, useParams} from "react-router-dom";

const Single = () => {
  const { state } = useLocation();
  const item = state.item;
  const params = useParams()

  console.log("location", location);
  console.log("params", params);
  return (
    <>
      <h2>ID: {item.id}</h2>
      {item.media_type && item.media_type.includes('video') ? (
        <video controls>
          <source
            src={item.filename}
            type={item.media_type}
          />
        </video>
      ) : (
        <img src={item.filename} alt={item.title} />
      )}

      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Created: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>Size: {item.filesize}</p>
    </>
  );
}

export default Single;

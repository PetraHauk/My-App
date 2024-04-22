import MediaRow from '../components/MediaRow.jsx';
import {useEffect, useState} from 'react';
import SingleView from "../components/SingleView.jsx";
import {fetchData} from "../lib/fetchData.js";

const Home = () => {
  //const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    const mediaResult = await fetchData('test.json');
    setMediaArray(mediaResult);
  }

  useEffect(() => {
    getMedia();
  }, []);

  //console.log(selectedItem)

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id}
                      item={item}
                      // setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;

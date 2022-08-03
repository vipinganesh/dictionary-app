import React, { useState } from "React";
import Axios from "axios";


function Home() {

    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");

    function getMeaning() {
        Axios.get(
            `https://dictionaryapi.dev`
        ).then((response) => {
          setData(response.data[0]);
        });
      }

return (
     <div className="App">
     <h1>Free Dictionary</h1>
     <div className="searchBox">
     <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeaning();
          }}
        ></button>
 
        </div>
    </div>
  );
}
export default Home;

import './App.css';
import { getMusic } from './services/Services';
import React, { useEffect, useState } from 'react';
import AlbumCard from './components/AlbumCard';
import ReactPaginate from 'react-paginate'
import Navbar from './components/Navbar';

function App() {


  const [musicResults, setMusicResults] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [searchSubmit, setSearchSubmit] = useState("1");
  const [changeDisplay, setChangeDisplay] = useState(false)

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getMusic(searchSubmit).then(item => setMusicResults(item.results));
    setPageNumber(0);
  }, [searchSubmit]);

  //Pagination
  const albumsPerPage = 20;
  const pagesVisited = pageNumber * albumsPerPage;
  const pageCount = Math.ceil(musicResults.length / albumsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayAlbums = musicResults.slice(pagesVisited, pagesVisited + albumsPerPage).map(item =>
    <AlbumCard key={item.collectionId} display={changeDisplay} album={item.collectionName} artist={item.artistName} artWork={item.artworkUrl100} releaseDate={item.releaseDate} trackCount={item.trackCount} />
  );


  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  };

  const handleSearchSubmit = (e) => {
    setSearchSubmit(searchInput);
  };

  const handleGripDisplay = (e)=>{
    setChangeDisplay(false)
  }
  const handleVerticalDisplay = (e)=>{
    setChangeDisplay(true)
  }

  return (
    <>

      <Navbar />

      <div className="App">
        <div className="input-group d-flex justify-content-center ">
          <input onChange={handleSearch} type="text" className="form-control mt-2" placeholder="Artist, song or album" aria-label="artist, song or album" aria-describedby="addon-wrapping" />
          <button onClick={handleSearchSubmit} type="button" className="btn searchButton text-light border border-light w-25 mt-2">Search</button>
        </div>
        <div className='mt-3 d-flex justify-content-center'>
          <button onClick={handleGripDisplay} className={`gripButton m-2 ${!changeDisplay?'border border-dark p-3':''} `}></button>
          <button onClick={handleVerticalDisplay}  className={`verticalButton m-2 ${changeDisplay?'border border-dark p-3':''} `}></button>
         
          </div>
          {musicResults.length} Albums. 
        <div className={`albumCards ${changeDisplay?'changeDisplay':''}`}>
          {displayAlbums}
          <ReactPaginate
            previousLabel="< previous"
            nextLabel="next >"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            pageRangeDisplayed={10}
            pageClassName={"onlypage"}
            activeLinkClassName={"paginationActive"}
            forcePage={pageNumber}
          />
        </div>

      </div>
    </>
  );
}

export default App;

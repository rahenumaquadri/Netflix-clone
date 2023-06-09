
import './App.css';
import React from 'react';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
    return (

        <div className='App'>
            <Navbar />
            <Banner />
            <Row title="NETFLEX ORIGINAL" fetchURL={requests.fetchNETflixOriginals}
                isLargeRow={true} />
            <Row title="Treding Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        </div>
    )

}

export default App;

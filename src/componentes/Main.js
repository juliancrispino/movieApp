import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

let API_key = "&api_key=e5d7bd721c16d0fb25c3647492515e0c";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key
let tipos = ["Populares", "Este año", "Niños", "Drama", "Comedia"];


const Main = () => {


    const [movieData, setMovieData] = useState([])
    const [urlSet, setUrlSet] = useState(url)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(urlSet)
            .then(res => res.json()).then(data => {
                //console.log(data.results);
                setMovieData(data.results)
            })
    }, [urlSet])

    const getData = (tipoPelicula) => {
        if (tipoPelicula === "Popular") {
            url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key
        }
        if (tipoPelicula === "Este año") {
            url = base_url + "/discover/movie?with_genres=18&primary_release_year=2022" + API_key
        }
        if (tipoPelicula === "Niños") {
            url = base_url + "/discover/movie?with_genres=16" + API_key
        }
        if (tipoPelicula === "Drama") {
            url = base_url + "/discover/movie?with_genres=18" + API_key
        }
        if (tipoPelicula === "Comedia") {
            url = base_url + "/discover/movie?with_genres=35" + API_key
        }
        setUrlSet(url)
    }

    const searchMovie = (e) => {
        if(e.key==="Enter"){
            url=base_url+"/search/movie?api_key=e5d7bd721c16d0fb25c3647492515e0c&query="+search
            setUrlSet(url)
        }
    } 

    return (
        <>
            <div className='header'>
                <nav>
                    <ul className='nav-list' >
                        {
                            tipos.map((el) => {
                                return (
                                    <li><a href="#" name={el} onClick={(e) => { getData(e.target.name) }}>{el}</a></li>
                                )
                            })
                        }


                    </ul>
                </nav>
                <form>
                    <div className='search-btn'>
                        <input type="text" placeholder='Ingrese nombre de pelicula' className='inputText' onChange={(e) => { setSearch(e.target.value) }} value={search} onKeyPress={searchMovie} />
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </form>
            </div>

            <div className="container">

                {movieData.length === 0 ? <p className='noEncontrado'>No se encontraron películas</p> : movieData.map((res, key) => {
                    return (
                        <Card res={res} key={key} />
                    )
                })}


            </div>
        </>
    )
}

export default Main
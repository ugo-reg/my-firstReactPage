import { useState } from 'react'
import './App.css'

function App(prop) {
  return (
    <>
    
     <div className="movie">
      <img className="images" src={prop.img.src} alt={prop.img.alt} />
      <h2>
        {prop.movieName}
      </h2>
      <p>{prop.summary}</p>
      <button><span class="material-symbols-outlined">
add
</span>Watchlist</button>
     </div>
    </>
  )
}

export default App

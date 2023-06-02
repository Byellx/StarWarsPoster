import React from 'react'
import posterimg from './images/posterimg.jpg'
import './App.css'
import PosterInfo from './components/PosterInfo'

export default function App(){
  return(
    <main>
      <PosterContainer/>
      <PosterInfo/>
    </main>
  )
}

const PosterContainer = () => <div className="imagePosterContainer"><img id="imagem" src={posterimg} className="imagePoster"></img></div>
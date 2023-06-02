import React from 'react'
import '../PosterInfo.css'

const PosterTitle = () => <div className='posterTitleContainer'><h1>Pôster: Star Wars (1977)</h1></div>
const PosterContent = () => <div className="posterContentContainer"><p>"A jornada épica continua! Desperte a força dentro de você com o pôster exclusivo de Star Wars. Imerso em detalhes deslumbrantes, este pôster cativante transportará você para um universo de aventuras intergalácticas. Sinta a emoção da batalha entre o bem e o mal enquanto os personagens icônicos ganham vida diante de seus olhos. Seja um verdadeiro fã de Star Wars e decore seu espaço com esse tesouro memorável. Garanta o seu hoje mesmo e embarque em uma jornada que transcende as galáxias. Que a força esteja com você!"</p></div>
const PosterButton = () => <button className='posterButton'>Comprar agora</button>

const PosterInfo = () => {
  return(
    <section className="posterInfoContainer">
        <PosterTitle/>
        <PosterContent/>
        <PosterButton/>
    </section>
  )
}

export default PosterInfo
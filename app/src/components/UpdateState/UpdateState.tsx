import { useState } from "react"
import './UpdateState.css'

const UpdateState = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
     })

    const handleClick = () => {
        setGame({...game, player: {name: 'Kevin'}})
    }

  return (
    <div className="heading" onClick={(handleClick)}> <h1>New Player: {game.player.name}</h1> </div>
  )
}

export default UpdateState
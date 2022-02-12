import React, {useEffect, useState} from "react"
import "./index.css"

export default function Meme() {
    const api = "https://api.imgflip.com/get_memes"
    const [memes, setMemes] = useState([])
    console.log(memes)

    // function randomMeme() {
    //     return Math.floor(Math.random() *memes.length)
    // }

    useEffect(() => {
        fetch(api)
        .then(x => x.json()
        .then(res => {
            const memesArr = res.data.memes
            setMemes(memesArr)
        }))
        
    }, [])

    return (
        <div className="meme">
            {memes.map(meme => <img key={meme.id} src={meme.url} width="150px"></img>)}
        </div>
    )
} 
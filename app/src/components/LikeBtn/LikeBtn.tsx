import { useState } from 'react'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import './LikeBtn.css'

const LikeBtn = () => {
    let likeBtn = <BsHeart size={50}/>
    let [click, setClick] = useState(0)
    const handleClick = () => {
        click += 1;
        setClick(click);
    }

    switch (click) {
        case 0:
            likeBtn = <BsHeart size={50} />
            break;
        case 1:
            console.log('Liked')
            likeBtn = <BsHeartFill size={50} color='red' />
            break;
        default:
            console.log('Unliked')
            click = 0;
    }
    return (
        <div className='like-btn'>
            <h1 className="title"> Latest Posts </h1>
            <div className="card shadow-lg" id="cards">
                <img src="images/sunset.jpeg" className="image card-img-top" alt="Sunset"/>
                <div className="card-body">
                    <h5 className="post-title card-title">Sunset over the ocean!</h5> 
                    <div onClick={(handleClick)}>{likeBtn}</div>
                </div>
            </div>
        </div>
    )
}

export default LikeBtn
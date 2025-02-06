 import picture from './assets/picture.jpg'
function Card(){

    return(
        <div className="card">
            <img src={picture} alt="pro pic" />
            <h1>Shoes</h1>
            <p>available shoes</p>
        </div>
    )


}

export default Card
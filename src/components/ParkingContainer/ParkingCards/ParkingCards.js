import React from 'react'
import ReactStars from 'react-rating-stars-component';
import './parkingCards.css';

function ParkingCards({slot}) {
    const altImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcA2y2n6aIXXb41hcgB7q81sD6uP-P_HEs_7aaq1GNFYWupeAOyyz3E9EF1VYXDQzilQ&usqp=CAU"
    var divStyle = {
        height:"150px",
        width: "150px",
        backgroundSize: "cover",
        backgroundPosition:"center",
        backgroundImage: `url(  ${slot.image_url || altImg}  )`,
        border: "solid 2px black",
        borderRadius:"5rem"
      };

      const score = ((slot.review_count * slot.rating) / (slot.review_count +1)).toFixed(2)
    return(
        <div className="card-wrap">
            <a href={slot.url} target="_blank" rel="noreferrer">
                
                <div style={{"text-decoration":"none"}}>
             <h2  className="slot-name">{slot.name}</h2>
            <div className="card-info">
                
                <div className="info-column"> 
                    <span className="address"> {slot.location.address1? "address: " + slot.location.address1 : "missing adress" } </span>
                    <p> reviews: {slot.review_count}</p>
                    <div className="stars"><ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={slot.rating}
                    activeColor="#ffd700"
                    />
                    </div>
                </div>
                <div style={divStyle}/>
            </div>
            </div>
            </a>
            <footer className="score">score: {score}</footer>
        </div>
    )
};

export default ParkingCards;
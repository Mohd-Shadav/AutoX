import React, { useState } from 'react'
import './Reviews.css'

function Reviews() {
    let reviewBarList = ["Cars Reviews","Bikes Reviews","Motor Sport News","Opinions"]


    const ReviewsList = [{
        src:'https://www.livemint.com/lm-img/img/2024/05/10/600x338/FILES-CHINA-ECONOMY-AUTO-TECHOLOGY-EV-0_1715356393353_1715356403799.jpg',
        specification:'Biden to quadruple tariffs on Chinese EVs'
        ,
        time:'1 min read . 09 May 2024'
    },{
        src:'https://www.livemint.com/lm-img/img/2024/05/09/600x338/maruti_suzuki_1701074150804_1715276578838.jpg',
        specification:'Six airbags & a new engine: Maruti Suzuki drives in new Swift'
        ,
        time:'1 min read . 09 May 2024'
        
    },{
        src:'https://www.livemint.com/lm-img/img/2024/05/09/600x338/BMW_LIMO_1715270463771_1715270470534.jpg',
        specification:'BMW 3 Series Gran Limousine M Sport Pro Edition launched: All details'
        ,
        time:'1 min read . 09 May 2024'
    },{
        src:'https://www.livemint.com/lm-img/img/2024/05/09/600x338/swift_new_1715246471736_1715246481468.png',
        specification:"2024 Maruti Suzuki Swift launched in India at ₹6.49 lakh: Know what's new",
        time:'1 min read . 09 May 2024'
    },{
        src:'https://www.livemint.com/lm-img/img/2024/05/09/600x338/swift_new_1715246471736_1715246481468.png',
        specification:"2024 Maruti Suzuki Swift launched in India at ₹6.49 lakh: Know what's new",
        time:'1 min read . 09 May 2024'
    },{
        src:'https://www.livemint.com/lm-img/img/2024/05/09/600x338/swift_new_1715246471736_1715246481468.png',
        specification:"2024 Maruti Suzuki Swift launched in India at ₹6.49 lakh: Know what's new",
        time:'1 min read . 09 May 2024'
    },{
        src:'https://www.livemint.com/lm-img/img/2024/05/09/600x338/swift_new_1715246471736_1715246481468.png',
        specification:"2024 Maruti Suzuki Swift launched in India at ₹6.49 lakh: Know what's new",
        time:'1 min read . 09 May 2024'
    }]



    const[clr,setClr] = useState('transparent')

    function backgroundsetting(){
           if(clr==='transparent'){
            setClr('red')
           }
           else{
            setClr('transparent')
           }
    }

  return (
    <div>

<div className='reviewsBarContainer'>
            
            <ul className='reviewOpinionList'>
               {reviewBarList.map((item,index)=>(
               <li key={index}  className='listReview' onClick={backgroundsetting}>{item}</li>))}


                
            </ul>

            <ul className='reviewOpinionList2'>
                <li className='ViewALlreviews'>
                    <button>View All</button>
                </li>
                
            </ul>
        </div>










        <div className='reviewmaterialContainer'>

            {ReviewsList.map((item,index)=>(
 <div className="carbikeReview">
 <div className="carbikeReviewheader">
                         <img className='reviewCardImage' src={item.src}/>
                     </div>
                     <div className='textCardReview'>
                     <p className="carbikeReviewdesc">{item.specification}</p>
                     
                     <button type="button" className="carbikeReviewaction">Read More</button>
                 </div>
                 </div>
            ))}
       
        </div>
    </div>
  )
}

export default Reviews;
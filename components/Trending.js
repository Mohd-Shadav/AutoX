import React from 'react'
import './Trending.css'

function Trending() {
    const newsCars = [{
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
    }]
  return (
    <div>
     
        <div className='TrendingContainer'>
          <div className='newsSideBanners'>
          <h1 className='headingTrending'>Trending Cars</h1>


{newsCars.map((item,index)=>(
<>
<div key={index} className='newsSideBanner1'>
<img className='newsSideBanner1Image' src={item.src}/>
<div className='newsSideBanner1theory' >
 <p>{item.specification}</p>
 <small style={{color:"gray"}}>{item.time}</small>
</div>
</div>
<div className='lineSideBanners'></div>   
</>
))}  

      
            <button className="btn-shine btnBannerNews">
<span>Read ALL</span>
</button>
        </div>
        <div className='verticalBorderTrending'></div>
        <div className='newsSideBanners'>
        <h1 className='headingTrending'>Trending Bikes</h1>

{newsCars.map((item,index)=>(
<>
<div key={index} className='newsSideBanner1'>
<img className='newsSideBanner1Image' src={item.src}/>
<div className='newsSideBanner1theory' >
 <p>{item.specification}</p>
 <small style={{color:"gray"}}>{item.time}</small>
</div>
</div>
<div className='lineSideBanners'></div>   
</>
))}  

      
            <button className="btn-shine btnBannerNews">
<span>Read ALL</span>
</button>
        </div>

        <div className='trendingImageside'>
            <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-sale-design-template-0f48559b07b4debc9a28ac2290b63eaf_screen.jpg?ts=1698363169'/>
        </div>
    </div>
    </div>
  )
}

export default Trending
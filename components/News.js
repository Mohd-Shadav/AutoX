import React from 'react'
import './News.css'
function News() {

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

    newsCars.map((item)=>console.log(item.specification))
  return (
    <div>
      <div classNameName='headinglatestNews'>
      <h1>Latest News</h1>
      </div>
        <div classNameName='news'>
            <div classNameName='news1Banner'>

                <img classNameName='news1BannerImage' src='https://etimg.etb2bimg.com/photo/109924487.cms'/>
               <div classNameName='textnewsBanner'>
               <h3>Hyundai sees youth power fuel car sales across India</h3>
                <p >Tarun Garg, Chief Operating Officer, says the number of buyers under 30 years .....</p>
                <small>1 min read . 09 May 2024</small>
               </div>
            </div>

            <div classNameName='newsSideBanners'>


    {newsCars.map((item,index)=>(
    <>
 <div key={index} classNameName='newsSideBanner1'>
 <img classNameName='newsSideBanner1Image'  key={index} src={item.src}/>
 <div classNameName='newsSideBanner1theory' >
     <p >{item.specification}</p>
     <small style={{color:"gray"}} >{item.time}</small>
 </div>
</div>
<div classNameName='lineSideBanners'></div>   
</>
))}  

          
                <button className="btn-shine btnBannerNews">
    <span>Read ALL</span>
</button>
            </div>
        </div>
    </div>
  )
}

export default News
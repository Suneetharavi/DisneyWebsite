import React from 'react'



function DisneyBody() {
  return (
    <div className='mainBodyClass'>

      <div className='bodyTextClass'>
        <a href ="https://www.disneyplus.com/brand/disney?cid=DTCI-Synergy-Disneycom-Site-Acquisition-USLaunch-US-DisneyPlus-NA-EN-NavPipe-StreamNowCTA">
            YOUR FAVORITE DISNEY MOVIES & SERIES STREAMING ANYTIME ON DISNEY+
        </a>
      </div>

      <div className='bodyImageClass'>

              {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls={true}
        width="800px"
        height="450px"
      /> */}
       
      <img src='https://media.tenor.com/n3eZWmq4zmAAAAAC/elsa-frozen.gif'  
                alt='NoImg'
                width='1500'/> 
      </div>

      <div className='cyberMondayDiv'>
       <a href ='https://www.shopdisney.com/sale-content/?cmp=OTL-Dcom&att=DcomM_HB_TieredOfferEvent_231127&efc=280559'>
            <img src ='https://www.laughingplace.com/w/wp-content/uploads/2023/11/2023-cyber-monday-savings-shopdisney.jpg'
                alt = 'noCyberMondaysales'
                width='300'
                height={300}/>
        </a>
        
      </div>
      <div className='salesButtonClass'>
        <a href ='https://www.shopdisney.com/sale-content/?cmp=OTL-Dcom&att=DcomM_HB_TieredOfferEvent_231127&efc=280559'>
             <button className='salesbutton'>Shop Now</button>
        </a>
      </div>
      
    </div>
  )
}

export default DisneyBody
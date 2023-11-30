import React from 'react'

function SecondBody() {
  return (
    <div className='secondBodyDiv'>

          <div className='wishDiv'>
            <div className='wishDivText'>
                <h3> Wish</h3>
                <p style={{color:"rgba(22, 60, 22, 0.94)",fontWeight:"bold"}}>Experience the Movie Event of the Year!Wish Is Now Playing, Only in Theaters</p>
                <a href ='https://www.fandango.com/wish-2023-231123/movie-overview'>Get Tickets Now</a>
            </div>

            <div className='wishImageDiv'>
                <img src='https://m.media-amazon.com/images/M/MV5BYWQ4M2ZmODItNzZhYi00MzY1LTk2ZmItYTUwODI2NzJmN2JiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg' 
                     alt='noWishimage'
                     width='150'
                     height='300'/>
            </div>
          </div>

          <div className='frozen10'>
            <div className='frozen10Text'>
                <h3> Frozen's 10th Anniversary</h3>
                <p style={{color:"rgba(22, 60, 22, 0.94)",fontWeight:"bold"}}>Celebrate 10 years of Frozen with news, a podcast, the Disnet+ Streaming Collection, and More!</p>
                <a href='https://frozen.disney.com/'>JOIN THE CELEBRATION</a>
            </div>

            <div className='frozen10Div'>
               <img src='https://i.ebayimg.com/00/s/NzQ4WDQ5NA==/z/OW0AAOxyVaBS0yQk/$_1.JPG?set_id=880000500F'
                    alt='nofrozen10image'
                    width='150'
                    height='300'/>
            </div>
          </div>

          <div className='TheSanta'>
            <div className='TheSantaText'>
                <h3> The Santa Clauses</h3>
                <p style={{color:"rgba(22, 60, 22, 0.94)",fontWeight:"bold"}}>Season 2 of the Disney+ Original Series Is Now Streaming</p>
                <a href='https://www.disneyplus.com/series/the-santa-clauses/6ggA9rAPkovW?cid=DTCI-Synergy-Disneycom-Site-Acquisition-Originals-US-Disney-TheSantaClauses-EN-PromoModule-S2-NA'>STREAM NOW</a>
            </div>

            <div className='TheSantaDiv'>
               <img src='https://upload.wikimedia.org/wikipedia/en/3/3d/The_Santa_Clauses_poster.jpg'
                    alt='noTheSantaimage'
                    width='150'
                    height='300'/>
            </div>
          </div>

          
          <div className='EPCOTO'>
            <div className='EPCOTOText'>
                <h3> EPCOT</h3>
                <p style={{color:"rgba(22, 60, 22, 0.94)",fontWeight:"bold"}}>Celebrate 100 Years of Disney Memories with Limited-Time Offerings Now Through December 31,2023</p>
                <a href='https://disneyworld.disney.go.com/events-tours/100th-anniversary/?CMP=AFC-DPFY24Q1DIENT0001&DISCID=DI_HP_promo'>LEARN MORE</a>
            </div>

            <div className='EpcotoDiv'>
               <img src='https://www.travelandleisure.com/thmb/hkX56YIMZuABL81vDlLjQ6_7z1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/walt-disney-world-epcot-night-EPCOTGUIDE0122-d9788170ece0444c8a1ca41fe3a476cd.jpg'
               
                    alt='noEpcotoimage'
                    width='150'
                    height='300'/>
            </div>
          </div>

    </div>
  )
}

export default SecondBody
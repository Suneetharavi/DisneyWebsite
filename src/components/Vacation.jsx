import React from 'react'

function Vacation() {
  return (
    <div className='vacationDiv'>
        
        <div className='vacationDiv1Class'>
            <h2 className='vacation-text-class'>Vacation with Disney Parks</h2>
        </div>

        <div className='vacationDiv2Class'>
            <div className='Vacation1Div1'>
            <a href='https://disneyworld.disney.go.com/special-offers/holiday-2023-early-2024-dine-card-offer/?CMP=AFC-DPFY23Q1DIENT0172&DISCID=DI_HP_promo'>
                <img className='vacationImgClass' src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iYMAgAF8DNvM/v1/-1x-1.jpg'
                    alt='NoImgAvailable'
                    width='500px'
                    height='400px'/>
            </a>
            <h2>Walt Disney World® Resort</h2>
            <p>  Play, stay and dine with this special offer.</p>
        
          </div> 

          <div className='Vacation2Div2'>  
            <a href='https://disneyland.disney.go.com/offers-discounts/2023-fall-room-offer-disneyland/?CMP=AFC-DPFY23Q1DIENT0183&DISCID=DI_HP_promo'>
                <img className='vacationImgClass' src='https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/activities/imm3jirbdsp2tljshjbg.jpg'
                    alt='NoImgAvailable'
                    width='500px'
                    height='400px'/>
            </a>

            <h2>Disneyland® Resort </h2>
            <p>Save up to 15% on select stays now through 12/21/2023 at a Disneyland® Resort hot</p> 
          </div>

        </div>

    </div>
  )
}

export default Vacation
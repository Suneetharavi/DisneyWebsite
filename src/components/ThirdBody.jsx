import React from 'react'

function ThirdBody() {
  return (
    <div className='thirdBodyDiv'>

        <div className='thirdbodyText'>
            <h2 className='h2text'>Trending on Disney+</h2>
        </div>

        <div className='thirdBodyImagesDiv'>

           <div className='thirdBodyMovie1'>
              <a href='https://www.disneyplus.com/movies/dashing-through-the-snow/6oiqPXqHXrjp?cid=DTCI-Synergy-Disneycom-Site-Acquisition-Originals-US-NA-DashingThroughtheSnow-EN-FeaturedModule-NA-NA'>
                <img src='https://m.media-amazon.com/images/M/MV5BYWExOTdjYWUtZmE5NS00NjVhLTkwZDUtMDgxNmZiMmI2ZDgxXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg'
                     alt='noImage1'
                     width='500px'
                     height='400px'/>
              </a>
                <h2 className='h2text'>Dashing Through the Snow</h2>
                <h3 className='h3text'>It's the most magical time of the year.Dashing Through the Snow is now streaming on Disney+.</h3>
                <a className='aLinkClass' href='https://www.disneyplus.com/movies/dashing-through-the-snow/6oiqPXqHXrjp?cid=DTCI-Synergy-Disneycom-Site-Acquisition-Originals-US-NA-DashingThroughtheSnow-EN-FeaturedModule-NA-NA'>STREAM NOW</a>
           </div>

           <div className='thirdBodyMovie2'>
                <a href='https://www.disneyplus.com/movies/the-naughty-nine/6lKJEp7Yh2Hl?cid=DTCI-Synergy-Disneycom-Site-Acquisition-Library-US-Disney-TheNaughtyNine-EN-FeaturedModule-NA-NA'>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/718926D304D6775E25E1AB6C4EA3493B091319478F4EDB3F80BDEC373DC0ED73/scale?width=1200&aspectRatio=1.78&format=jpeg' 
                alt='noImage2'
                width='500px'
                height='400px'/>
                </a>
                <h2 className='h2text'>The Naughty Nine</h2>
                <h3 className='h3text'>No Presents? No chance.The Naughty Nine is now streaming on Disney+</h3>
                <a className='aLinkClass' href='https://www.disneyplus.com/movies/the-naughty-nine/6lKJEp7Yh2Hl?cid=DTCI-Synergy-Disneycom-Site-Acquisition-Library-US-Disney-TheNaughtyNine-EN-FeaturedModule-NA-NA'>STREAM NOW</a>
           </div>

        </div>
    </div>
  )
}

export default ThirdBody
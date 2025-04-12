import {React, useState, useEffect} from 'react'
import Booking from './booking';
import TipCard from './tipCard';


export default function Packages() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState([ "Ethiopia", "Germany", "Thailand", "Turkey", "Indonesia", "Bermuda" ])

    
      const API = 'https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations'
      useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const response = await fetch(API);
            const result = await response.json();
            const filteredData = result.filter(each => countries.includes(each.country));
            
            setData(filteredData)
            setLoading(false)
          }catch(error){
            console.error('Error fatching data', error)
            
          } 
        }
        fetchData();
      }, [countries]);
    
console.log(data)
  return (
    <div>
      <div className="my-[60px] px-8 flex justify-between items-end flex-wrap gap-y-[45px] gap-x-[10%]">
        <p className="m-0 max-w-[595px] text-left text-[18px] vsm:text-[15px]">
          <span className="text-[60px] font-bold vsm:text-[49.8px]">Popular Destination</span><br />
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <button className="w-[213px] h-[60px] text-[22px] rounded-full font-semibold text-white bg-black transition-all duration-300 hover:scale-105 hover:shadow-lg vsm:w-[160px] vsm:h-[40px] vsm:text-[14px]">Discover Now</button>
      </div>
      {
      loading? <p>Loading...</p>:
      (
        <div className='flex justify-center flex-wrap gap-[18px] px-8 mb-[158px]'>
            {
                data.map(
                    each=>(
                     
                        <Booking
                        key={each.id}
                        image={`../public/packageImages/bookingCardImg/${each.country}.jpg`}
                        country={each.country}
                        price={each.price}
                        day="3"
                        description={each.description}
                      />
                            )
                        )
            }
        </div>
       
      )
     }   
    
      <img className="w-full min-h-[362px] max-h-[542px] object-cover" src="../public/packageImages/pg2im2.png" alt="" />

      <div>
        <div className="my-[60px] px-8 flex justify-between items-end flex-wrap gap-y-[45px] gap-x-[10%]">
          <p className="m-0 max-w-[595px] text-left text-[18px] vsm:text-[15px]">
            <span className="text-[60px] font-bold  vsm:text-[49.8px]">Tips & Article</span><br />
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <button className="w-[213px] h-[60px] text-[22px] rounded-full font-semibold text-white bg-black transition-all duration-300 hover:scale-105 hover:shadow-lg vsm:w-[160px] vsm:h-[40px] vsm:text-[14px]">view more</button>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-[58px] px-8 vsm:px-[17px] py-[0]">
          <div className="flex flex-col items-center flex-wrap gap-y-[58px]">
            <TipCard 
              size="max-w-[522px] min-h-[514px] vsm:w-[100%]] vsm:h-auto"
              topic="Perfect | Tips"
              title="9 Popular Travel Destintion on Sale in 2022 -"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
            />
            <TipCard 
              size="max-w-[522px] min-h-[514px] vsm:w-[375px] vsm:h-[467px]"
              topic="Tips | Travel"
              title="How Are We Going to Travel in 2022 -"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
            />
          </div>

          <TipCard 
            image="../public/packageImages/stories.png"
            size="max-w-[792px] h-[1086px] vsm:h-auto"
            contentSize="flex-1"
            class="w-full max-h-[679px] object-contain rounded-t-[10px]"
            topic="Stories | Tips"
            title="Travel Stories For Now and the Future"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
          />
        </div>
      </div>
    </div>
  );
}

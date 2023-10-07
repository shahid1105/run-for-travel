import { useEffect, useState } from 'react';
// import {BsAirplane} from 'react-icons';
// import { icons } from 'react-icons';
import {FaCarSide } from 'react-icons/fa';
import { BsAirplane, BsStarFill} from 'react-icons/bs';
import {RiHotelLine} from 'react-icons/ri';
import {TbTrekking} from 'react-icons/tb'
import './card.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "./styles.css"


const Card = () => {

    const [hotelsData , setHotelsData] = useState([]);

    useEffect(() => {
        fetch("../../../hotel.json")
          .then((res) => res.json())
          .then((data) => setHotelsData(data));
          
      }, []);
    console.log(hotelsData);
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 3,
          spacing: 30,
        },
      })

    return (
        <div className='mx-auto container'>
            <h1>This is Card</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    hotelsData.map(hotelData =><>
                        <div className="card-css card px-5 pb-5 bg-base-100 shadow-xl">
                            <figure className=" pt-5 pb-6">
                                <img src="https://img.freepik.com/premium-photo/brooklyn-bridge-statue-liberty_63253-7983.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="">
                                <div className='flex items-center justify-between'>
                                    <h2 className="card-title">{hotelData.HotelDescription.Name}</h2>
                                    <div className='flex flex-row'>
                                        <BsStarFill className='text-[#FF5403] text-2xl mr-2'></BsStarFill>
                                        <p>{hotelData.HotelDescription.UserRating}</p>

                                    </div>
                                </div>
                                <p>3 Days 4 Nights</p>
                                <div className='grid grid-cols-4 gap-2 py-3 text-center mb-2'>
                                    <div className='flex flex-col items-center'>
                                        
                                        <BsAirplane className='text-3xl'></BsAirplane>
                                        <p>2 Flights</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        {/* <p>icon</p> */}
                                        <RiHotelLine className='text-3xl'></RiHotelLine>
                                        <p>1 hotel</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        {/* <p>icon</p> */}
                                        <FaCarSide className='text-3xl'></FaCarSide>
                                        <p>2 Transfer</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        {/* <p>icon</p>
                                        */}
                                        <TbTrekking className='text-3xl'></TbTrekking>
                                        <p>4 Activities</p>
                                    </div>
                                </div>
                                <div>
                                    <ul itemType='square' className='list-square'>
                                        <li>Tour combo with return airport transfer</li>
                                        <li>City Tour</li>
                                        <li>Curious Corner</li>
                                    </ul>
                                </div>
                                <div className='flex items-center mt-2 gap-10'>
                                    <p className='line-through'>88,952</p>
                                    <p> <b className='text-[#FF5403] text-4xl'> 80,000</b><sub>per person</sub></p>
                                    
                                </div>

                            </div>
                        </div>

                    </>)
                }
            </div>
            <div ref={sliderRef} className="keen-slider">
            {
                hotelsData.map(hotelData =><>
                    <div className='keen-slider__slide number-slide1'>
                        <div className="card-css card px-5 pb-5 bg-base-100 shadow-xl">
                            <figure className=" pt-5 pb-6">
                                <img src="https://img.freepik.com/premium-photo/brooklyn-bridge-statue-liberty_63253-7983.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="">
                                <div className='flex items-center justify-between'>
                                    <h2 className="card-title">{hotelData.HotelDescription.Name}</h2>
                                    <div className='flex flex-row'>
                                        <BsStarFill className='text-[#FF5403] text-2xl mr-2'></BsStarFill>
                                        <p>{hotelData.HotelDescription.UserRating}</p>

                                    </div>
                                </div>
                                <p>3 Days 4 Nights</p>
                                <div className='grid grid-cols-4 gap-2 py-3 text-center mb-2'>
                                    <div className='flex flex-col items-center'>
                                        
                                        <BsAirplane className='text-3xl'></BsAirplane>
                                        <p>2 Flights</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        {/* <p>icon</p> */}
                                        <RiHotelLine className='text-3xl'></RiHotelLine>
                                        <p>1 hotel</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        {/* <p>icon</p> */}
                                        <FaCarSide className='text-3xl'></FaCarSide>
                                        <p>2 Transfer</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        {/* <p>icon</p>
                                        */}
                                        <TbTrekking className='text-3xl'></TbTrekking>
                                        <p>4 Activities</p>
                                    </div>
                                </div>
                                <div>
                                    <ul itemType='square' className='list-square'>
                                        <li>Tour combo with return airport transfer</li>
                                        <li>City Tour</li>
                                        <li>Curious Corner</li>
                                    </ul>
                                </div>
                                <div className='flex items-center mt-2 gap-10'>
                                    <p className='line-through'>88,952</p>
                                    <p> <b className='text-[#FF5403] text-4xl'> 80,000</b><sub>per person</sub></p>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    

                </>)
            }

            </div>

        </div>
    );
};

export default Card;
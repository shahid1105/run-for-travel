import React, { useEffect, useState } from 'react';
import { BsAirplane, BsStarFill } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { RiHotelLine } from 'react-icons/ri';
import { TbTrekking } from 'react-icons/tb';

const TourCard = () => {

    const  [tourPackages , setTourPackages] = useState([]);
    useEffect(()=>{
        fetch('../../../tour.json')
            .then(res => res.json())
            .then(data => setTourPackages(data));
    },[])
    console.log(tourPackages);

    return (
        <div className='container mx-auto my-32'>
            <h1>Hello Tour Card</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    tourPackages.map(tourPackage => <>
                        <div className="card-css card px-5 pb-5 bg-base-100 shadow-xl">
                            <figure className=" pt-5 pb-6">
                                <img src="https://img.freepik.com/premium-photo/brooklyn-bridge-statue-liberty_63253-7983.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="">
                                <div className='flex items-center justify-between'>
                                    <h2 className="card-title">{tourPackage.name}</h2>
                                    <div className='flex flex-row'>
                                        <BsStarFill className='text-[#FF5403] text-2xl mr-2'></BsStarFill>
                                        <p>{tourPackage.rating}</p>
                                    </div>
                                </div>
                                <p>{tourPackage.duration}</p>
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
                                        {
                                            tourPackage.highlights.map(i =><><li>{i}</li></> )
                                        }
                                        {/* <li>Tour combo with return airport transfer</li>
                                        <li>City Tour</li>
                                        <li>Curious Corner</li> */}
                                    </ul>
                                </div>
                                <div className='flex items-center mt-2 gap-10'>
                                    <p className='line-through'>{tourPackage.generalPrice}</p>
                                    <p> <b className='text-[#FF5403] text-4xl'> {tourPackage.offerPrice}</b><sub>per night</sub></p>
                                    
                                </div>

                            </div>
                        </div>
                    </>)
                }
            </div>
            
        </div>
    );
};

export default TourCard;
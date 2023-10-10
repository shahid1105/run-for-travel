import { useState } from "react";
import { useEffect } from "react";
import "./Destination.css"


const Destination = () => {
    const [destination, setDestination] = useState([])
    console.log(destination)
    useEffect(() => {
        fetch("../../../public/destination.json")
          .then((res) => res.json())
          .then((data) => setDestination(data));
      }, []);
    return (
        <div className="max-w-screen-lg mx-auto mt-12 mb-12">
            <h1 className="text-2xl mb-8 ps-4">Popular Destination</h1>
            <div className="md:flex lg:flex md:gap-3 lg:gap-3 px-4">
            {
                destination.slice(0, 6).map((destDatas, index)=>(<>
                <div
                key={index}
                 >
  <div className="mybox">
  <figure><img className="rounded-3xl md:h-[160px] md:w-[180px] lg:h-[180px] lg:w-[200px]" src={destDatas.image} alt="Shoes" /></figure>
  <div className="mycontent">
  <a className="btn bg-[#ff5403] btn-sm" href="">See More</a>
  </div>
  </div>
  <div >
    <h2 >{destDatas.name}</h2>
    <p>{destDatas.place}</p>
  </div>
</div>
                </>))
            }
            </div>
        </div>
    );
};

export default Destination;
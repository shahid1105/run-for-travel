import { Link } from "react-router-dom";
import img from "../../../../public/img-for-about/A.png";
import { BsArrowRight } from 'react-icons/Bs';

const About = () => {
  return (
    <div className="md:mx-36 my-5 md:my-10">
      <div className="lg:flex-row-reverse card md:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-fit" src={img} alt="Album" />
        </figure>
        <div className="grid grid-cols-1 place-content-center justify-center card-body md:w-[50%]">
          <h2 className="card-title">About Us</h2>
          <p className="my-1 md:my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a sapien justo. Nulla facilisis tristique imperdiet. Nullam a
            placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit
            amet ultrices. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
          <div className="card-actions">
            <Link to='/about'>
            <button className="btn btn-xs font-semibold text-[#FF5403]">Read more <BsArrowRight></BsArrowRight></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

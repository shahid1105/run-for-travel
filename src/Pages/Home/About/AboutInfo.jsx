import Container from "../../Shared/Container/Container";
import img from "../../../../public/img-for-about/B.png";
import img1 from "../../../../public/img-for-about/Vector.png";
import img2 from "../../../../public/img-for-about/Group.png";
import img3 from "../../../../public/img-for-about/check.png";
import img4 from "../../../../public/img-for-about/alif.jpg";
import img5 from "../../../../public/img-for-about/tuhin.jpg";
import img6 from "../../../../public/img-for-about/sahid.jpg";
import img7 from "../../../../public/img-for-about/travel.png";
import img8 from "../../../../public/img-for-about/city.png";
import img9 from "../../../../public/img-for-about/island.png";
import img10 from "../../../../public/img-for-about/map.png";

const AboutInfo = () => {
  return (
    <div>
      {/* banner section  */}
      <div
        className="hero h-[200px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/89ZSKSK/image-3.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
      <Container>
        <div>
          <h3 className="text-2xl text-center mt-10 md:mt-20 font-bold">
            Why Choose Us ?
          </h3>
          <p className="text-center">
            These popular destinations have a lot to offer
          </p>
        </div>

        {/* Choose  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          <div className="text-center">
            <img className="mx-auto w-28 mb-4" src={img1} alt="" />
            <h3 className="mb-2 text-xl">Best price guarantee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="text-center">
          <img className="mx-auto w-28 mb-4" src={img2} alt="" />
            <h3 className="mb-2 text-xl">Easy Booking</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="text-center">
          <img className="mx-auto w-28 mb-4" src={img3} alt="" />
            <h3 className="mb-2 text-xl">Customer Service 24h</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>

        {/* About Section  */}
        <div className="my-5 md:my-10">
          <div className="lg:flex-row-reverse card md:card-side bg-base-100 shadow-xl">
            <figure>
              <img className="w-fit" src={img} alt="Album" />
            </figure>
            <div className="grid grid-cols-1 place-content-center justify-center card-body md:w-[50%]">
              <h2 className="card-title">About Travelaja.com</h2>
              <p className="my-1 md:my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse a sapien justo. Nulla facilisis tristique imperdiet.
                Nullam a placerat odio. Sed in ex augue. Aliquam porta
                consectetur lorem sit amet ultrices. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
              <p>
                Id ac non, semper turpis maecenas. Convallis tempor fringilla
                quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae.
                Malesuada velit, at mattis adipiscing quisque tristique id
                magna. Blandit porta sit nam magna sit. Turpis vestibulum
                facilisis placerat habitant gravida eget. Lacus pretium, arcu
                non adipiscing sed faucibus semper eget tempor.
              </p>
            </div>
          </div>
        </div>

        {/* Our Teams Members  */}
        <div className="text-center my-10">
          <h3 className="text-md font-bold">Our Teams</h3>
          <p className="">Lorem ipsum dolor sit amet</p>
          <div className="md:flex mt-20 gap-3 justify-center">
          <div className="card w-auto glass">
            <div className="avatar fixed -top-8 left-[105px] md:left-16">
              <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img4} />
              </div>
            </div>
            <div className="card-body md:w-[208px] mt-6">
              <h2 className="mt-2">Mahmud Hasan</h2>
              <p className="text-xs">Web Designer</p>
            </div>
          </div>
          <div className="card w-auto my-14 md:my-0 glass">
            <div className="avatar fixed -top-8 left-[105px] md:left-16">
              <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img5} />
              </div>
            </div>
            <div className="card-body md:w-[208px] mt-6">
              <h2 className="mt-2">Al Tahmiduzzaman Tuhin</h2>
              <p className="text-xs">Web Designer</p>
            </div>
          </div>
          <div className="card w-auto glass">
            <div className="avatar fixed -top-8 left-[105px] md:left-16">
              <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img6} />
              </div>
            </div>
            <div className="card-body md:w-[208px] mt-6">
              <h2 className="mt-2">Shahid Hasan </h2>
              <p className="text-xs">Web Designer</p>
            </div>
          </div>
        </div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-20">
          <div>
            <img className="mx-auto w-28 mb-4" src={img7} alt="" />
          </div>
          <div>
          <img className="mx-auto w-28 mb-4" src={img8} alt="" />
          </div>
          <div>
          <img className="mx-auto w-28 mb-4" src={img9} alt="" />
          </div>
          <div>
          <img className="mx-auto w-28 mb-4" src={img10} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutInfo;

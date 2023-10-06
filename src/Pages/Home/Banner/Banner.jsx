import MyTabsComponent from "../Tabs/MyTabsComponent";

const Banner = () => {
  return (
    <div className="rounded-b-3xl h-[600px]"
      style={{
        backgroundImage: 'url("/public/bg-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-8 text-2xl mt-24 font-bold">
            Discover the most engaging places
          </h1>
          <button className="btn bg-[#ff5403] mb-10 md:mb-24">Discover on 3D Globe</button>
          <div className="mb-24 px-5 md:px-36 ">
          <MyTabsComponent></MyTabsComponent>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;

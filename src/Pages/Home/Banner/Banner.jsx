const Banner = () => {
  return (
    <div className="rounded-b-3xl"
      style={{
        backgroundImage: 'url("/public/bg-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-8 text-2xl mt-24 font-bold">
            Discover the most engaging places
          </h1>
          <button className="btn bg-[#ff5403] mb-24">Discover on 3D Globe</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

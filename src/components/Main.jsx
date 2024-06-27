import React from "react";

const Main = () => {
  return (
    <main className='w-full min-h-[100vh] bg-[url("https://res.cloudinary.com/dnxovvjcz/image/upload/v1718030297/scandinavian-interior-mockup-wall-decal-background_1_y9u6be.png")] relative'>
      <div className="border w-[560px] h-[380px] bg-[#FFF3E3] absolute top-[220px] right-[100px] shadow-md rounded p-10">
        <h6 className="text-[#333333] font-bold">New Arrival</h6>
        <h1 className="text-[52px] text-[#B88E2F] font-bold leading-none">Discover Our New Collection</h1>
        <p className="text-[#333333] font-bold pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio deserunt!</p>
        <button className="h-[65px] w-[190px] mt-10  shadow-sm bg-[#B88E2F] text-white">BUY NOW</button>
      </div>
    </main>
  );
};

export default Main;

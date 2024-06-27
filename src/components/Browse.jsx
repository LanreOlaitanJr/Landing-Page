import React from 'react'

const Browse = () => {
  return (
    <main className='min-h-[700px] bg-white px-[120px]'>
        <div>
            <h3 className='text-center font-bold m-5 '>Browse The Range</h3>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className='flex  justify-center gap-3'>
            <div><img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116885/image_106_wgis3f.png" alt="" /><figcaption className='text-center text-[20px]'>Dining</figcaption></div>
            <div><img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116886/Mask_Group_dpsgmm.png" alt="" /><figcaption className='text-center text-[20px]'>Living</figcaption></div>
            <div><img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116886/Image-living_room_zs8dl4.png" alt="" /><figcaption className='text-center text-[20px]'>Bedroom</figcaption></div>
            </div>
        </div>
    </main>
  )
}

export default Browse

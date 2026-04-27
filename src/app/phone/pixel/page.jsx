// import PixelCard from '@/Components/AllCards/PixelCard';

// import { House } from '@gravity-ui/icons';
// import { Button } from '@heroui/react';
// import React from 'react';



// export const metadata = {
//     title: 'Pixel Phone',
//     description: '...',
// }




// const page = async() => {
//     const data = await fetch("https://mobile-shop-git-main-jahidhasan909s-projects.vercel.app/data.json")
//     const res = await data.json()
//     const pixel = res.phone.pixel
//     return (
//         <div>
//    <div>
//             <div className=" container mx-auto my-10">
//                 <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / phones</p>
//                 <div className="bg-white p-5 rounded-md my-4">
//                     <Button className="bg-black text-white" variant="outline">Pixel</Button>
//                 </div>
//                 <div className="flex justify-between items-center gap-3">
//                     <div className="bg-neutral-200 w-full p-4 rounded-md">
//                         <h3>Products of phones</h3>
//                     </div>

                    

//                 </div>

//                 <div className="grid grid-cols-4 gap-4 my-5">
//                     {pixel.map(pixels => <PixelCard key={pixels.id} pixels={pixels}></PixelCard>)}
//                 </div>



//             </div>
//         </div>
//         </div>
//     );
// };

// export default page;
// import MouseCard from '@/Components/AllCards/gadgetCard/MouseCard';

// import { House } from '@gravity-ui/icons';
// import { Button } from '@heroui/react';
// import React from 'react';


// export const metadata = {
//     title: 'Mouse',
//     description: '...',
// }




// const Mousepage = async() => {
//     const data = await fetch("https://mobile-shop-git-main-jahidhasan909s-projects.vercel.app/data.json")
//     const res = await data.json()
//     const mouse = res.gadget.mouse
//     return (
//         <div>
//             <div className="container mx-auto my-10">
//             <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Gadget</p>
//             <div className="bg-white p-5 rounded-md my-4">
//                 <Button className="bg-black text-white" variant="outline">Mouse</Button>
//             </div>
//             <div className="flex justify-between items-center gap-3">
//                 <div className="bg-neutral-200 w-full p-4 rounded-md">
//                     <h3>Products of Mouse</h3>
//                 </div>

          

//             </div>


//             <div className="grid grid-cols-4 gap-3 my-5">
//                 {
//                     mouse.map(mouses=><MouseCard key={mouses.id} mouses={mouses}></MouseCard>)
//                 }
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Mousepage;
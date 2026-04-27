// import Samsungtab from '@/Components/AllCards/Samsungtab';

// import { House } from '@gravity-ui/icons';
// import { Button } from '@heroui/react';
// import React from 'react';


// export const metadata = {
//     title: 'Tablet Samsung',
//     description: '...',
// }





// const SamsungTab = async () => {
//     const data = await fetch("https://mobile-shop-git-main-jahidhasan909s-projects.vercel.app/data.json")
//     const res = await data.json()
//     const samsungtab = res.tablet.samsungTab
//     return (
//         <div>
//             <div>
//                 <div className=" container mx-auto my-10">
//                     <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Tablet</p>
//                     <div className="bg-white p-5 rounded-md my-4">
//                         <Button className="bg-black text-white" variant="outline">Apple Tap</Button>
//                     </div>
//                     <div className="flex justify-between items-center gap-3">
//                         <div className="bg-neutral-200 w-full p-4 rounded-md">
//                             <h3>Products of Tablet</h3>
//                         </div>
                        
//                     </div>

//                     <div className="grid grid-cols-4 gap-4 my-5">
//                         {samsungtab.map(samsungtabs => <Samsungtab key={samsungtabs.id} samsungtabs={samsungtabs}></Samsungtab>)}
//                     </div>



//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SamsungTab;
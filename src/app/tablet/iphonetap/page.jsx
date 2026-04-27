// import TapIphoneCard from '@/Components/AllCards/TapIphoneCard';

// import { House } from '@gravity-ui/icons';
// import { Button } from '@heroui/react';
// import React from 'react';


// export const metadata = {
//     title: 'Tablet Apple',
//     description: '...',
// }



// const IphoneTapPage = async () => {
//     const data = await fetch("https://mobile-shop-git-main-jahidhasan909s-projects.vercel.app/data.json")
//     const res = await data.json()
//     const iphonetap = res.tablet.iphoneTab
//     return (
//         <div>
//             <div className=" container mx-auto my-10">
//                 <p className="py-3 flex items-center gap-1"> <House></House> / Products / Categories / Tablet</p>
//                 <div className="bg-white p-5 rounded-md my-4">
//                     <Button className="bg-black text-white" variant="outline">Apple Tap</Button>
//                 </div>
//                 <div className="flex justify-between items-center gap-3">
//                     <div className="bg-neutral-200 w-full p-4 rounded-md">
//                         <h3>Products of Tablet</h3>
//                     </div>
                    

//                 </div>

//                 <div className="grid grid-cols-4 gap-4 my-5">
//                     {iphonetap.map(iphonetaps => <TapIphoneCard key={iphonetaps.id} iphonetaps={iphonetaps}></TapIphoneCard>)}
//                 </div>



//             </div>
//         </div>
//     );
// };

// export default IphoneTapPage;
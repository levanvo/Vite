import axios from "axios";
import { Header, useEffect, useState } from "../component/Setup";

const PostDetail = ({data}) => {
    const idPr=data.id;
    // product-One
    const [getDataPr,setDataPr]=useState({});
    useEffect(()=>{
        axios.get("http://localhost:3000/projects/"+data.id).then(({data})=>setDataPr(data));
    },[]);
    // category-One
    const [getDataCt,setDataCt]=useState({});
    useEffect(()=>{
        axios.get("http://localhost:3000/category/").then(({data})=>{
            data.map((show)=>{
                if(show.id==getDataPr.select){setDataCt(show);}
            });
        });
    },[getDataPr]);
    // products-all
    const [getDataAllPr,setDataAllPr]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/projects").then(({data})=>setDataAllPr(data));
    },[]);
    // product-related-category
    const [getDataPrRelated,setDataRelated]=useState([]);
    useEffect(()=>{
        const see=getDataAllPr.filter((get)=>get.select==getDataCt.id);
        setDataRelated(see);
    },[getDataCt]);
    console.log(getDataPrRelated);
  return `
        ${Header()}
        
        <div class="">
            <h1 class="text-4xl mt-1 ml-5 mb-10">PostDetail Page</h1>
            <div class="flex space-x-10 w-[1000px] justify-center mx-auto rounded-xl">
                <div class="border-2 border-white rounded-xl">
                     <img class="w-80 h-80 rounded-xl" src="${getDataPr?.img}" alt="">
                </div>
                <div class="w-[640px] bg-white rounded-xl">
                    <h2 class="text-center font-bold text-gray-700 text-xl underline text-details">${getDataPr?.name}</h2>
                    <div class="w-[620px] rounded-xl h-[250px] mx-auto mt-4 text-gray-500 bg-gray-300">
                        <p class="h-2"></p>
                        <p class="text-sm ml-3">Author: <span>${getDataPr?.author}</span></p>
                        <p class="text-sm ml-3 mt-1">List: <span>${getDataCt?.name}</span></p>

                        <p class="text-sm ml-3 mt-1">Content:</span></p>
                        <textarea class="bg-gray-400 w-[560px] h-[130px] ml-10 rounded-sm disabled"> ${getDataPr?.content}</textarea>
                        <p class="text-sm ml-3 mt-1">Date: <span>${getDataPr?.time}</span></p>
                    </div>
                </div>
            </div>
            <div class="w-[1000px] mx-auto">
                <h3 class="text-xl text-red-500 mt-1 mb-[2px]">Related items:</h3>
            </div>
            <div class="w-[1000px] h-44 mx-auto  flex box-shell">
                ${getDataPrRelated.map((get)=>{
                    return `
                        <a href="/post_detail/${get.id}" class="w-[250px] my-auto h-32 mx-auto rounded-md"><div class="bg-gray-200 my-auto w-[250px] hover:scale-100 scale-90 duration-200 h-32 mx-auto rounded-md text-gray-600 ">
                            <h2 class="text-center font-bold">${get?.name}</h2>
                            <img class="w-[220px] h-[90px] rounded-md mt-2 mx-auto" src="${get.img}" alt="Error image !">
                        </div></a>
                    `
                }).join("")}
            </div>
        </div>
    `;
};
export default PostDetail;
// ${getDataPrRelated.map((get)=>{
//     return `
//         <a href="post_detail/${get.id}" class="w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md"><div class="bg-gray-200 w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md text-gray-600 show_box">
//             <p class="text-center font-medium">${get.name}</p>
//             <div class="flex space-x-5 mt-2">
//                 <img class="w-14 h-14 rounded-md ml-1" src="${get.img[0]}">
//             </div>
//             <p class="float-right mr-3 text-xs mt-3">________${get.time}</p>
//         </div></a>
//     `
// })}
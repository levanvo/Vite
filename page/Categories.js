import { Header, useEffect, useState } from "../component/Setup";
import axios from"axios";
// window.onload = function() {
//   location.reload();
// };

const Categories = () => {
    
    // category
    const [get_ct,set_ct]=useState([]);
    useEffect(function(){
        axios.get("http://localhost:3000/category").then(({data})=>set_ct(data));
    },[]);
    // projects
    const [get_pr,set_pr]=useState([]);
    useEffect(function(){
        axios.get("http://localhost:3000/projects").then(({data})=>set_pr(data));
    },[]);
    // connect to data from category
    const [get_data,set_data]=useState([]);
    useEffect(function(){
        const click_category=document.querySelectorAll(".click_category");
        for(let btn of click_category){
            btn.addEventListener("click",function(e){
                e.preventDefault();
                const id_ct=btn.dataset.id;
                // axios.get(`http://localhost:3000/projects`).then(({data})=>{
                    const screening=get_pr.filter((get)=>get.select==id_ct);
                    set_data(screening);
                // });
                // console.log(screening);
            }); 
        };
        // Search
        document.querySelector(".search").addEventListener("click",(e)=>{
            e.preventDefault();
            const valueSearch=document.querySelector("#valueSearch").value;
            // console.log(valueSearch.toUpperCase());
            get_pr.map((take)=>{
                if(take.name.toUpperCase()==valueSearch.toUpperCase()){
                    window.location.href=`/post_detail/${take.id}`;
                };
            });
        });
    });

    console.log(get_data);
    const Show_data = ({ get_data }) => {
        if (get_data.length > 0) {
            const idGetFromProduct=Number(get_data[0].select);
            return`
                ${get_ct.map((get)=>{
                    if(get.id==idGetFromProduct){
                        return `
                            <div class="text-lg text-white absolute h-[40px] top-[112px] bg_title_category">
                            <h1 class="leading-9 ml-5">List: <span class="colorful_title_ct">${get.name}</span></h1>
                        `
                    }
                }).join("")}
            <div class="show_data grid grid-cols-3 mt-10">
                ${get_data.map((take)=>{
                    return`
                        <a href="post_detail/${take.id}" class="w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md"><div class="bg-gray-200 w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md text-gray-600 show_box">
                            <p class="text-center font-medium">${take.name}</p>
                            <div class="flex space-x-5 mt-2">
                                <img class="w-14 h-14 rounded-md ml-1" src="${take.img[0]}">
                                <p class="text-xs">${take.content.slice(0,70)}...</p>
                            </div>
                            <p class="float-right mr-3 text-xs mt-3">________${take.time}</p>
                        </div></a>
                    `
                }).join("")}
            </div>`
        }else{
            return`
            <div class="mb-3">
                <form>
                    <input class="w-[700px] h-[36px] rounded-l-md outline-0 pl-2 text-black inputSearch" type="text" placeholder=" ...input Search" id="valueSearch">
                    <button class="w-[140px] h-[35px]  rounded-r-md search">Search</button>
                </form>
            </div>
            <div class=" grid grid-cols-3">
                ${get_pr.map((take)=>{
                    return`
                        <a href="post_detail/${take.id}" class="w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md"><div class="bg-gray-200 w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md text-gray-600 show_box">
                            <p class="text-center font-medium">${take.name}</p>
                            <div class="flex space-x-5 mt-2">
                                <img class="w-14 h-14 rounded-md ml-1" src="${take.img[0]}">
                                <p class="text-xs">${take.content.slice(0,70)}...</p>
                            </div>
                            <p class="float-right mr-3 text-xs mt-3">________${take.time}</p>
                        </div></a>
                    `
                }).join("")}
            </div>`
        }
    };
  return `
        ${Header()}
        <div class="mb-10"></div>
        <div class="flex justify-center space-x-5 mt-2">
            <div class="w-[337px] h-[500px] relative package_scroll">
                <div class="w-[320px] -ml-[1px] h-10 shell_ct absolute"><h2 class="text-center text-white text-2xl font-bold underline">Categories</h2></div><br><br><br>
                <div class="font-medium text-center h-8 leading-8 w-[220px] hover:text-black bg-white text-gray-500 rounded-md mx-auto hover:scale-x-105 duration-75 text-gray-600 mb-3 ml-1 click_category"><a class="w-[220px] hover:text-black text_CT mx-auto" href="#">Show All</a></div>
                
                    ${get_ct.map((take)=>{
                        return`
                            <div class="font-medium text-center h-8 leading-8 w-[220px] hover:text-black bg-white text-gray-500 rounded-md mx-auto hover:scale-x-105 duration-75 text-gray-600 mb-3 ml-1 click_category" data-id="${take.id}"><a class="w-[220px] hover:text-black text_CT mx-auto" href="#">${take.name}</a></div>
                        `
                    }).join("")}
                
            </div>
            <div class="w-[850px] ">
                ${Show_data({get_data})}
            </div>
        </div>
        
    `;
};
export default Categories;

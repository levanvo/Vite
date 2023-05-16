import axios from "axios";
import { Header, router, useEffect, useState } from "../component/Setup"

const AdminEditPf=()=>{
    const [get_pf,set_pf]=useState({});
    useEffect(function(){
        axios.get("http://localhost:3000/profile").then((data)=>set_pf(data.data))
    },[]);
    console.log(get_pf);
    useEffect(function(){
        
        const click=document.querySelector("#idForm");
        click.addEventListener("submit",async (e)=>{
            const name_profile=document.querySelector("#name_profile");
            const sdt_profile=document.querySelector("#sdt_profile");
            const email_profile=document.querySelector("#email_profile");
            const img_profile=document.querySelector("#img_profile");
            const majors_profile=document.querySelector("#majors_profile");
            const content_profile=document.querySelector("#content_profile");
            e.preventDefault();
            const okImage=await addImage(img_profile.files);
            const object={
                name:name_profile.value,
                sdt:sdt_profile.value,
                email:email_profile.value,
                image:okImage,
                majors:majors_profile.value,
                introduce:content_profile.value,
            };
            axios.put("http://localhost:3000/profile",object);
            router.navigate("/admin");
        });
    });
    const addImage = async (files) => {
      // console.log(files);
      const cloudName = "darnprw0q";
      const presetName = "vole_2k";
      const folderName = "img_assigment";
      const all_image = [];
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const upImage = new FormData();

      upImage.append("upload_preset", presetName);
      upImage.append("folder", folderName);
      for (const file of files) {
        console.log(file);
        upImage.append("file", file);
        const get_image = await axios.post(api, upImage, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        all_image.push(get_image.data.secure_url);
      }
      return all_image;
    };
    
    return `
    
        ${Header()}
        <br>
        <h1 class="text-4xl ml-8 mb-5">Update Profile</h1>
        <div class="w-[1100px] mx-auto">
            <form id="idForm" class="">
                <div class="flex justify-center space-x-5">
                    <div>
                        <div class="mb-3 w-[310px]">
                            <input required class="form-control bg-gray-100 w-[310px] h-[310px] rounded-xl" type="file" id="img_profile">
                        </div>
                    </div>
                    <div>
                        <div class="flex space-x-5">
                            <div>
                                <p class="text-white ml-2 text-sm">Your name:</p>
                                <div class="mb-2">
                                    <input required type="text" class="form-control text-center w-[340px]  bg-gray-100" value="${get_pf.name}" placeholder="...Your name..." id="name_profile">
                                </div>
                            </div>
                            <div>
                                <p class="text-white ml-2 text-sm">Sđt:</p>
                                <div class="mb-2">
                                    <input required type="text" class="form-control text-center w-[340px]  bg-gray-100" value="${get_pf.sdt}" placeholder="...Sđt..." id="sdt_profile">
                                </div>
                            </div>
                        </div>
                        <p class="text-white ml-2 text-sm">Your Email:</p>
                        <div class="mb-2">
                            <input required type="email" class="form-control text-center w-[700px]  bg-gray-100" value="${get_pf.email}" placeholder="...Email..." id="email_profile">
                        </div>
                        <p class="text-white ml-2 text-sm">Your majors:</p>
                        <div class="mb-2">
                            <input required type="text" class="form-control text-center w-[700px] bg-gray-100" value="${get_pf.majors}" placeholder="...Your majors..." id="majors_profile">
                        </div>
                        <p class="text-white ml-2 text-sm">Introduce yourself:</p>
                        <div class="mb-2">
                        <textarea required class="form-control text-center bg-gray-100 h-[93px]" placeholder="...content..." id="content_profile">${get_pf.introduce}</textarea>
                        </div>
                    </div>
                </div>
                <div class="text-center button_shell_control">
                    <button type="submit" class="button_control w-44">Accept</button>
                </div>
            </form>
        </div>
        
    `;
}
export default AdminEditPf;
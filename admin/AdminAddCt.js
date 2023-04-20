import axios from "axios";
import { Header, router, useEffect } from "../component/Setup"

const AdminAddCt=()=>{
    useEffect(function(){
        const click=document.querySelector("#idForm");
        click.addEventListener("submit",async (e)=>{
            const name=document.querySelector("#name");
            const img=document.querySelector("#img");
            e.preventDefault();
            const okImage=await addImage(img.files);
            const object={
                name:name.value,
                img:okImage,
            };
            axios.post("http://localhost:3000/category",object);
            router.navigate("/admin");
            // console.log(object);
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
        <h1 class="text-4xl ml-8 mb-5">Add Category more</h1>
        <div class="w-[1100px] mx-auto">
            <form id="idForm" class="">
                <div class="">
                    <div class="mb-3">
                        <input required class="form-control bg-gray-100" type="file" id="img">
                    </div>
                    <p class="text-white">Name Category:</p>
                    <div class="mb-2">
                        <input required type="text" class="form-control bg-gray-100" placeholder="name category" id="name">
                    </div>
                </div>
                <div class="text-center button_shell_control">
                    <button type="submit" class="button_control w-44">Continue</button>
                </div>
            </form>
        </div>
    `;
}
export default AdminAddCt;
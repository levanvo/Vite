import axios from "axios";
import { Header, router, useEffect, useState } from "../component/Setup";

const AdminEditPr = ({ data: { id } }) => {
    const [get_ct,set_ct]=useState([]);
    useEffect(function(){
        axios.get("http://localhost:3000/category").then(({data})=>set_ct(data));
    },[]);
  const [get, set] = useState({});
  console.log(id);
  useEffect(function () {
    axios
      .get("http://localhost:3000/projects/" + id)
      .then(({ data }) => set(data));
  }, []);
  
  useEffect(function () {
    const click = document.querySelector("#idForm");
    click.addEventListener("submit", async (e) => {
      const name = document.querySelector("#name");
      const img = document.querySelector("#img");
      const author = document.querySelector("#author");
      const content = document.querySelector("#content");
      const select = document.querySelector("#select");
      e.preventDefault();
      const okImage=await addImage(img.files);
      const date=new Date();
      const object = {
        id,
        name: name.value,
        img: okImage,
        author: author.value,
        content: content.value,
        select: select.value,
        time:date.getHours()+":"+date.getMinutes()+"`:"+date.getSeconds()+"____"+date.getDate() +"/"+ date.getMonth()*2+"/"+date.getFullYear(),
      };
      axios.put("http://localhost:3000/projects/" + id, object);
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
        <h1 class="text-4xl ml-8 mb-5">Update Project</h1>
        <div class="w-[1100px] mx-auto">
            <form id="idForm" class="">
                <div class="flex space-x-5">
                    <div class="">
                        <div class="mb-3">
                            <input required class="form-control bg-gray-100 h-[356px] w-56 vo" type="file" multiple id="img">
                        </div>
                    </div>
                    <div class="w-[810px]">
                        <p class="text-white">Name Project:</p>
                        <div class="mb-1">
                            <input required value="${get.name}" type="text" class="form-control bg-gray-100" placeholder="name project" id="name">
                        </div>
                        <p class="text-white">Name Author:</p>
                        <div class="mb-1">
                            <input required value="${get.author}" type="text" class="form-control bg-gray-100" placeholder="author ?" id="author">
                        </div>
                        <p class="text-white">Content:</p>
                        <div class="mb-1">
                            <textarea required class="form-control bg-gray-100" rows="5" placeholder="content..." id="content">${get.content}</textarea>
                        </div>
                        <p class="text-white">Categories:</p>
                        <select required class="form-select bg-gray-100" aria-label="Default select example" id="select">
                            ${get_ct.map(
                              (xem) =>
                                `<option value="${xem.id}">${xem.name}</option>`
                            )}
                        </select>
                    </div>
                </div>
                <div class="text-center button_shell_control">
                    <button type="submit" class="button_control w-44">Continue</button>
                </div>
            </form>
        </div>
    `;
};
export default AdminEditPr;

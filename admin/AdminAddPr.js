import axios from "axios";
import { Header, router, useState } from "../component/Setup";
import { useEffect } from "../component/Setup";

const AdminAddPr = () => {
    const [get_ct, set_ct] = useState([]);
    useEffect(function () {
        axios.get("http://localhost:3000/category").then(({ data }) => set_ct(data));
    }, []);
    useEffect(function () {
        const click = document.querySelector("#idForm");
        click.addEventListener("submit", async (e) => {
            e.preventDefault();
            const name = document.querySelector("#name");
            const img = document.querySelector("#img");
            const author = document.querySelector("#author");
            const content = document.querySelector("#content");
            const select = document.querySelector("#select");
            e.preventDefault();
            const okImage = await addImage(img.files);
            const date = new Date();
            let month = date.getMonth();
            month += 1;
            const object = {
                name: name.value,
                img: okImage,
                author: author.value,
                content: content.value,
                select: select.value,
                time: date.getHours() + ":" + date.getMinutes() + "`:" + date.getSeconds() + "____" + date.getDate() + "/" + month + "/" + date.getFullYear(),
            };
            axios.post("http://localhost:3000/projects", object);
            router.navigate("/admin");
        });
        const state = document.getElementById("img");
        const idImg = document.getElementById("idImg");
        state.onchange = (e) => {
            idImg.src = URL.createObjectURL(state.files[0]);
        }
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
        };
        return all_image;
    }
    return `
        ${Header()}
        <br>
        <h1 class="text-4xl ml-8 mb-5">Add new Project</h1>
        <div class="w-[1100px] mx-auto">
            <form id="idForm" class="">
                <div class="flex space-x-5">
                    <div class="mb-3">
                        <input required class="form-control mt-[20px] bg-gray-100 h-[156px] w-56 vo" type="file" multiple id="img">
                        <img class="h-[156px] w-56 mt-[24px] border-4 rounded-lg" id="idImg" src="" alt="Waitting....">
                    </div>
                    <div class="w-[810px]">
                        <p class="text-white">Name Project:</p>
                        <div class="mb-1">
                            <input required type="text" class="form-control bg-gray-100" placeholder="name project" id="name">
                        </div>
                        <p class="text-white">Name Author:</p>
                        <div class="mb-1">
                            <input required type="text" class="form-control bg-gray-100" placeholder="author ?" id="author">
                        </div>
                        <p class="text-white">Content:</p>
                        <div class="mb-1">
                            <textarea  required class="form-control bg-gray-100" rows="5" placeholder="content..." id="content"></textarea>
                        </div>
                        <p class="text-white">Categories:</p>
                        <select class="form-select bg-gray-100" aria-label="Default select example" id="select"  required>
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
}
export default AdminAddPr;
import { Header, useEffect, useState } from "../component/Setup";
import axios from "axios";
// fix image=====================================================================================================================================
const AdminPost = () => {
  const [get_pr, set_pr] = useState([]);
  const [get_ct, set_ct] = useState([]);
  // project
  useEffect(async () => {
    await axios
      .get("http://localhost:3000/projects")
      .then(({ data }) => set_pr(data));
  }, []);
  console.log(get_pr);
  useEffect(function () {
    const click = document.querySelectorAll(".remove_pr");
    for (let btn of click) {
      btn.addEventListener("click", function () {
        const view_pr=window.confirm("You sure remove this project !");
        if(view_pr){
          const id = btn.dataset.id;
          axios.delete("http://localhost:3000/projects/" + id);
          const preview = get_pr.filter((ok) => ok.id != id);
          set_pr(preview);
        };
      });
    }
  });
// category
  useEffect(async () => {
    await axios
      .get("http://localhost:3000/category")
      .then(({ data }) => set_ct(data));
  }, []);
 useEffect(function () {
   const click = document.querySelectorAll(".remove_ct");
   for (let btn of click) {
     btn.addEventListener("click", function () {
      const view_ct=window.confirm("You sure !, products related to this category will be removed");
        if(view_ct){
          const id = btn.dataset.id;
          const preview=get_ct.filter((ok)=>ok.id!=id);
          set_ct(preview);
          axios.delete("http://localhost:3000/category/" + id);
          get_pr.map((get)=>{
            if(get.select==id){
              const preview=get_pr.filter((ok)=>ok.id!=get.id);
              set_pr(preview);
              axios.delete("http://localhost:3000/projects/" + get.id);
            }
          })
        };
     });
   }
 });
//  profile
const [get_profile,set_profile]=useState({});
useEffect(function(){
  axios.get("http://localhost:3000/profile").then((data)=>set_profile(data.data));
},[]);
//  handle background and control navigation
  useEffect(function(){
    const click=document.querySelectorAll(".btn_show");
    for(let btn of click){
      const id_click=btn.dataset.id;
      btn.addEventListener("click",function(){
        const profile=document.querySelector(".profile");
        const categories = document.querySelector(".categories");
        const projects = document.querySelector(".projects");
        const background = document.querySelector(".background");
        if (id_click == 0) {
          categories.style.position = "absolute";
          categories.style.top = "-1000px";
          projects.style.position = "absolute";
          projects.style.top = "-1000px";
          background.style.position = "absolute";
          background.style.top = "-1000px";
          profile.style.position = "relative";
          profile.style.top = "0px";
        } else if (id_click == 1) {
          projects.style.position = "absolute";
          projects.style.top = "-1000px";
          profile.style.position = "absolute";
          profile.style.top = "-1000px";
          categories.style.position = "absolute";
          categories.style.top = "-1000px";
          background.style.position = "relative";
          background.style.top = "0px";
        } else if (id_click == 2) {
          projects.style.position = "absolute";
          projects.style.top = "-1000px";
          profile.style.position = "absolute";
          profile.style.top = "-1000px";
          background.style.position = "absolute";
          background.style.top = "-1000px";
          categories.style.position = "relative";
          categories.style.top = "0px";
        } else if (id_click == 3) {
          categories.style.position = "absolute";
          categories.style.top = "-1000px";
          profile.style.position = "absolute";
          profile.style.top = "-1000px";
          background.style.position = "absolute";
          background.style.top = "-1000px";
          projects.style.position = "relative";
          projects.style.top = "0px";
        } else {
          document.querySelector("#show").innerHTML = `
            <div class="w-[900px] ml-2 profile">
              <h1 class="text-4xl">No Data</h1>
            </div>
          `;
        }
      });
    };
    // background
    const click_background = document.querySelector(".btn_background");
      click_background.addEventListener("click",function(){
      const idColor=document.querySelector("#color1");
      const web=document.querySelector("body");
      web.style.background=idColor.value;

      const color1={
        bg_name:idColor.value
      };
      axios.post("http://localhost:3000/background",color1);
    });
    // text color
    const click_color = document.querySelector(".btn_color");
    click_color.addEventListener("click", function(){
      const idColor = document.querySelector("#color2");
      const web = document.querySelector("body");
      web.style.color = idColor.value;

      const color2 = {
        cl_name: idColor.value,
      };
      axios.post("http://localhost:3000/color", color2);
    });
    // set colorfull
    const btn_optimize = document.querySelector(".btn_optimize");
    btn_optimize.addEventListener("click",async function(){

      const id_bg = await axios.get("http://localhost:3000/background").then(({data})=>data.map((got1)=>got1));//object
      const id_cl = await axios.get("http://localhost:3000/color").then(({data})=>data.map((got2)=>got2.id));//array
      console.log(id_bg);
      console.log(id_cl);

      id_bg.map((xuat)=>axios.delete("http://localhost:3000/background/"+xuat.id));
      for(let i=0;i<id_cl.length;i++){
        axios.delete("http://localhost:3000/color/"+id_cl[i]);
      }
      alert("Your web had optimized !! Go back to the homepage to see a new interface");
    });
    // Jquery pull on top
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200)
          $('#top-up').fadeIn(1000); else
          $('#top-up').fadeOut(1000);
      });
      $('#top-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        
      });
    });
  });
  useEffect(()=>{
    const sign_out=document.querySelector(".sign_out");
    sign_out.addEventListener("click",(e)=>{
      const consider=window.confirm("Bạn có chắc đăng xuất ?");
      if(consider){
        localStorage.setItem("checkState",JSON.stringify({role:false}));
        window.location.href="/";
        alert("Bạn đã đăng xuất thành công");
      };
    });
  });
  return /*html*/`
      ${Header()}
        <div class="flex justify-center">
          <div class="w-[300px]"><br>
            <div class="w-[290px] flex relative">
              <img class="w-[80px] h-[80px] my-auto rounded-full object-cover image_profile" src="${get_profile.image}" alt="...">
              <div class="add_image_profile">
                <a href="/admin/edit_content_profile"><img title="Change avatar" class="w-7 h-7 hover:scale-110" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/camera_cpziti.png"></a>
              </div>
              <div class="w-[210px]">
                <p class="text-center border-b border-black -ml-1 font-medium">${get_profile.name}</p>
                <p class="text-center text-xs font-normal mb-1">${get_profile.majors}</p>
                <p class="text-center text-xs text-gray-800 font-normal">Email: ${get_profile.email}</p>
                <p class="text-center text-xs text-gray-800 font-normal">Sđt: ${get_profile.sdt}</p>
              </div>
            </div>
            <button class="text-sm mb-5 mt-3 shadow shadow-gray-500 hover:scale-100 duration-100 hover:text-white text-gray-700 scale-90 h-7 w-[300px] sign_out">Đăng xuất</button>
            <div class="flex justify-between w-[280px] mx-auto siu">
               <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748242/dashboard_sn5l1q.png">
              <a href="/admin" class=" w-[250px] -ml-4"><button type="button" class="font-bold w-[250px] hover:scale-105 focus:scale-125 text-gray-900 btn_show">Dash board</button></a>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/user_kuv3o4.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="0">Profile</button>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/categories_uial9z.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="2">Manager categories</button>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748242/layer_a8mepb.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="3">Manager projects</button>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/color_d0eqjo.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="1">Change website color</button>
            </div><br>
          </div>
          <div id="show">
          <h1 class="text-4xl text-center mb-2 colorful_ad">Management</h1><br>
            <div class="w-[900px] ml-2 profile">
              
              <div class="all_profile w-[900px] mx-auto rounded-md pf_personality">
                <div class="flex space-x-5 ml-5 mr-5 h-[280px] relative">
                  <div class="w-[260px] h-[260px] my-auto overflow-hidden rounded-full image_profile_2">
                    <img class="w-[260px] h-[260px] object-cover my-auto hover:scale-150 duration-500 rounded-full" src="${get_profile.image}" alt="...">
                  </div>
                  <div class="add_content_profile">
                    <a href="/admin/edit_content_profile"><img title="Update profile" class="w-10 h-7" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/update_profile_ul4ql8.png" alt="error"></a>
                  </div>
                  <div class="w-[600px] ">
                    <p class="text-center text-2xl font-bold text-white">-- ${get_profile.name} --</p>
                    <p class="text-center text-lg text-blue-500 mt-2 mb-4">Majors: ${get_profile.majors}</p>
                    <p class=" text-xl font-medium text-orange-500">Introduce:</p>
                    <textarea class="form-control bg-gray-100 text-gray-600" rows="5" placeholder="content..." id="content_profile" disabled>${get_profile.introduce}</textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-[900px] ml-2 rounded-md mt-10 categories">
              <div class=" mt-2">
                <a href="/admin/add_ct" class="click_one"><button type="button" class="click_two">Add Category</button></a>
              </div>
              <table class="table table-dark table-sm w-[895px] mx-auto text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">List name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                  ${get_ct
                    .map((got, index) => {
                      return `
                      <tr class="h-[80px]">
                        <th scope="row"><p class="mt-[23px]"></p>${
                          index + 1
                        }</th>
                        <td><p class="mt-[23px]"></p>${got.name}</td>
                        <td><img class="w-[200px] h-[80px] rounded-md mx-auto" src="${
                          got.img[0]
                        }"></td>
                        <td class="">
                          <p class="mt-[18px]"></p>
                          <button type="button" class="btn btn-danger remove_ct" data-id="${
                            got.id
                          }">Remove</button>
                          <a href="/admin/edit_ct/${
                            got.id
                          }"><button type="button" class="btn btn-primary">Update</button></a>
                        </td>
                      </tr>
                    `;
                    })
                    .join("")}
                </tbody>
              </table>
            </div>
            
            <div class="w-[900px] ml-2 rounded-md mt-10 projects">
              <div class=" mt-2">
              <a href="/admin/add_pr" class="click_one"><button type="button" class="click_two">Add Project</button></a>
              </div>
              <table class="table table-dark table-sm w-[895px] mx-auto text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name-PR</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                  ${get_pr
                    .map((got, index) => {
                      return `
                      <tr class="h-[80px]">
                        <th scope="row"><p class="mt-[23px]"></p>${
                          index + 1
                        }</th>
                        <td><p class="mt-[23px] w-[150px]"></p>${got.name}</td>
                        <td><img class="w-[170px] h-[80px] rounded-md mx-auto" src="${
                          got.img[0]
                        }"></td>
                        <td><p class="mt-[23px] w-[330px]"></p>${got.content.slice(0,30)}...</td>
                        <td class="">
                          <p class="mt-[27px]"></p>
                          <button type="button" class="btn btn-danger remove_pr" data-id="${
                            got.id
                          }">Remove</button>
                          <a href="/admin/edit_pr/${
                            got.id
                          }"><button type="button" class="btn btn-primary">Update</button></a>
                        </td>
                      </tr>
                    `;
                    })
                    .join("")}
                </tbody>
              </table>
            </div>

            <div class="w-[900px] text-center ml-2 rounded-md mt-10 background">
              <div class="flex justify-center space-x-10">
                <div>
                  <h1 class="text-xl">Choose background-color that u like:</h1>
                  <input class="form-control mb-2 mt-2 w-52 h-14 mx-auto" type="color" id="color1">
                  <button class="btn btn-primary w-44 btn_background">Okay</button>
                </div>
                <div class="w-[2px] bg-white"></div>
                <div>
                  <h1 class="text-xl">Choose Text-color that u like:</h1>
                  <input class="form-control mb-2 mt-2 w-52 h-14 mx-auto" type="color" id="color2">
                  <button class="btn btn-primary w-44 btn_color">Okay</button>
                </div>
              </div>
              <p class="text-center text-xs text-white mt-16">Note that: <span class="text-red-500">Optimize your website faster and avoid filling up your color archive.</span></p>
              <div class="flex justify-center mb-4">
                <button title="Set colorful back to default" class="btn btn-danger w-80 mt-2 btn_optimize">Set to default</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div title="Về đầu trang" id="top-up">
        <img class="w-16 h-16 float-right mb-5 mt-3 mr-10" src="../image/arrow_up.png">
      </div>
    `;
};
export default AdminPost;

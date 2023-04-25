
import { Header, useEffect, useState } from './component/Setup'

const Sign_in_up = () => {
    useEffect(()=>{
        // sign-in
        const signin=document.querySelector(".signin");
        signin.addEventListener("submit",(e)=>{
            e.preventDefault();
            const email=document.querySelector("#email1").value;
            const pass=document.querySelector("#pass1").value;

            const objectAccount=JSON.parse(localStorage.getItem("Account_vite"));
            if(email==objectAccount.email && pass==objectAccount.pass){
                window.location.href="/admin";
                alert("Đăng nhập thành công .");
                localStorage.setItem("checkState",JSON.stringify({role:true}));
            }else{
                alert("Email hoặc Pass nhập sai ? Hãy kiểm tra lại .");
            }
        });

        // sign-up -(để tránh bộ nhớ localStorage bị đầy nên sẽ và chỉ đăng kí đăng nhập 1 account duy nhất)
        const signup=document.querySelector(".signup");
        signup.addEventListener("submit",(e)=>{
            e.preventDefault();
            const name=document.querySelector("#name").value;
            const email=document.querySelector("#email2").value;
            const pass=document.querySelector("#pass2").value;
            const repass=document.querySelector("#repass").value;
            if(pass!=repass){
                alert("Passwork không trùng khớp !")
            }else{
                // fix 27 - 31 lưu vào 1 array nếu muốn trữ nhiều account nhưng sẽ ảnh hưởng đến tốc độ web.
                localStorage.setItem("Account_vite",JSON.stringify({
                    name:name,
                    email:email,
                    pass:pass,
                }))
                alert(`Đăng kí thành công Account (email: ${email} - pass: ${pass})`);
            };
        });
    });
    return /*html */`
    ${Header()}
        <h1 class="text-center text-sky-500 text-4xl font-bold mt-5">Entry to management</h1>
        <div class="w-[1200px] mx-auto h-[500px] flex space-x-14">
            <div class="w-[572px] hover:shadow-2xl shadow-md duration-100 shadow-gray-500 h-[350px] my-auto rounded-xl text-black">
                <div class="text-center rounded-t-md shadow shadow-b-white text-xl"><h3 class="leading-10">Log-in</h3></div>
                <form action="" class="mt-10 signin">
                    <p class="ml-[80px]">Email:</p>
                    <input required class=" w-[300px] ml-[140px] h-9 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-600 rounded-sm" type="email" placeholder="...The email" id="email1">
                    <p class="ml-[80px]">Pass:</p>
                    <input required class=" w-[300px] ml-[140px] h-9 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-600 rounded-sm" type="text" placeholder="...The password" id="pass1">
                    <br>
                    <div class="mt-5 flex justify-center">
                        <button class="border w-32 h-10 rounded-md font-bold hover:bg-black hover:text-white duration-200">Sign-In</button>
                    </div>
                </form>
            </div>
            <div class="w-[572px] hover:shadow-2xl shadow-md duration-100 shadow-gray-500 h-[350px] my-auto rounded-xl">
                <div class="text-center rounded-t-md shadow shadow-b-white text-xl"><h3 class="leading-10">Register</h3></div>
                <form action="" class="mt-3 signup">
                    <p class="ml-[80px]">Name:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="text" placeholder="...The name" id="name">
                    <p class="ml-[80px]">Email:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="email" placeholder="...The email" id="email2">
                    <p class="ml-[80px]">Pass:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="password" placeholder="...The pass" id="pass2">
                    <p class="ml-[80px]">Repass:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="password" placeholder="...The repass" id="repass">
                    <br>
                    <div class="mt-3 flex justify-center">
                        <button class="border w-32 h-10 rounded-md font-bold hover:bg-white hover:text-black duration-200">Sign-Up</button>
                    </div>
                </form>
            </div>
        </div>
        <script>
            function signin(){
                alert("ok")
            }
        </script>
    `
}

export default Sign_in_up

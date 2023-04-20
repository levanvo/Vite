import { Header, useEffect, useState } from "../component/Setup";
import axios from "axios";
const Home=()=>{
    const [get_pf,set_pf]=useState({});
    useEffect(function(){
        axios.get("http://localhost:3000/profile").then(({data})=>set_pf(data));
    },[]);
    return`
        ${Header()}
        <div id="#/home"></div>
        <div class="w-[1200px] mx-auto relative mb-44 mt-32">
            <div class="w-[1200px] h-[500px] mt-10 rounded-2xl flex justify-between" id="bg_homePage">
                <div class="">
                    <div class="w-[800px] h-[200px]  text-white">
                        <h2 class="text-4xl text-center">${get_pf.name}</h2>
                        <div class="h-[1px] w-[700px] bg-gray-400"></div><br>
                        <h3 class="text-sm text-gray-700 text-center">______________ ${get_pf.majors} ______________</h3>
                        <p class="ml-4 mt-2 mr-1">${get_pf.introduce}</p>
                    </div>
                    <div class=" h-[390px] ">
                        <h1 class="text-center text-2xl underline">Skills</h1>
                        <div class="isometriccontainer">
                            <div class="isometric isometric-col-1">
                                <div class="isometric-item">HTML/CSS</div>
                                <div class="isometric-item">PHP</div>
                                <div class="isometric-item">JavaScript</div>
                            </div>
                            <div class="isometric isometric-col-2">
                                <div class="isometric-item">MySQL</div>
                                <div class="isometric-item">Node-JS</div>
                                <div class="isometric-item">TypeScript</div>
                            </div>
                            <div class="isometric isometric-col-3">
                                <div class="isometric-item">Git</div>
                                <div class="isometric-item">Bootstrap</div>
                                <div class="isometric-item">Jquery</div>
                            </div>
                            <div class="isometric isometric-col-4">
                                <div class="isometric-item">API</div>
                                <div class="isometric-item">React</div>
                                <div class="isometric-item">PHP</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[340px] rounded-full h-[450px] mt-[26px] text-black mr-[25px] relative">
                    <div class="img_profile_home"><img class="w-[300px] rounded-full h-[400px] top-[25px] left-[35px] absolute" src="${get_pf.image}"></div>
                        
                </div>
            </div>
        </div>

        
        <div id="#/porfolio" class="h-20"></div>
        <div class="text-gray-200 text-4xl text-center">Portfolio</div>
        <div class="w-[1200px] h-96 mt-14 mx-auto flex justify-center space-x-20 ">
            <a class="w-[200px] h-52" href="https://fptcloud.com/javascript/">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/kienthuccoban/jav16012625211108.jpg">
                    <div class="ml-1 mr-1 mt-2">
                        <p>Javascript chính là một ngôn ngữ lập trình web rất phổ biến ngày nay ...</p>
                    </div>
                </div>
            </a>
            <a class="w-[200px] h-52" href="https://topdev.vn/blog/reactjs-nhung-dieu-ban-can-phai-biet/">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg">
                    <div class="ml-1 mr-1 mt-2 text-sm">
                        <p>ReactJS là một thư viện JavaScript mã nguồn mở được thiết kế bởi Facebook để tạo ra những ứng dụng web hấp dẫn ...</p>
                    </div>
                </div>
            </a>
            <a class="w-[200px] h-52" href="https://vietnix.vn/nodejs-la-gi/">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1155.png">
                    <div class="ml-1 mr-1 mt-2">
                        <p>Node.js® là môi trường thời gian chạy JavaScript đa nền tảng, mã nguồn mở ...</p>
                    </div>
                </div>
            </a>
            <a class="w-[200px] h-52" href="https://angular.io/guide/setup-local">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://d2ms8rpfqc4h24.cloudfront.net/whats_new_in_angular15_9af012d463.jpg">
                    <div class="ml-1 mr-1 mt-2">
                        <p>Angular là một nền tảng để xây dựng các ứng dụng web dành cho thiết bị di động và máy tính để bàn ...</p>
                    </div>
                </div>
            </a>
        </div>
        
        <div id="#/contact" class="h-24"></div>
        <div id="#/contact" class="text-gray-200 text-4xl text-center">Contact</div>
        <div class="w-[1200px] mt-14 h-96 mx-auto crust">
            <a class="w-20 h-20 inside_shell" title="email" href="mailto:vole543215@gmail.com"><img class="w-20 h-20" src="../image/contact/email.png"></a>
            <a class="w-20 h-20 inside_shell" title="facebook" href="https://www.facebook.com/"><img class="w-20 h-20" src="../image/contact/facebook.png"></a>
            <a class="w-20 h-20 inside_shell" title="github" href="https://github.com/levanvo"><img class="w-20 h-20" src="../image/contact/github (1).png"></a>
            <a class="w-20 h-20 inside_shell" title="telephone-call" href="tel:0961556217"><img class="w-20 h-20" src="../image/contact/telephone-call.png"></a>
            <a class="w-20 h-20 inside_shell" title="web-link" href="web-link"><img class="w-20 h-20" src="../image/contact/web-link.png"></a>
            <a class="w-20 h-20 inside_shell" title="zalo" href="http://zalo.me/0961556217"><img class="w-20 h-20" src="../image/contact/zalo.png"></a>
        </div>




        <div class="h-20 w-4"></div>
    `;
}
export default Home;
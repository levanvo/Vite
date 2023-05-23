import Sign_in_up from "./Sign_in_up";
import AdminAddCt from "./admin/AdminAddCt";
import AdminAddPr from "./admin/AdminAddPr";
import AdminEditCt from "./admin/AdminEditCt";
import AdminEditPf from "./admin/AdminEditPf";
import AdminEditPr from "./admin/AdminEditPr";
import AdminPost from "./admin/AdminPost";
import { render, router } from "./component/Setup";
import Categories from "./page/Categories";
// import Content from "./page/Content";
import Home from "./page/Home";
import PostDetail from "./page/PostDetail";

const app=document.querySelector("#app");


router.on("/admin/**",()=>{},{
    before:(next)=>{
        const defined=JSON.parse(localStorage.getItem("checkState"));
        if(defined?.role==true){
            next();
        }else{
            alert("Chạy ngay đi trước khi ....");
            window.location.href=("/");
        };
    },
});
router.on("/",()=>render(Home,app));
// router.on("/contact", () => render(Content, app));
router.on("/sign-in-up", () => render(Sign_in_up, app));
router.on("/post_detail/:id", (id_details) => render(()=>PostDetail(id_details), app));
router.on("/category", () => render(Categories, app));
router.on("/admin", () => render(AdminPost, app));
router.on("/admin/add_pr", () => render(AdminAddPr, app));
router.on("/admin/add_ct", () => render(AdminAddCt, app));
router.on("/admin/edit_content_profile", () => render(AdminEditPf, app));
router.on("/admin/edit_ct/:id", (id_ct) => render(()=>AdminEditCt(id_ct), app));
router.on("/admin/edit_pr/:id", (id_pr) => render(()=>AdminEditPr(id_pr), app));

const Not=function(){
    return`
        <h1 class="text-center text-4xl text-green-500 notfound">Not find anythings !!</h1>
    `
  }
  router.notFound(render(Not,app));

//   hihi

router.resolve();
import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a", hash: true });
let effects = [];
let currentEffectOrder = 0;

let rootComponent = null;
let rootContainer = null;

let states = [];
let currentStateOrder = 0;
const debounce = (fn, timeout = 100) => {
  let timeId = null;

  return (...rest) => {
    if (timeId) clearTimeout(timeId);

    timeId = setTimeout(() => fn(...rest), timeout);
  };
};

const render = (container, component) => {
  component.innerHTML = container();
  rootComponent = container;
  rootContainer = component;

  effects.forEach((effect) => {
    effect.cb();
  });
};

const useState = (initialState) => {
  let state;
  let stateOrder = currentStateOrder;

  if (states[stateOrder] !== undefined) {
    state = states[stateOrder];
  } else {
    state = states[stateOrder] = initialState;
  }

  const updater = (newState) => {
    if (newState === undefined) {
      throw new Error("New state must not be undefined");
    }

    if (typeof newState === "function") {
      states[stateOrder] = newState(states[stateOrder]);
    } else {
      states[stateOrder] = newState;
    }

    rerender();
  };

  currentStateOrder++;

  return [state, updater];
};
const rerender = debounce(() => {
  currentStateOrder = 0;
  currentEffectOrder = 0;
  rootContainer.innerHTML = rootComponent();

  effects.forEach((effect) => {
    // shouldRunEffect = true khi không truyền deps hoặc deps khác nhau
    const shouldRunEffect =
      !effect.nextDeps ||
      effect.nextDeps?.some((dep, i) => {
        return dep !== effect?.prevDeps?.[i];
      });

    if (shouldRunEffect) {
      effect.cb();
    }
  });
});
const useEffect = (cb, deps) => {
  let effectOrder = currentEffectOrder;

  if (!effects[effectOrder]) {
    effects.push({
      cb: cb,
      prevDeps: null,
      nextDeps: deps,
    });
  } else {
    effects[effectOrder] = {
      cb: cb,
      prevDeps: effects[effectOrder].nextDeps,
      nextDeps: deps,
    };
  }

  currentEffectOrder++;
};

router.on("/*", () => { }, {
  before(done, match) {
    states = [];
    currentStateOrder = 0;
    effects = [];
    currentEffectOrder = 0;

    done();
  },
});
const iconLog=`<div class="flex space-x-1 iconLog">
  <img class="w-6" src="../image/enter.png"/>
  <p class="text-sm ">Sign-in / Sign-up</p>
</div>`
const checkState=JSON.parse(localStorage.getItem("checkState"));
const menu=[];
const menu1 = [
  { name: "Home", path: "##/home" },
  { name: "Portfolio", path: "##/porfolio" },
  { name: "Contact", path: "##/contact" }, 
  { name: "Projects", path: "/category" }, 
  { name: "Admin", path: "/admin" }
];
const menu2 = [
  { name: "Home", path: "##/home" },
  { name: "Portfolio", path: "##/porfolio" },
  { name: "Contact", path: "##/contact" }, 
  { name: "Projects", path: "/category" }, 
  { name: `${iconLog}`, path: "/sign-in-up" }, 
];
if(checkState?.role==true){
  menu1.map((get)=>{
    menu.push(get);
  });
}else{
  menu2.map((get)=>{
    menu.push(get);
  });
}
// flex justify-between
const Header = () => {
  return `
    <div class="fixed z-10 w-full grid grid-cols-5 bg_menu">
        <div class="ml-10 col-span-3">
            <h1 class="text-6xl font-bold shell_brand"><a href="#" class="hover:text-gray-700">𝓥.𝓥</a></h1>
        </div>
        <div class="flex space-x-10 col-span-2 text-lg mr-10 ">
            ${menu.map(get => `<a class="hover:scale-105 hover:text-white my-auto" href="${get.path}">${get.name}</a>`).join("")}
        </div>
    </div><br><br><br>
    <div class=""></div>
  `;
}
export { router, render, useState, useEffect, Header };

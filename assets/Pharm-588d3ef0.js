import{j as e,P as s,u as b,r as h,R as k}from"./index-51b224b3.js";import{a as S,k as C,f as L,Q as M}from"./ReactToastify-68578927.js";import{L as $}from"./Loader-68c7d69c.js";const T=async t=>{try{const{data:i}=await S.get(`/pharm/${t}`);return i.data.pharm}catch(i){console.log(i)}},v="_info_wrapper_1pkj5_1",A="_info_image_1pkj5_6",B={info_wrapper:v,info_image:A},D=()=>e.jsx("div",{className:B.info_wrapper,children:e.jsx("img",{src:"https://i.postimg.cc/4xjNmdXg/16697949609968.png",alt:"apologies"})}),E="_shopItem_kf758_2",O="_selected_kf758_30",F="_disabled_kf758_35",J="_shopTitle_kf758_40",H="_shopAddress_kf758_46",q={shopItem:E,selected:O,disabled:F,shopTitle:J,shopAddress:H},P=({id:t,name:i,address:o,location:r,selectedPharmId:d,handleClick:c})=>{const{setShopLocation:n}=b(),l=()=>{c(t),n(r)};return e.jsxs("li",{className:`${q.shopItem} ${t===d?q.selected:""}`,onClick:l,children:[e.jsx("p",{className:q.shopTitle,children:i}),e.jsx("p",{className:q.shopAddress,children:o})]},t)};P.propTypes={id:s.string.isRequired,name:s.string.isRequired,address:s.string.isRequired,location:s.object,handleClick:s.func.isRequired,selectedPharmId:s.string};const Q="_shopList_1mpy0_2",U={shopList:Q},N=({pharms:t,handleClick:i,selectedPharmId:o})=>e.jsx(e.Fragment,{children:e.jsx("ul",{className:U.shopList,children:t.map(({_id:r,name:d,address:c,position:n})=>e.jsx(P,{id:r,name:d,address:c,selectedPharmId:o,handleClick:i,location:n},r))})});N.propTypes={pharms:s.arrayOf(s.shape({_id:s.string.isRequired,name:s.string.isRequired,address:s.string.isRequired,medicate:s.array.isRequired})).isRequired,handleClick:s.func.isRequired,selectedPharmId:s.string,isDisabled:s.bool};const X="_card_1glhq_1",z="_image_wrapper_1glhq_6",G="_image_1glhq_6",K="_title_1glhq_21",V="_price_1glhq_27",W="_addButton_1glhq_34",Y="_disabled_1glhq_49",g={card:X,image_wrapper:z,image:G,title:K,price:V,addButton:W,disabled:Y},I=({title:t,id:i,imageUrl:o,price:r,pharmId:d,selectedPharmId:c,isDisabled:n})=>{const[l,p]=h.useState(!1),{setCartItemCount:_,shopLocation:j}=b();h.useEffect(()=>{const f=(JSON.parse(localStorage.getItem("medicates"))||[]).findIndex(m=>m.id===i&&m.pharmId===c);p(f!==-1)},[i,c]);const u=()=>{const a=JSON.parse(localStorage.getItem("medicates"))||[],f=a.findIndex(m=>m.id===i&&m.pharmId===c);if(f!==-1)a.splice(f,1),p(!1),_(m=>m-1);else{const m={id:i,title:t,imageUrl:o,price:r,pharmId:c,isAdded:!0,quantity:1,location:{position:j}};a.push(m),p(!0),_(w=>w+1)}localStorage.setItem("medicates",JSON.stringify(a))};return e.jsxs("div",{className:g.card,children:[e.jsx("div",{className:g.image_wrapper,children:e.jsx("img",{className:g.image,width:200,height:80,src:o,alt:"medicate"})}),e.jsxs("div",{children:[e.jsx("p",{className:g.title,children:t}),e.jsxs("p",{className:g.price,children:["Price: ",r,"$"]})]}),e.jsx("button",{className:`${g.addButton} ${n?g.disabled:""}`,type:"button",onClick:u,disabled:n||d!==c,children:l?"Remove":"Add"})]},i)};I.propTypes={id:s.string.isRequired,title:s.string.isRequired,imageUrl:s.string.isRequired,pharmId:s.string.isRequired,price:s.number.isRequired,selectedPharmId:s.string,isDisabled:s.bool};const Z="_container_1t002_1",ee="_sort_container_1t002_9",se="_sort_button_1t002_17",te="_dishes_list_1t002_35",ie="_dishes_item_1t002_50",x={container:Z,sort_container:ee,sort_button:se,dishes_list:te,dishes_item:ie},R=({medicates:t,selectedPharmId:i,isDisabled:o})=>{const[r,d]=h.useState([]);h.useEffect(()=>{d([...t])},[t]);const c=()=>{const l=[...r].sort((p,_)=>p.price-_.price);d(l)},n=()=>{const l=[...r].sort((p,_)=>_.price-p.price);d(l)};return e.jsxs("div",{className:x.container,children:[e.jsxs("div",{className:x.sort_container,children:[e.jsx("button",{className:x.sort_button,onClick:c,children:"Low price"}),e.jsx("button",{className:x.sort_button,onClick:n,children:"High price"})]}),e.jsx("ul",{className:x.dishes_list,children:r.map(({title:l,_id:p,id:_,imageUrl:j,price:u,pharmId:a})=>e.jsx("li",{className:x.dishes_item,children:e.jsx(I,{title:l,id:_,imageUrl:j,price:u,pharmId:a,selectedPharmId:i,isDisabled:o})},p))})]})};R.propTypes={medicates:s.arrayOf(s.shape({_id:s.string.isRequired,title:s.string.isRequired,imageUrl:s.string.isRequired,price:s.number.isRequired})).isRequired,selectedPharmId:s.string,isDisabled:s.bool};const ae=(t,i)=>t.map(o=>({...o,pharmId:i})),re="_page_container_ylfe2_1",ne="_content_wrapper_ylfe2_7",oe="_shopPage_title_ylfe2_12",y={page_container:re,content_wrapper:ne,shopPage_title:oe},ce=k.memo(()=>{const[t,i]=h.useState(null),[o,r]=h.useState(!1),[d,c]=h.useState(null),[n,l]=h.useState(null),[p,_]=h.useState(!1);h.useEffect(()=>{r(!0),(async()=>{try{const{data:a}=await L();if(i(a),a&&a.result.length>0){const f=a.result[0]._id;l(f)}}catch{M.error("Oops, something went wrong! Please try again later",{position:"top-right",autoClose:2e3})}finally{r(!1)}})()},[]),h.useEffect(()=>{(async()=>{if(n)try{const a=await T(n);c(ae(a.medicate,n)),_(!1)}catch(a){console.log(a.message),r(!1)}})()},[n]);const j=u=>{l(u)};return e.jsxs("main",{className:y.page_container,children:[o?e.jsx($,{}):e.jsxs(e.Fragment,{children:[!t&&e.jsx(D,{}),t&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:y.shopPage_title,children:"Please select what you would like to order"}),e.jsxs("div",{className:y.content_wrapper,children:[e.jsx(N,{pharms:t.result,handleClick:j,selectedPharmId:n}),d&&e.jsx(R,{medicates:d,selectedPharmId:n,isDisabled:p})]})]})]}),e.jsx(C,{})]})});ce.displayName="PharmPage";export{ce as PharmPage,ce as default};

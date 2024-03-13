import{P as m,r as u,j as e}from"./index-51b224b3.js";import{a as g,Q as d,k as w}from"./ReactToastify-68578927.js";import{L as b}from"./Loader-68c7d69c.js";const N=async r=>{try{const{data:t}=await g.get(`/orders?query=${r}`);return t.message==="Not Found"?[]:t.data.result}catch(t){console.log(t.message)}},q=(r,t)=>{if(r==="phone"){if(!t.match(/^380\d{9}$/))return!1}else if(!t.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))return!1;return!0},P="_form_wrapper_134pu_1",v="_form_134pu_1",H="_label_134pu_30",F="_select_134pu_34",T="_input_part_134pu_42",$="_input_134pu_42",C="_submit_button_134pu_67",o={form_wrapper:P,form:v,label:H,select:F,input_part:T,input:$,submit_button:C},x=({onSubmit:r})=>{const[t,i]=u.useState("phone"),a=u.useRef(null),l=s=>{i(s.target.value)},p=s=>{s.preventDefault();const c=a.current.value,h=q(t,c);if(!h){d.warn("Check that the data entered is correct");return}if(h){if(c===""){d.info("Please enter info for searching");return}r(c)}};return e.jsx("div",{className:o.form_wrapper,children:e.jsxs("form",{className:o.form,children:[e.jsx("label",{className:o.label,htmlFor:"contact-type",children:e.jsx("span",{className:o.input_part,children:"Select a search method"})}),e.jsxs("select",{className:o.select,id:"contact-type",value:t,onChange:l,children:[e.jsx("option",{value:"phone",children:"Phone"}),e.jsx("option",{value:"email",children:"Email"})]}),e.jsx("label",{className:o.label,htmlFor:"contact-input",children:e.jsx("span",{className:o.input_part,children:"Enter contact information"})}),e.jsx("input",{className:o.input,type:t==="phone"?"tel":"email",id:"contact-input",ref:a,placeholder:t==="phone"?"380501111111":"example@mail.com"}),e.jsx("button",{className:o.submit_button,type:"submit",onClick:s=>p(s),children:"Order history"})]})})};x.propTypes={onSubmit:m.func.isRequired};const S="_card_1eb6o_1",k="_card_item_1eb6o_8",R="_totalPrice_wrapper_1eb6o_14",O="_image_wrapper_1eb6o_38",L="_image_1eb6o_38",E="_title_1eb6o_53",V="_price_1eb6o_59",z="_quantity_1eb6o_65",D="_total_1eb6o_14",n={card:S,card_item:k,totalPrice_wrapper:R,image_wrapper:O,image:L,title:E,price:V,quantity:z,total:D},f=({list:r,totalPrice:t})=>e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:n.card,children:r.map(({title:i,price:a,imageUrl:l,quantity:p,_id:s})=>e.jsxs("li",{className:n.card_item,children:[e.jsx("div",{className:n.image_wrapper,children:e.jsx("img",{src:l,width:60,className:n.image})}),e.jsx("p",{className:n.title,children:i}),e.jsxs("p",{className:n.quantity,children:["count:",p]}),e.jsxs("p",{className:n.price,children:["price:",a,"$"]})]},s))}),e.jsx("div",{className:n.totalPrice_wrapper,children:e.jsxs("p",{className:n.total,children:["Total Price: ",t,"$"]})})]});f.propTypes={list:m.array.isRequired,totalPrice:m.string.isRequired};const I="_history_list_zp7e3_1",Q="_history_item_zp7e3_15",y={history_list:I,history_item:Q},j=({orders:r})=>e.jsx("ul",{className:y.history_list,children:r.map(({list:t,totalPrice:i,_id:a})=>e.jsx("li",{className:y.history_item,children:e.jsx(f,{list:t,totalPrice:i})},a))});j.propTypes={orders:m.array.isRequired};const A="_page_container_ktfuq_1",B="_content_wrapper_ktfuq_7",G="_order_wrapper_ktfuq_11",J="_title_ktfuq_17",_={page_container:A,content_wrapper:B,order_wrapper:G,title:J},K=()=>{const[r,t]=u.useState(null),[i,a]=u.useState(!1),l=async s=>{try{a(!0);const c=await N(s);t(c?c.cart:[])}catch{d.error("Oops, something went wrong! Please try again")}finally{a(!1)}},p=s=>{l(s)};return e.jsx(e.Fragment,{children:e.jsxs("main",{className:_.page_container,children:[e.jsx(e.Fragment,{children:e.jsxs("div",{className:_.content_wrapper,children:[e.jsx(x,{onSubmit:p}),e.jsx("div",{className:_.order_wrapper,children:i?e.jsx(b,{}):e.jsx(e.Fragment,{children:r===null?e.jsx("p",{className:_.title,children:"To view your order history, enter your data"}):r.length===0?e.jsx("p",{className:_.title,children:"No order history found."}):e.jsx(j,{orders:r})})})]})}),e.jsx(w,{autoClose:2e3})]})})};K.displayName="HistoryPage";export{K as default};

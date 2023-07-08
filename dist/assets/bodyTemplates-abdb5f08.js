import{j as e,h as n,_ as h}from"./dashboardData-ea213be3.js";const g=s=>{const i=s.items.map(({id:c,portrait:a,details:t,duration:x})=>e.jsxs("div",{className:"singleCustomer flex",children:[e.jsx("img",{src:a.src,alt:a.alt}),e.jsxs("div",{className:"customerDetails",children:[e.jsx("span",{className:"name",children:t.name}),e.jsx("small",{children:t.status})]}),e.jsx("p",{className:"duration",children:x})]},c));return e.jsx("div",{className:"secContainer grid",children:i})},N=s=>e.jsxs("div",{className:"heading flex",children:[e.jsx("h1",{children:s.title.text}),e.jsxs("button",{className:"btn flex",children:[s.action.text," ",s.action.icon]})]}),f=s=>{const i=s.items.map(({id:c,icon:a,img:t,title:x})=>e.jsxs("div",{className:"singleItem flex",children:[a,e.jsx("img",{src:t.src,alt:t.alt}),e.jsx("h3",{children:x})]},c));return e.jsx("div",{className:"secContainer flex",children:i})},j=s=>e.jsxs("div",{className:`${s.type} flex`,children:[e.jsxs("div",{className:"heading flex",children:[e.jsx("h3",{children:s.heading.title.text}),e.jsxs("button",{className:"btn flex",children:[s.heading.action.text," ",s.heading.action.icon]})]}),e.jsxs("div",{className:"card flex",children:[e.jsx("div",{className:"users",children:s.card.users.map(i=>e.jsx("img",{src:i.src,alt:i.alt},i.id))}),e.jsxs("div",{className:"cardText",children:[e.jsxs("span",{children:[s.card.text.results.quantity," ",s.card.text.results.product,s.card.text.results.action]}),e.jsx("br",{}),e.jsxs("small",{children:[s.card.text.sellers.quantity," ",s.card.text.sellers.role,e.jsxs("span",{className:"date",children:[s.card.text.sellers.date.digit,s.card.text.sellers.date.type]})]})]})]})]},s.id),I=s=>{const i=s.listItems.map(({id:c,icon:a,description:t})=>e.jsx("li",{className:"listItem",children:e.jsxs("a",{href:"",className:"menuLink flex",children:[a,e.jsx("span",{className:"smallText",children:t})]})},c));return e.jsxs("div",{className:s.type,children:[e.jsx("h3",{className:"divTitle",children:s.title}),e.jsx("ul",{className:"menuLists grid",children:i})]})},y=s=>e.jsxs("div",{className:"sideBarCard",children:[s.icon,e.jsxs("div",{className:"cardContent",children:[e.jsx("div",{className:"circle1"}),e.jsx("div",{className:"circle2"}),e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.description}),e.jsx("button",{className:"btn",children:s.btnText})]})]}),_=s=>e.jsxs("div",{className:"headerSection flex",children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:s.title.heading}),e.jsx("p",{children:s.title.description})]}),e.jsxs("div",{className:"searchBar flex",children:[e.jsx("input",{type:s.searchBar.type,name:s.searchBar.name,id:s.searchBar.id,placeholder:"Search Dashboard"}),s.searchBar.icon]}),e.jsxs("div",{className:"adminDiv flex",children:[s.adminDiv.icons.map(i=>i),e.jsx("div",{className:"adminImage",children:e.jsx("img",{src:s.adminDiv.img.src,alt:s.adminDiv.img.alt})})]})]}),b=s=>e.jsxs("div",{className:"leftCard flex",children:[e.jsx("h1",{children:s.title}),e.jsx("p",{children:s.description}),e.jsxs("div",{className:"buttons flex",children:[e.jsx("button",{className:"btn",children:s.actions.action1}),e.jsx("button",{className:"btn transparent",children:s.actions.action2})]}),e.jsx("div",{className:"videoDiv",children:e.jsx("video",{src:s.video.src,poster:s.video.poster,autoPlay:!0,loop:!0,muted:!0})})]}),C=s=>e.jsxs("div",{className:"rightCard flex",children:[e.jsxs("div",{className:"main flex",children:[e.jsxs("div",{className:"textDiv",children:[e.jsx("h1",{children:s.text.heading}),e.jsx("div",{className:"flex",children:s.text.stats.map(({id:i,type:c,date:a,quantity:t})=>e.jsxs("span",{children:[a," ",e.jsx("br",{}),e.jsxs("small",{children:[t," ",c]})]},i))}),e.jsxs("span",{className:"flex link",children:[s.text.link.action," ",s.text.link.icon]})]}),e.jsx("div",{className:"imageDiv",children:e.jsx("img",{src:s.image.src,alt:s.image.alt})})]}),e.jsx(y,{icon:n.icon,title:n.title,description:n.description,btnText:n.btnText})]});const{adminBar:m,rightCard:o,leftCard:l}=await h(()=>import("./dashboardData-ea213be3.js").then(s=>s.i),["assets/dashboardData-ea213be3.js","assets/reactIcons-c203e6d7.js"]),D=()=>e.jsxs("div",{className:"topSection",children:[e.jsx(_,{title:m.title,searchBar:m.searchBar,adminDiv:m.adminDiv}),e.jsxs("div",{className:"cardSection flex",children:[e.jsx(b,{title:l.title,description:l.description,actions:l.actions,video:l.video}),e.jsx(C,{text:o.text,image:o.image})]})]}),$=D;const{listingsHeading:v,listingCards:T,topSellers:d,featuredSellers:r}=await h(()=>import("./dashboardData-ea213be3.js").then(s=>s.i),["assets/dashboardData-ea213be3.js","assets/reactIcons-c203e6d7.js"]),L=()=>e.jsxs("div",{className:"listingSection",children:[e.jsx(N,{title:v.title,action:v.action}),e.jsx(f,{items:T}),e.jsxs("div",{className:"sellers flex",children:[e.jsx(j,{id:d.id,type:d.type,heading:d.heading,card:d.card}),e.jsx(j,{id:r.id,type:r.type,heading:r.heading,card:r.card})]})]}),E=L;const{activityCards:B,activityHeading:u}=await h(()=>import("./dashboardData-ea213be3.js").then(s=>s.i),["assets/dashboardData-ea213be3.js","assets/reactIcons-c203e6d7.js"]),A=()=>e.jsxs("div",{className:"activitySection",children:[e.jsx(N,{title:u.title,action:u.action}),e.jsx(g,{items:B})]}),H=A;export{H as A,y as H,E as L,I as M,$ as T};

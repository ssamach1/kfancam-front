import{J as n,r as a,u as e,v as o,a3 as I,a4 as S,a5 as E,a6 as L,a7 as _,a8 as N,a9 as M,aa as z,ab as y,ac as B,ad as C,ae as W}from"./index-CE0RwpCS.js";const Y="/assets/STAYC_COMEBACK-B6Siy-vD.webp",T="/assets/NMIXX_COMEBACK-j1qbi_-L.jpg",F="/assets/LE_SSERAFIM_COMEBACK-BJUkIsVM.webp",P=n.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  z-index: -10;

  background-image: url(${t=>t.$backgroundImage||"black"});
  background-position: ${t=>t.$backgroundPosition||"center"};
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(${t=>t.$brightness||"100%"})
    blur(${t=>t.$blur});
`,O=n.div`
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  color: #fff;
  white-space: nowrap;

  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);

  @media (max-width: 930px) {
    left: 55%;
    top: 15%;
    transform: translate(-55%, -15%);

    display: grid;
    grid-template-rows: repeat(3, 100px);
    row-gap: 200px;
  }

  @media (max-width: 600px) {
    grid-template-rows: repeat(3, 100px);
    row-gap: 275px;
  }
`,h=n.div`
  position: relative;
  z-index: 1;

  color: ${t=>t.$color||"white"};
  border-bottom: ${t=>t.$borderBottom||"2px solid white"};
`,g=n.div`
  font-size: 3rem;
  font-weight: 550;
`,p=n.div`
  padding: 15px;
  width: 10rem;
  height: 4rem;
  display: grid;
  position: absolute;
  top: 0rem;

  &:hover {
    .child {
      transform: translateY(0);
      opacity: 1;
    }
     .linksActive {
      pointer-events: auto;
    }
  }

  &.startPageActive {
    .child {
      transform: translateY(0);
      opacity: 1;
    }
    .linksActive {
      pointer-events: auto;
    }
  }

  .child {
    position: relative;
    left: 0rem;
    top: 3rem;
    transform: translateY(-10px);
    opacity: 0;
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
    pointer-events: none;
    white-space: nowrap;

    @media (max-width: 930px) {
      left: -30%;
      top: ${t=>t.$top||"35%"};
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      align-items: stretch;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      left: ${t=>t.$left||"-15%"};
      top: 20%;
    }
`,$=n.div`
  display: grid;
  transition: max-height 500ms ease-in-out, opacity 500ms ease-in-out;

  @media (max-width: 930px) {
    a:nth-child(2) {
      border-top: 1px solid black;
    }
  }

  a:nth-child(1) {
    border-top: 1px solid black;
  }
`,i=n.div`
  position: relative;
  height: 100%;
  color: ${t=>t.$color||"black"};
  text-align: ${t=>t.$textAlign||"start"};
  padding: ${t=>t.$padding||"10px 15px"};
  font-size: ${t=>t.$fontSize||"1.8rem"};
  font-weight: ${t=>t.$fontWeight||600};
  white-space: nowrap;

  &::before {
    content: "";
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    background-image: url(${t=>t.$backgroundImage||"black"});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: brightness(${t=>t.$brightness||"100%"});
  }
  &:hover {
    color: cyan;
  }
`,X=()=>{const[t,m]=a.useState(!1),[f,b]=a.useState(!1),[k,x]=a.useState(!1),s=r=>{setTimeout(()=>{r==="first"&&m(!0),r==="second"&&b(!0),r==="third"&&x(!0)},300)},c=r=>{r==="first"&&m(!1),r==="second"&&b(!1),r==="third"&&x(!1)},u=[{img:Y,color:"white",brightness:"60%",backgroundPosition:"top",blur:"0.75px",borderBottom:"2px solid white"},{img:T,color:"white",brightness:"60%",backgroundPosition:"bottom",blur:"0.5px",borderBottom:"2px solid white"},{img:F,color:"white",brightness:"60%",backgroundPosition:"bottom",blur:"0px",borderBottom:"2px solid white"}],{img:A,color:l,brightness:v,backgroundPosition:w,blur:j,borderBottom:d}=a.useMemo(()=>u[Math.floor(Math.random()*u.length)],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(O,{children:[e.jsxs(h,{$color:l,$borderBottom:d,children:[e.jsx(g,{children:"2018-2020"}),e.jsx(p,{onMouseEnter:()=>s("first"),onClick:()=>{s("first")},onMouseLeave:()=>c("first"),$top:"20%",$left:"0%",children:e.jsxs($,{className:t?"linksActive child firstAccordion":"child firstAccordion",children:[e.jsx(o,{className:"link",to:"group/fromis_9",children:e.jsx(i,{$backgroundImage:I,$color:"white",$fontWeight:600,$textAlign:"start",$fontSize:"2rem",$brightness:"65%",$pointerEvents:"none",children:"fromis_9"})}),e.jsx(o,{className:"link",to:"group/gidle",children:e.jsx(i,{$backgroundImage:S,$color:"white",$fontWeight:600,$textAlign:"center",$fontSize:"1.8rem",$brightness:"80%",$pointerEvents:"none",children:"(G)I-DLE"})}),e.jsx(o,{className:"link",to:"group/itzy",children:e.jsx(i,{$backgroundImage:E,$color:"white",$fontWeight:600,$textAlign:"start",$fontSize:"2.2rem",$brightness:"80%",$pointerEvents:"none",children:"ITZY"})}),e.jsx(o,{className:"link",to:"group/stayc",children:e.jsx(i,{$backgroundImage:L,$color:"black",$fontWeight:650,$textAlign:"center",$fontSize:"2rem",$brightness:"100%",$pointerEvents:"none",children:"STAYC"})}),e.jsx(o,{className:"link",to:"group/aespa",children:e.jsx(i,{$backgroundImage:_,$color:"white",$fontWeight:600,$textAlign:"center",$fontSize:"2.5rem",$brightness:"90%",$pointerEvents:"none",children:"aespa"})})]})})]}),e.jsxs(h,{$color:l,$borderBottom:d,children:[e.jsx(g,{children:"2021-2022"}),e.jsx(p,{onMouseEnter:()=>s("second"),onClick:()=>{s("second")},onMouseLeave:()=>c("second"),children:e.jsxs($,{className:f?"linksActive secondAccordion child":"secondAccordion child",children:[e.jsx(o,{className:"link",to:"group/ive",children:e.jsx(i,{$backgroundImage:N,$color:"white",$textAlign:"center",$fontWeight:700,$fontSize:"1.8rem",$brightness:"85%",children:"IVE"})}),e.jsx(o,{className:"link",to:"group/nmixx",children:e.jsx(i,{$backgroundImage:M,$color:"white",$textAlign:"center",$fontWeight:700,$fontSize:"1.8rem",$brightness:"85%",children:"NMIXX"})}),e.jsx(o,{className:"link",to:"group/lesserafim",children:e.jsx(i,{$backgroundImage:z,$color:"black",$textAlign:"center",$fontWeight:700,$fontSize:"1.8rem",children:"LE SSERAFIM"})}),e.jsx(o,{className:"link",to:"group/newjeans",children:e.jsx(i,{$backgroundImage:y,$color:"white",$fontWeight:700,$textAlign:"center",$fontSize:"2rem",$brightness:"60%",children:"NewJeans"})})]})})]}),e.jsxs(h,{$color:l,$borderBottom:d,children:[e.jsx(g,{children:"2023-2024"}),e.jsx(p,{onMouseEnter:()=>s("third"),onClick:()=>{s("third")},onMouseLeave:()=>c("third"),children:e.jsxs($,{className:k?"linksActive thirdAccordion child":"thirdAccordion child",children:[e.jsx(o,{className:"link",to:"group/illit",children:e.jsx(i,{$backgroundImage:B,$color:"white",$textAlign:"center",$fontWeight:600,$fontSize:"2rem",$brightness:"80%",children:"ILLIT"})}),e.jsx(o,{className:"link",to:"group/kissoflife",children:e.jsx(i,{$backgroundImage:C,$color:"white",$fontWeight:600,$textAlign:"center",$brightness:"90%",children:"KISS OF LIFE"})}),e.jsx(o,{className:"link lastLink",to:"group/babymonster",children:e.jsx(i,{$backgroundImage:W,$color:"white",$fontWeight:600,$brightness:"90%",children:"BABYMONSTER"})})]})})]})]}),e.jsx(P,{$backgroundImage:A,$brightness:v,$backgroundPosition:w,$blur:j})]})};export{X as default};

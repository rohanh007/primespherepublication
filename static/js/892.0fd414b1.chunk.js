"use strict";(self.webpackChunkpsp=self.webpackChunkpsp||[]).push([[26,734,892],{734:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var a=t(555),l=t(43),r=t(265),i=t(184),c=t(722),n=t(579);const o=()=>{const[e,s]=(0,l.useState)({name:"",email:"",contact:"",message:""}),[t,o]=(0,l.useState)(!1),[d,x]=(0,l.useState)(""),[u,m]=(0,l.useState)(null),h=t=>{s((0,a.A)((0,a.A)({},e),{},{[t.target.name]:t.target.value}))};(0,l.useEffect)((()=>()=>{u&&clearTimeout(u)}),[u]);return(0,n.jsx)("div",{className:"h-auto md:h-[94vh] bg-contact relative top-10",children:(0,n.jsxs)("div",{className:"bg-red-500/55 flex flex-col md:flex-row justify-between h-fit md:h-[94vh] border",children:[(0,n.jsx)("div",{className:"w-full md:w-[50%] bg-white flex items-center justify-center p-2 custom:p-4",children:(0,n.jsxs)("form",{className:"w-full p-12",onSubmit:async s=>{s.preventDefault(),o(!0),x("");try{await c.A.post("https://backendpsp.onrender.com/api/sendmail",e);x("Thank you for your message. We will get back to you soon!");const s=setTimeout((()=>{x("")}),8e3);m(s)}catch(t){console.error("Error sending message:",t),x("Something went wrong. Please try again later.")}finally{o(!1)}},children:[(0,n.jsx)("h2",{className:"text-2xl font-bold font-serif text-black mb-4",children:"Contact Us"}),(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-black",children:"Name"}),(0,n.jsx)("input",{id:"name",type:"text",name:"name",value:e.name,onChange:h,placeholder:"Enter your name",className:"w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"})]}),(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{htmlFor:"telephone",className:"block text-sm font-medium text-black",children:"Phone"}),(0,n.jsx)("input",{id:"telephone",type:"tel",name:"contact",value:e.contact,onChange:h,placeholder:"Enter your phone number",className:"w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"})]}),(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-black",children:"Email"}),(0,n.jsx)("input",{id:"email",type:"email",name:"email",value:e.email,onChange:h,placeholder:"Enter your email",className:"w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"})]}),(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-black",children:"Message"}),(0,n.jsx)("textarea",{id:"message",rows:"4",name:"message",value:e.message,onChange:h,placeholder:"Enter your message",className:"w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"})]}),(0,n.jsx)("button",{type:"submit",className:"w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition",disabled:t,children:t?"Sending...":"Send Message"}),d&&(0,n.jsx)("p",{className:"mt-4 text-center text-sm pb-2 text-red-500 text-lg",children:d})]})}),(0,n.jsxs)("div",{className:"w-full md:w-[50%] flex flex-col items-center justify-center gap-4 md:gap-6 px-12 py-8 backdrop-blur-sm rounded-lg shadow-lg",children:[(0,n.jsxs)("div",{className:"text-center space-y-6",children:[(0,n.jsx)("h2",{className:"text-3xl custom:text-4xl text-white font-serif font-extrabold tracking-wide",children:"Prime Sphere"}),(0,n.jsxs)("p",{className:"text-gray-200 text-base custom:text-lg text-left leading-relaxed font-sans",children:["At Prime Sphere, we are committed to delivering the best support and services to our clients. We offer quick responses, solutions, and expertise to ensure your satisfaction. Our team is always here to help with any questions or concerns you may have.",(0,n.jsx)("br",{}),"Feel free to reach out to us anytime ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\u2014 we look forward to hearing from you!"]})]}),(0,n.jsxs)("div",{className:"space-y-3 custom:space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-start space-x-2 custom:space-x-4",children:[(0,n.jsx)(i.Cab,{className:"text-2xl text-white"}),(0,n.jsx)(r.N_,{to:"#",onClick:()=>{window.location.href="tel:+918275592369"},className:"text-white hover:text-gray-200 hover:underline text-base custom:text-lg font-sans",children:"+91 8275592369"})]}),(0,n.jsxs)("div",{className:"flex items-center justify-start space-x-2 custom:space-x-4",children:[(0,n.jsx)(i.maD,{className:"text-2xl text-white"}),(0,n.jsx)(r.N_,{to:"#",onClick:()=>{window.location.href="mailto:primespherepublication@gmail.com"},className:"text-white hover:text-gray-200 hover:underline text-base custom:text-lg font-sans",children:"primespherepublication@gmail.com"})]})]})]})]})})}},26:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var a=t(722),l=t(43),r=t(265),i=t(579);const c=()=>{const[e,s]=(0,l.useState)(""),[t,c]=(0,l.useState)("");return(0,i.jsxs)("footer",{class:"flex flex-col items-center justify-center text-center text-surface dark:bg-neutral-700 dark:text-white border-t-2 mt-12 shadow-lg relative",children:[(0,i.jsxs)("div",{class:"container flex flex-col md:flex-row items-center justify-between px-8 custom:px-24 py-6",children:[(0,i.jsx)("div",{class:"mb-0 flex flex-row justify-center space-x-2"}),(0,i.jsxs)("div",{className:"flex flex-col items-center w-full md:w-auto",children:[(0,i.jsx)("h3",{className:"text-base custom:text-lg font-semibold mb-2",children:"Subscribe to our Newsletter"}),(0,i.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),setTimeout((()=>{c("")}),8e3),c("");try{await a.A.post("https://backendpsp.onrender.com/api/newsletter",{email:e});c("Subscription successful! Thank you for subscribing."),s("")}catch(l){console.error(l),c("Failed to subscribe. Please try again later.")}},className:"flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2",children:[(0,i.jsx)("input",{type:"email",value:e,onChange:e=>s(e.target.value),placeholder:"Enter your email",required:!0,className:"p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"}),(0,i.jsx)("button",{type:"submit",className:"bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600",children:"Subscribe"})]}),t&&(0,i.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t})]})]}),(0,i.jsxs)("div",{class:"w-full bg-gray-500/10 p-4 text-center",children:["\xa9 2025 Copyright:",(0,i.jsx)(r.N_,{class:"font-semibold",href:"/",children:"Prime Sphere Publication"})]})]})}},892:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var a=t(265),l=(t(242),t(43)),r=t(579);const i=()=>{const[e,s]=(0,l.useState)(0),t=["/primespherepublication/Slider/slider_1.webp","/primespherepublication/Slider/slide_2.webp","/primespherepublication/Slider/slide_3.webp"];(0,l.useEffect)((()=>{const e=setTimeout((()=>{a()}),3e3);return()=>clearTimeout(e)}),[e]);const a=()=>{s((e=>e===t.length-1?0:e+1))};return(0,r.jsxs)("div",{className:"relative w-full ",children:[(0,r.jsx)("div",{className:"relative h-screen overflow-hidden",children:t.map(((s,t)=>(0,r.jsxs)("div",{className:"absolute inset-0 transition-opacity duration-700 ease-in-out ".concat(e===t?"opacity-100":"opacity-0"),children:[console.log(s),(0,r.jsx)("img",{src:s,alt:"Slide ".concat(t+1),className:"block w-full h-full object-cover blur-[4px] brightness-50"})]},t)))}),(0,r.jsx)("div",{className:"absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3",children:t.map(((t,a)=>(0,r.jsx)("button",{onClick:()=>(e=>{s(e)})(a),className:"w-3 h-3 rounded-full ".concat(e===a?"bg-white":"bg-gray-400"),"aria-label":"Slide ".concat(a+1)},a)))})]})},c=()=>(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row gap-9 w-full h-auto lg:h-[70vh] items-center  relative  px-10  custom:px-20  custom:mt-0 py-16",children:[(0,r.jsxs)("div",{className:"w-full lg:w-1/2  custom:px-2 flex flex-col justify-center gap-3",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-red-500 px-5 ",children:"About us"}),(0,r.jsx)("div",{className:"py-2 border-l-8 border-l-red-600 pl-4",children:(0,r.jsx)("h1",{className:"text-xl md:text-2xl lg:text-4xl font-bold tracking-wide font-serif",children:"Accelerate your article Publication with Us"})}),(0,r.jsx)("p",{className:"text-wrap text-sm font-sans tracking-wide",children:"PrimeSphere Publication is a highly trusted provider of publication and consultation services, specializing in helping scholarly articles get published in prestigious research databases such as SCOPUS, Web of Science, PubMed, and Google Scholar. We streamline the publication process and enhance the quality of articles to meet the standards of high-indexing journals."}),(0,r.jsx)(a.N_,{to:"/aboutus",className:"border border-red-500 rounded-lg bg-red-500 text-white max-w-[150px] text-center py-[4px] font-semibold my-2 font-sans",children:"Know More"})]}),(0,r.jsx)("div",{className:"w-full lg:w-1/2 flex flex-col items-center ",children:(0,r.jsx)("img",{className:"custom:max-w-[450px] max-h-96 ",src:"/primespherepublication/Home/aboutpreviewsmall.webp",alt:"prime sphere ",loading:"lazy"})})]}),n=e=>{let{data:s}=e;console.log(s);const{serviceIcon:t,serviceTitle:a,serviceDescription:l,additionalInfo:i}=s;return(0,r.jsxs)("div",{className:"max-w-full lg:h-[60vh] flex flex-col gap-3 px-6 lg:px-4 py-6 rounded-br-[60px] bg-gray-100",children:[(0,r.jsx)("div",{className:"max-w-[80px] h-[80px] bg-red-300 flex justify-center items-center rounded-xl",children:(0,r.jsx)("img",{alt:a,src:t,className:"max-w-[70px] max-h-[50px]"})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("h1",{className:"font-bold text-xl custom:text-2xl font-serif  tracking-wide",children:a}),(0,r.jsx)("p",{className:"text-wrap py-1 font-sans",children:l}),(0,r.jsx)("ul",{className:"list-disc pl-5",children:i.features.map(((e,s)=>(0,r.jsx)("li",{className:"font-sans",children:e},s)))})]})]})},o=()=>(0,r.jsx)("div",{className:"w-full h-auto ",children:(0,r.jsxs)("div",{className:"flex flex-col gap-9 w-full h-auto relative px-10 custom:px-20 py-14 ",children:[(0,r.jsx)("h1",{className:"text-xl font-bold text-red-500 px-5",children:"Our Services"}),(0,r.jsxs)("div",{className:"w-full flex flex-col md:flex-row gap-5 md:px-5",children:[(0,r.jsxs)("div",{className:"w-[100%] md:w-[70%] flex flex-col gap-3",children:[(0,r.jsx)("div",{className:"py-2 border-l-8 border-l-red-600 pl-4",children:(0,r.jsx)("h1",{className:"text-xl custom:text-4xl font-bold font-serif tracking-wide",children:"What We Provide"})}),(0,r.jsx)("p",{className:"text-wrap text-sm font-sans tracking-wide",children:"Primesphere is a trusted provider of publication and consultation services, specializing in helping scholars publish their articles in leading research database journals, including SCOPUS, Web of Science, and PubMed."})]}),(0,r.jsx)("div",{className:"w-full md:w-[30%] flex justify-start md:justify-end items-center md:px-2",children:(0,r.jsx)(a.N_,{to:"/services",className:"border border-red-500 rounded-lg bg-red-500 text-white max-w-[150px] text-center px-2 py-1 font-semibold ",children:"Know More"})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"max-w-full flex flex-col lg:flex-row gap-10 lg:gap-5 py-8",children:[{serviceIcon:"/primespherepublication/Services/guidance.png",serviceTitle:"Research Guidance",serviceDescription:"We have a panel of experts who will analyze your article and compare it with those in our peer-reviewed journals to provide end-to-end research consultation services for scholarly research articles and get them published in world-renowned research database journals",additionalInfo:{features:["Our Peers will  review your article","Assist with your research article to publish in renowned Journals "]}},{serviceIcon:"/primespherepublication/Services/information.png",serviceTitle:"Research Publication",serviceDescription:"Green-publication offers research article publication service to our authors and allows them to publish their research in journals available in well-established databases.",additionalInfo:{features:["Accurate information on the research paper","High-quality & high-impact journal guaranteed","Publication in the target journal"]}},{serviceIcon:"/primespherepublication/Services/speech.png",serviceTitle:"Conference",serviceDescription:"Authors are welcome to discover and register for Green Publications events, including virtual and hybrid conference proceedings, to discuss the article\u2019s loopholes and quality-related issues.",additionalInfo:{features:["Scholarly authors can discover and register for free.","Queries and concerns can be addressed virtually through hybrid conference proceedings."]}}].map(((e,s)=>(0,r.jsx)("div",{className:"w-full lg:w-[33%] ",children:(0,r.jsx)(n,{data:e})})))})})]})});var d=t(734);t(26);const x=()=>(0,r.jsxs)("div",{className:"w-full h-auto relative scrollbar-hide",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-3 w-[80%] sm:w-[50%] absolute z-20 custom:top-[6%] top-[3%] lg:top-[12%]  left-[7%]",children:[(0,r.jsx)("div",{className:"border-l-8 border-l-red-500 pl-5 py-3",children:(0,r.jsx)("h1",{className:"text-2xl custom:text-4xl font-bold font-serif text-white",children:"Prime Sphere Publication Services"})}),(0,r.jsx)("p",{className:"text-white text-base font-sans custom:text-lg tracking-wide",children:"Prime Sphere Publication specializes in publishing articles in scholarly journals and conference proceedings. Their goal is to publish high-quality articles that make significant contributions to their respective fields."}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(a.N_,{to:"/contactus",className:"border  border-white max-w-[200px] py-3 flex justify-center mt-3 text-white font-semibold font-sans",children:"Contact Us"})})]}),(0,r.jsx)("div",{className:"w-full h-screen relative z-10",children:(0,r.jsx)(i,{})}),(0,r.jsx)(c,{}),(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:"w-full pb-10 md:px-16",children:(0,r.jsx)(d.default,{})})]})}}]);
//# sourceMappingURL=892.0fd414b1.chunk.js.map
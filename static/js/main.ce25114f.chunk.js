(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{39:function(t,e,a){},66:function(t,e,a){},92:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),r=a(9),c=a.n(r),n=(a(66),a(30)),o=a(40),l=a.n(o),d=(a(39),a(52)),j=a(128),u=a(141),O=a(6),b=Object(j.a)((function(t){return{root:{"& > *":{margin:t.spacing(1),width:"25ch"}}}}));function h(t){var e=t.artistData,a=t.setArtistData,i=b(),s=Object(d.a)(e);return Object(O.jsx)("form",{className:i.root,noValidate:!0,autoComplete:"off",children:Object(O.jsx)(u.a,{id:"standard-basic",label:"Search Artist",type:"search",onChange:function(t){if(t.target.value){var e=s.filter((function(e){if(e.name.includes(t.target.value))return e}));a(e)}else a(s);console.log(s)}})})}var p=a(132),f=a(133),m=a(137),C=a(135),S=a(134),x=a(138),A=a(136),v=Object(j.a)({root:{width:345},media:{height:140}}),g=function(t){t.selectedArtist;var e=t.setSelectedArtist,a=(t.artistId,t.setArtistId),i=t.artistData,s=v();return Object(O.jsx)("div",{className:"artist-list",children:i.map((function(t,i){return Object(O.jsxs)(p.a,{className:s.root,children:[Object(O.jsxs)(f.a,{children:[Object(O.jsx)(S.a,{className:s.media,image:t.images[0].url,title:"Contemplative Reptile"}),Object(O.jsxs)(C.a,{children:[Object(O.jsx)(A.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(O.jsx)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:t.genres.map((function(t){return t+", "}))})]})]}),Object(O.jsx)(m.a,{children:Object(O.jsx)(x.a,{size:"small",color:"primary",onClick:function(){a(t.id),e(t)},children:"Profile"})})]},i)}))})},E=Object(j.a)({root:{maxWidth:345},media:{height:140}}),I=function(t){var e=t.selectedArtist,a=t.setSelectedArtist,i=t.artistId,s=t.setArtistId,r=t.artistData,c=t.setArtistData;E();return console.log(r),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"flex",children:[Object(O.jsx)("h1",{children:"Artists"}),Object(O.jsx)(h,{artistData:r,setArtistData:c})]}),Object(O.jsx)(g,{selectedArtist:e,setSelectedArtist:a,artistId:i,setArtistId:s,artistData:r})]})},T=a(139),D=a(140),_=Object(j.a)((function(t){return{root:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:t.palette.background.paper,margin:"auto",width:"80vw"},button:{marginTop:30,width:100}}}));function w(t){var e=t.selectedArtist,a=t.setArtistId;console.log(e.images.url);var i=_();return Object(O.jsxs)("div",{className:i.root,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:e.name}),Object(O.jsxs)("h4",{children:[e.followers.total," Followers"]})]}),Object(O.jsx)(T.a,{rowHeight:160,className:i.imageList,cols:3,children:e.images.map((function(t){return Object(O.jsx)(D.a,{cols:t.cols||1,children:Object(O.jsx)("img",{src:t.url,alt:e.name})},1)}))}),Object(O.jsx)(x.a,{className:i.button,variant:"outlined",color:"primary",size:"small",onClick:function(){a(void 0)},children:"Back"})]})}var N=function(){var t={ClientId:Object({NODE_ENV:"production",PUBLIC_URL:"/spotify",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CLIENT_ID,ClientSecret:Object({NODE_ENV:"production",PUBLIC_URL:"/spotify",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CLIENT_SECRET},e=Object(i.useState)(),a=Object(n.a)(e,2),s=a[0],r=a[1],c=Object(i.useState)(),o=Object(n.a)(c,2),d=o[0],j=o[1],u=Object(i.useState)([]),b=Object(n.a)(u,2),h=b[0],p=b[1],f=Object(i.useState)(""),m=Object(n.a)(f,2),C=(m[0],m[1]);return Object(i.useEffect)((function(){l()("https://accounts.spotify.com/api/token",{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(t.ClientId+":"+t.ClientSecret)},data:"grant_type=client_credentials",method:"POST"}).then((function(t){C(t.data.access_token),l()("https://api.spotify.com/v1/artists?ids=4XquDVA8pkg5Lx91No1JxB%2C75dQReiBOHN37fQgWQrIAJ%2C4mLJ3XfOM5FPjSAWdQ2Jk7%2C6gK1Uct5FEdaUWRWpU4Cl2%2C1fZpYWNWdL5Z3wrDtISFUH%2C69tiO1fG8VWduDl3ji2qhI%2C4C50EbCS11M0VbGyH3OfLt%2C1xLMexpeeTKQ20SwGMaGSK%2C24V5UY0nChKpnb1TBPJhCw%2C3pTE9iaJTkWns3mxpNQlJV%2C44insiIQApkRaCMIbuaISJ%2C4ETSs924pXMzjIeD6E9b4u",{method:"GET",headers:{Authorization:"Bearer "+t.data.access_token}}).then((function(t){p(t.data.artists)}))}))}),[t.ClientId,t.ClientSecret]),console.log(h),s?Object(O.jsx)(w,{selectedArtist:d,setArtistId:r}):Object(O.jsx)(I,{selectedArtist:d,setSelectedArtist:j,artistId:s,setArtistId:r,artistData:h,setArtistData:p})};c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.ce25114f.chunk.js.map
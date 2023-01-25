(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[263],{1037:function(e,t,n){"use strict";var c=n(410);function r(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var a=n(411).a.h1(r());t.a=a},1042:function(e,t,n){"use strict";var c=n(410);function r(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var a=n(411).a.div(r());t.a=a},1043:function(e,t,n){"use strict";var c=n(17),r=n(1084),a=(n(6),n(196));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(r.a,{children:e.items.map((function(e){return Object(c.jsx)(r.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1048:function(e,t,n){"use strict";var c=n(410);function r(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(411).a.div(r());t.a=a},1063:function(e,t,n){"use strict";var c=n(17),r=n(1064);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(r.a,{})})}},1193:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(410);function r(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(411).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},1498:function(e,t,n){"use strict";var c=n(4),r=n(29),a=n(51),i=n(198),s=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.declencheurRead)})),o=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.declencheurEdit)})),l=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.declencheurCreate)})),d=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.declencheurImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.declencheurDestroy)})),selectPermissionToImport:d};t.a=j},1661:function(e,t,n){"use strict";var c=n(4),r={selectLoading:Object(c.a)([function(e){return e.declencheur.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},2183:function(e,t,n){"use strict";n.r(t);var c=n(17),r=n(1123),a=n(1124),i=n(6),s=n(39),o=n(41),l=n(2),d=n(498),j=n(4),u=function(e){return e.declencheur.view},b=Object(j.a)([u],(function(e){return e.record})),m={selectLoading:Object(j.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:u},O=n(0),h=n(1063),f=n(1193),x=n(1231),p=n(2098),g=x.a.TabPane,v=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(h.a,{}):Object(c.jsx)(f.a,{children:Object(c.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(g,{tab:Object(l.c)("common.informationsAR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameAR)&&Object(c.jsx)(p.a.Item,Object(O.a)(Object(O.a)({},f.b),{},{label:Object(l.c)("entities.declencheur.fields.nameAR"),children:t.nameAR}))})},"1"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsFR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(c.jsx)(p.a.Item,Object(O.a)(Object(O.a)({},f.b),{},{label:Object(l.c)("entities.declencheur.fields.nameFR"),children:t.nameFR}))})},"2"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsEN"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(c.jsx)(p.a.Item,Object(O.a)(Object(O.a)({},f.b),{},{label:Object(l.c)("entities.declencheur.fields.nameEN"),children:t.nameEN}))})},"3")]})})},y=n(1028),T=n(439),C=n(438),w=n(1083),R=n(196),I=n(224),P=n(1498),E=n(379),A=n(1661),B=n(1048),F=function(e){var t=Object(s.d)(),n=Object(o.h)(),r=Object(s.e)(I.a.selectPermissionToRead),a=Object(s.e)(P.a.selectPermissionToEdit),i=Object(s.e)(P.a.selectPermissionToDestroy),d=Object(s.e)(A.a.selectLoading),j=n.params.id;return Object(c.jsxs)(B.a,{children:[a&&Object(c.jsx)(R.a,{to:"/declencheur/".concat(j,"/edit"),children:Object(c.jsx)(T.a,{title:Object(l.c)("common.edit"),children:Object(c.jsx)(C.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(c.jsx)(w.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(E.a.doDestroy(j))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(c.jsx)(T.a,{title:Object(l.c)("common.destroy"),children:Object(c.jsx)(C.a,{type:"primary",disabled:d,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(c.jsx)(R.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(c.jsx)(T.a,{title:Object(l.c)("auditLog.menu"),children:Object(c.jsx)(C.a,{icon:Object(c.jsx)(y.a,{})})})})]})},N=n(1042),U=n(1043),L=n(1037);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),j=Object(s.e)(m.selectLoading),u=Object(s.e)(m.selectRecord);return Object(i.useEffect)((function(){t(d.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.declencheur.menu"),"/declencheur"],[Object(l.c)("entities.declencheur.view.title")]]}),Object(c.jsxs)(N.a,{children:[Object(c.jsxs)(r.a,{children:[Object(c.jsx)(a.a,{span:16,children:Object(c.jsx)(L.a,{children:Object(l.c)("entities.declencheur.view.title")})}),Object(c.jsx)(a.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(F,{match:n})})]}),Object(c.jsx)(v,{loading:j,record:u})]})]})}}}]);
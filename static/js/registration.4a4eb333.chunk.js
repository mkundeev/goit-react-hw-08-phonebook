"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[129],{8909:function(e,r,a){a.d(r,{Z:function(){return i}});var n="Container_container__VVOCq",t=a(184);function i(e){var r=e.children;return(0,t.jsx)("div",{className:n,children:r})}},3139:function(e,r,a){a.d(r,{Z:function(){return h}});var n=a(885),t=a(5705),i=a(9726),s=a(5048),o=a(6871),l=a(759),c=a(5206),m=a(1929),u={form:"RegistrationForm_form__c8X43",item:"RegistrationForm_item__F5OR7",label:"RegistrationForm_label__zrkEU",button:"RegistrationForm_button__XU1LB",error:"RegistrationForm_error__hvKUg"},d=a(184);function h(e){var r=e.registration,a=(0,s.I0)(),h=(0,i.DW)(),p=(0,n.Z)(h,1)[0],_=(0,i.XQ)(),f=(0,n.Z)(_,1)[0],x=(0,o.s0)();return(0,d.jsx)(t.J9,{initialValues:r?{name:"",email:"",password:""}:{email:"",password:""},validationSchema:m.Ry({name:r&&m.Z_().matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),email:m.Z_().email("Please provide valid e-mail").required("Required"),password:m.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),onSubmit:function(e,n){var t=n.setSubmitting,i=n.resetForm;r?p(e).unwrap().then((function(e){a((0,l.av)(e)),x("/contacts",{replace:!0})})).catch((function(){return c.Am.error("User with such email already exist. Do you want to Log in?",{position:c.Am.POSITION.TOP_RIGHT,onClick:function(){return x("/authorization",{replace:!0})}})})):f(e).unwrap().then((function(e){a((0,l.av)(e)),x("/contacts",{replace:!0})})).catch((function(){return c.Am.error("Please put correct data",{position:c.Am.POSITION.TOP_RIGHT})})),t(!1),i({})},children:(0,d.jsxs)(t.l0,{className:u.form,children:[r&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("label",{htmlFor:"name",className:u.label,children:"Name"}),(0,d.jsx)(t.gN,{name:"name",type:"text",className:u.input}),(0,d.jsx)(t.Bc,{name:"name",render:function(e){return(0,d.jsx)("div",{className:u.error,children:e})}})]}),(0,d.jsx)("label",{htmlFor:"email",className:u.label,children:"E-mail"}),(0,d.jsx)(t.gN,{name:"email",type:"email",className:u.input}),(0,d.jsx)(t.Bc,{name:"email",render:function(e){return(0,d.jsx)("div",{className:u.error,children:e})}}),(0,d.jsx)("label",{htmlFor:"password",className:u.label,children:"Password"}),(0,d.jsx)(t.gN,{name:"password",type:"password",className:u.input}),(0,d.jsx)(t.Bc,{name:"password",render:function(e){return(0,d.jsx)("div",{className:u.error,children:e})}}),(0,d.jsx)("button",{type:"submit",className:u.button,children:r?"Register":"Sign in"})]})})}},9339:function(e,r,a){a.r(r),a.d(r,{default:function(){return s}});var n=a(3139),t=a(8909),i=a(184);function s(){return(0,i.jsx)(t.Z,{children:(0,i.jsx)(n.Z,{registration:!0})})}}}]);
//# sourceMappingURL=registration.4a4eb333.chunk.js.map
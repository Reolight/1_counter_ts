"use strict";(self.webpackChunk_1_counter_ts=self.webpackChunk_1_counter_ts||[]).push([[210],{6210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var s=n(2791),l=n(7159),r=n(1475),i=n(3030),o=n(184);const a={margin:8},c=e=>(0,o.jsxs)(i.Pt,{orientation:"vertical",align:{horizontal:"center",vertical:"middle"},children:[(0,o.jsxs)(r.__,{style:a,children:[e.counterName&&e.counterName+" ",e.count]}),(0,o.jsx)(l.zx,{style:a,onClick:e.increment,children:"Increment"}),(0,o.jsx)(l.zx,{style:a,onClick:e.decrement,children:"Decrement"}),(0,o.jsx)(l.zx,{style:a,onClick:e.reset,children:"Reset"})]});var d=n(7043);const u={value:0,visible:!0},p=[u];function m(){const[e,t]=(0,s.useState)(p);function n(e){return e%2===0}function l(e){e.visible=!1}return(0,o.jsxs)(i.Pt,{orientation:"vertical",children:[(0,o.jsx)(c,{count:e.length,counterName:"Count of counters:",increment:function(){t((0,d.Uy)(e,(e=>{e.forEach((e=>{n(e.value)?e.value++:l(e)})),e.push(u)})))},decrement:function(){t((0,d.Uy)(e,(e=>{e.pop();let t=e.filter((e=>e.visible)).length;e.forEach((e=>{n(e.value)?t>1&&(l(e),t--):e.value--})),t<1&&e.length>1&&(e.at(-1).visible=!0)})))},reset:function(){t(p)}}),(0,o.jsx)(i.Pt,{orientation:"horizontal",children:e.map(((n,s)=>n.visible&&(0,o.jsx)(c,{count:n.value,counterName:"No. ".concat(s,":"),increment:()=>function(n){t((0,d.Uy)(e,(e=>{e[n].value++})))}(s),decrement:()=>function(n){t((0,d.Uy)(e,(e=>{e[n].value--})))}(s),reset:()=>function(n){t((0,d.Uy)(e,(e=>{e[n].value=0})))}(s)},s)))})]})}},1475:(e,t,n)=>{n.d(t,{__:()=>d});var s=n(2791),l=n(2007),r=n(3234),i=n(5181);const o="labels.optional",a={[o]:"(Optional)"},c={name:"@progress/kendo-react-labels",productName:"KendoReact",productCodes:["KENDOUIREACT","KENDOUICOMPLETE"],publishDate:1702644685,version:"",licensingDocsUrl:"https://www.telerik.com/kendo-react-ui/components/my-license/"},d=e=>{(0,r.sc)(c);const{id:t,editorId:n,editorRef:l,editorDisabled:d,children:u,editorValid:p,style:m,className:h,optional:b}=e,f=(0,i.ql)(),y=b?f.toLanguageString(o,a[o]):"",k=y&&s.createElement("span",{className:"k-label-optional"},y),N=s.useCallback((e=>{if(l&&l.current&&!d){l.current.focus&&(e.preventDefault(),l.current.focus());const t=l.current.actionElement;t&&(e.preventDefault(),t.click())}}),[l]),g=(0,r.AK)({"k-label":!0,"k-label-empty":!u,"k-text-error":!1===p,"k-text-disabled":!0===d},h);return s.createElement("label",{id:t,htmlFor:n,onClick:N,style:m,className:g},u,k)};d.propTypes={id:l.string,editorId:l.string,editorRef:l.oneOfType([l.func,l.shape({current:l.any})]),editorValid:l.bool,editorDisabled:l.bool,style:l.object,className:l.string,optional:l.bool},d.displayName="KendoReactLabel";const u=e=>{const t={direction:"start",...e};(0,r.sc)(c);const n=(0,r.AK)({"k-form-error":!0,"k-text-start":"start"===t.direction,"k-text-end":"end"===t.direction},t.className);return s.createElement("div",{id:t.id,role:"alert",style:t.style,className:n},t.children)};u.propTypes={id:l.string,direction:l.oneOf(["start","end"]),children:l.oneOfType([l.element,l.node]),style:l.object,className:l.string},u.displayName="KendoReactError";const p=e=>{const t={direction:"start",...e};(0,r.sc)(c);const n=(0,r.AK)({"k-form-hint":!0,"k-text-start":"start"===t.direction,"k-text-end":"end"===t.direction,"k-text-disabled":!0===t.editorDisabled},t.className);return s.createElement("div",{id:t.id,style:t.style,className:n},t.children)};p.propTypes={id:l.string,direction:l.oneOf(["start","end"]),children:l.oneOfType([l.element,l.node]),style:l.object,className:l.string,editorDisabled:l.bool},p.displayName="KendoReactHint";class m extends s.Component{constructor(e){super(e),this.state={focused:!1},this.handleFocus=e=>{this.setState({focused:!0})},this.handleBlur=e=>{this.setState({focused:!1})},(0,r.sc)(c)}render(){const{label:e,editorId:t,className:n,labelClassName:l,editorValue:c,editorPlaceholder:d,editorValid:u,editorDisabled:p,style:m,id:h,optional:b}=this.props,f=(0,i.uE)(this),y=b?f.toLanguageString(o,a[o]):"",k=y&&s.createElement("span",{className:"k-label-optional"},y),N=(0,r.AK)({"k-floating-label-container":!0,"k-focus":this.state.focused,"k-empty":!d&&!c&&0!==c,"k-text-disabled":p,"k-rtl":"rtl"===this.props.dir},n),g=(0,r.AK)({"k-label":!0,"k-text-error":!1===u,"k-text-disabled":p},l);return s.createElement("span",{id:this.props.id,className:N,onFocus:this.handleFocus,onBlur:this.handleBlur,style:m,dir:this.props.dir},this.props.children,e?t?s.createElement("label",{id:h,htmlFor:t,className:g},e,k):s.createElement("span",{id:h,className:g},e,k):null)}}m.propTypes={label:l.string,editorId:l.string,editorValue:l.oneOfType([l.string,l.bool,l.number]),editorPlaceholder:l.string,editorValid:l.bool,editorDisabled:l.bool,id:l.string,style:l.object,className:l.string,labelClassName:l.string,optional:l.bool},(0,i.Oh)(m)}}]);
//# sourceMappingURL=210.7c04d832.chunk.js.map
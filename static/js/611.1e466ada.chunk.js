"use strict";(self.webpackChunk_1_counter_ts=self.webpackChunk_1_counter_ts||[]).push([[611],{611:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var r=s(3030),l=s(1475),a=s(184);function o(e){const t=e.dataReceiver();return(0,a.jsxs)(r.Pt,{orientation:"vertical",children:[(0,a.jsxs)(l.__,{children:["Email: ",t.email]}),(0,a.jsxs)(l.__,{children:["Password: ",t.password]})]})}},1475:(e,t,s)=>{s.d(t,{__:()=>c});var r=s(2791),l=s(2007),a=s(3234),o=s(5181);const i="labels.optional",n={[i]:"(Optional)"},d={name:"@progress/kendo-react-labels",productName:"KendoReact",productCodes:["KENDOUIREACT","KENDOUICOMPLETE"],publishDate:1702644685,version:"",licensingDocsUrl:"https://www.telerik.com/kendo-react-ui/components/my-license/"},c=e=>{(0,a.sc)(d);const{id:t,editorId:s,editorRef:l,editorDisabled:c,children:p,editorValid:u,style:m,className:b,optional:h}=e,k=(0,o.ql)(),y=h?k.toLanguageString(i,n[i]):"",f=y&&r.createElement("span",{className:"k-label-optional"},y),N=r.useCallback((e=>{if(l&&l.current&&!c){l.current.focus&&(e.preventDefault(),l.current.focus());const t=l.current.actionElement;t&&(e.preventDefault(),t.click())}}),[l]),g=(0,a.AK)({"k-label":!0,"k-label-empty":!p,"k-text-error":!1===u,"k-text-disabled":!0===c},b);return r.createElement("label",{id:t,htmlFor:s,onClick:N,style:m,className:g},p,f)};c.propTypes={id:l.string,editorId:l.string,editorRef:l.oneOfType([l.func,l.shape({current:l.any})]),editorValid:l.bool,editorDisabled:l.bool,style:l.object,className:l.string,optional:l.bool},c.displayName="KendoReactLabel";const p=e=>{const t={direction:"start",...e};(0,a.sc)(d);const s=(0,a.AK)({"k-form-error":!0,"k-text-start":"start"===t.direction,"k-text-end":"end"===t.direction},t.className);return r.createElement("div",{id:t.id,role:"alert",style:t.style,className:s},t.children)};p.propTypes={id:l.string,direction:l.oneOf(["start","end"]),children:l.oneOfType([l.element,l.node]),style:l.object,className:l.string},p.displayName="KendoReactError";const u=e=>{const t={direction:"start",...e};(0,a.sc)(d);const s=(0,a.AK)({"k-form-hint":!0,"k-text-start":"start"===t.direction,"k-text-end":"end"===t.direction,"k-text-disabled":!0===t.editorDisabled},t.className);return r.createElement("div",{id:t.id,style:t.style,className:s},t.children)};u.propTypes={id:l.string,direction:l.oneOf(["start","end"]),children:l.oneOfType([l.element,l.node]),style:l.object,className:l.string,editorDisabled:l.bool},u.displayName="KendoReactHint";class m extends r.Component{constructor(e){super(e),this.state={focused:!1},this.handleFocus=e=>{this.setState({focused:!0})},this.handleBlur=e=>{this.setState({focused:!1})},(0,a.sc)(d)}render(){const{label:e,editorId:t,className:s,labelClassName:l,editorValue:d,editorPlaceholder:c,editorValid:p,editorDisabled:u,style:m,id:b,optional:h}=this.props,k=(0,o.uE)(this),y=h?k.toLanguageString(i,n[i]):"",f=y&&r.createElement("span",{className:"k-label-optional"},y),N=(0,a.AK)({"k-floating-label-container":!0,"k-focus":this.state.focused,"k-empty":!c&&!d&&0!==d,"k-text-disabled":u,"k-rtl":"rtl"===this.props.dir},s),g=(0,a.AK)({"k-label":!0,"k-text-error":!1===p,"k-text-disabled":u},l);return r.createElement("span",{id:this.props.id,className:N,onFocus:this.handleFocus,onBlur:this.handleBlur,style:m,dir:this.props.dir},this.props.children,e?t?r.createElement("label",{id:b,htmlFor:t,className:g},e,f):r.createElement("span",{id:b,className:g},e,f):null)}}m.propTypes={label:l.string,editorId:l.string,editorValue:l.oneOfType([l.string,l.bool,l.number]),editorPlaceholder:l.string,editorValid:l.bool,editorDisabled:l.bool,id:l.string,style:l.object,className:l.string,labelClassName:l.string,optional:l.bool},(0,o.Oh)(m)}}]);
//# sourceMappingURL=611.1e466ada.chunk.js.map
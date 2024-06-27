import{j as d}from"./jsx-runtime-QvZ8i92b.js";import{r as C}from"./index-uubelm5h.js";import{C as m}from"./checkbox-jI8Y_Aap.js";import"./SearchIcon-3OcPq2d7.js";import"./index-DDbYGXDy.js";import"./index-Dei0BBcc.js";import"./clsx-B-dksMZM.js";import"./typography-BEbh9huK.js";const j={argTypes:{label:[""]},component:m,tags:["autodocs"],title:"Components/CheckboxItem"},e={args:{label:"Click me"}},r={args:{},render:()=>{const[l,p]=C.useState(!0),u=i=>{p(i)};return d.jsx(m,{checked:l,onChange:u})}};var o,a,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Click me'
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [value, setValue] = useState(true);
    const onChange = (value: boolean) => {
      setValue(value);
    };
    return <Checkbox checked={value} onChange={onChange} />;
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const E=["Main","CheckboxControlled"];export{r as CheckboxControlled,e as Main,E as __namedExportsOrder,j as default};

import{j as h}from"./jsx-runtime-QvZ8i92b.js";import{r as m}from"./index-uubelm5h.js";import{I as o}from"./input-CL7X1MUW.js";import"./SearchIcon-3OcPq2d7.js";import"./typography-BEbh9huK.js";import"./clsx-B-dksMZM.js";const y={argTypes:{type:{control:{type:"radio"},options:["text","password"]}},component:o,tags:["autodocs"],title:"Components/Input"},e={args:{disabled:!1,label:"Click here",type:"password",value:""},render:()=>{const[n,a]=m.useState(""),r=s=>{a(s.currentTarget.value)};return h.jsx(o,{onChange:r,type:"password",value:n})}},t={args:{disabled:!1,label:"Click here",placeholder:"Placeholder",searchInput:!0,type:"text",value:"Simple input"},render:()=>{const[n,a]=m.useState(""),r=s=>{a(s.currentTarget.value)};return h.jsx(o,{onChange:r,searchInput:!0,value:n})}};var l,u,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click here',
    type: 'password',
    value: ''
  },
  render: () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    };
    return <Input onChange={onChange} type={'password'} value={value} />;
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,d,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click here',
    placeholder: 'Placeholder',
    searchInput: true,
    type: 'text',
    value: 'Simple input'
  },
  render: () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    };
    return <Input onChange={onChange} searchInput value={value} />;
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const b=["InputPassword","InputWithPlaceHolderAndSearch"];export{e as InputPassword,t as InputWithPlaceHolderAndSearch,b as __namedExportsOrder,y as default};

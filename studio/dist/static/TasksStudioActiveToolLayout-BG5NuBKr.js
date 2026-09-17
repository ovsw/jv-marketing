import"./rolldown-runtime-DAXXjFlN.js";import{t as e}from"./jsx-runtime-CFwixLRt.js";import{t}from"./react-BUD3sqOU.js";import{t as n}from"./compiler-runtime-KOEWgTh7.js";import{L as r,P as i,V as a,ht as o,xt as s}from"./dist-B-bPe2Zb.js";import{c,s as l}from"./dist-onfjeO4m.js";import{$o as u,Bo as d,Cs as f,Go as p,Jo as m,Qo as h,Rs as g,Uu as _,Vo as v,Yo as y,Zo as b,ds as x,gn as S,lo as C,uo as w}from"./index2-DYgvKorN.js";import"./react-mJqebIub.js";var T=e(),E=n();t(),_(),u(),h(),p(),x(),b(),y(),m(),g(),f(),v(),d();var D=1,O=3,k=c(r).withConfig({displayName:`RootFlex`,componentId:`sc-1y8zfkj-0`})(({theme:e})=>l`
    min-height: 100%;

    @media (max-width: ${e.sanity.media[O]}px) {
      position: relative;
    }
  `),A=c(a).withConfig({displayName:`SidebarMotionLayer`,componentId:`sc-1y8zfkj-1`})(({theme:e})=>{let t=e.sanity.media;return l`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 360px;
    border-left: 1px solid var(--card-border-color);
    box-sizing: border-box;
    overflow: hidden;

    box-shadow:
      0px 6px 8px -4px var(--card-shadow-umbra-color),
      0px 12px 17px -1px var(--card-shadow-penumbra-color);

    @media (max-width: ${t[O]}px) {
      bottom: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    @media (max-width: ${t[D]}px) {
      border-left: 0;
      min-width: 100%;
      left: 0;
    }
  `});function j(e){let t=(0,E.c)(12),n=o(),{state:r}=w(),{isOpen:a}=r,c=n<=D&&a?`hidden`:`auto`,l;t[0]===e?l=t[1]:(l=e.renderDefault(e),t[0]=e,t[1]=l);let u;t[2]!==c||t[3]!==l?(u=(0,T.jsx)(i,{flex:1,height:`fill`,overflow:c,children:l}),t[2]=c,t[3]=l,t[4]=u):u=t[4];let d;t[5]===a?d=t[6]:(d=a&&(0,T.jsx)(A,{zOffset:100,height:`fill`,children:(0,T.jsx)(S,{})}),t[5]=a,t[6]=d);let f;t[7]===d?f=t[8]:(f=(0,T.jsx)(s,{initial:!1,children:d}),t[7]=d,t[8]=f);let p;return t[9]!==u||t[10]!==f?(p=(0,T.jsxs)(k,{sizing:`border`,height:`fill`,children:[u,f]}),t[9]=u,t[10]=f,t[11]=p):p=t[11],p}function M(e){let t=(0,E.c)(4),{enabled:n}=C();if(!n){let n;return t[0]===e?n=t[1]:(n=e.renderDefault(e),t[0]=e,t[1]=n),n}let r;return t[2]===e?r=t[3]:(r=(0,T.jsx)(j,{...e}),t[2]=e,t[3]=r),r}export{M as TasksStudioActiveToolLayout};
import * as React from "react";
import { SVGProps } from "react";

const Bankera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" {...props}>
    <linearGradient
      id="a"
      x1={100.903}
      x2={95.903}
      y1={297.6}
      y2={-1.4}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#11a1bc" />
      <stop offset={1} stopColor="#5fceb4" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="m1 120 14-31c0-1 0-1 1-1v1l11 16c0 1 0 1-1 1L2 121H1v-1zm55 113-10-31v-1h1l10 2v31c-1 0-1 0-1-1zm0-33-9-1s0-1-1-1l10-22c0-1 0-1 1-1v25h-1zM1 295l27-14h1l25 17v1s0 1-1 1l-51-3c-1 0-1-1-1-1zm-1-8v-36h1l24 7c1 0 1 0 1 1L1 288c-1 0-1 0-1-1zm0-39v-3l12-27c0-1 0-1 1-1v1l13 36v1s0 1-1 0l-24-6-1-1zm0-13v-27h1l9 6v1l-8 20H0zm0-31v-5l24-19h1v1l-13 30s0 1-1 1l-11-7v-1zm0-10v-2l13-32h1l13 13v1L1 195H0v-1zm0-13v-43s0-1 1-1l1 1 9 19v1l-9 23-1 1c-1 0-1-1-1-1zm1-52 31 9 1 1-1 1-18 15h-1v-1L0 130s0-1 1-1zm-1-17V85h1l12 1v1L2 112l-1 1c-1 0-1-1-1-1zm0-31v-4l14-17h1v1l-1 21v1L1 82c-1 0-1 0-1-1zm0-10V53h1l12 2c0 1 1 1 1 1s0 1-1 1L1 72c-1 0-1 0-1-1zm0-22v-6l8-9 1-1c0 1 1 1 1 1l5 18s0 1-1 1L1 50c-1 0-1 0-1-1zm0-12V17l1-1s0 1 1 1l6 12v1l-7 7v1c-1 0-1-1-1-1zM0 9V0h42s1 0 1 1v1L11 27h-1zm48-7 5 25v1H15v-1L46 2h1zm3-2h27v1L57 25c0 1-1 1-1 1l-1-1-5-24c0-1 0-1 1-1zm-2 32L18 52c0 1 0 1-1 0l-5-20v-1h37zm71-27L90 22h-1L84 1V0h1l34 4h1zm31 16-35 6c0 1 0 0-1 0v-1l10-20c0-1 1-1 1-1h1l24 14v1zm20 29-21 21h-1c-1 0-1-1-1-1l9-44h1l13 23zm4 32-7 23c0 1-1 1-1 1h-1l-18-28c-1-1-1-1 0-2l23-22v-1c1 0 1 1 1 1zm-29 48-7-21v-1h1l23 2c1 0 1 1 1 1v1l-17 18s0 1-1 0zm-5-1-30-24v-1h1l24 4 7 20s0 1-1 1h-1zm-2-25 7-23h1l17 26v1h-1l-23-2c0-1-1-1-1-1v-1zm-3-4-12-32v-1h1l19 10v1l-6 22-1 1s-1 0-1-1zm8-26-21-11v-1l29-34h1s1 0 1 1l-9 45h-1zm-32 2-3-11 1-1h7c1 0 1 0 1 1v1l-5 10v1c-1 0-1-1-1-1zm9-8 14 36-1 1-27-4-1-1v-1l7-16 7-15zm0-9-7-28c0-1 0-1 1-1l36-7s1 0 1 1v1l-30 34h-1zm-3 3h-9v-1l3-21h2l5 21v1zM96 48l-5-21c0-1 0-1 1-1l17 4v1L97 48c0 1 0 1-1 1zm14-11-3 22s0 1-1 1h-1l-7-7c-1 0-1-1 0-1l10-15c1 0 1-1 1 0zm1-9-17-4v-1l26-16s1 0 1 1v1l-9 19zM82 3l5 20s-1 0-1 1l-25 3h-1v-1L80 2h1l1 1zM57 47l-32 5h-1c0-1 0-1 1-1l28-19h1s0 1 1 1l2 13zm2-13 16 12h1c0 1-1 1-1 1H61c-1 0-1 0-1-1l-3-11c0-1 1-1 1-1h1zm-1 24v46h-2L46 80h1l9-22s1-1 1 0zm26-11 4-15h1l5 18h-1v1l-9-3s-1-1 0-1zM60 30l26-4 1 1-6 18v1h-1L60 32c0-1-1-1-1-1l1-1zm45 73 30 24v1c0 1 0 1-1 1l-42-15v-1l11-10zm-17 13 6 21s0 1-1 1h-1l-28-21v-1c0-1 1-1 1-1h22s1 0 1 1zm4 0 45 16 1 1c0 1 0 1-1 1l-39 7c-1 0-1-1-1-1l-6-23c0-1 1-1 1-1zm53 20 5 22s0 1-1 1l-45-15-1-1c0-1 1-1 1-1l40-7zm23 10-14 12h-1c-1 0-1 0-1-1l-4-19v-1h1l19 7 1 1s0 1-1 1zm19 21-31-6v-2l15-12h1l15 19c1 0 1 0 1 1h-1zm13 34-15 5h-1v-1l7-28 1-1 1 1 7 23zm-5 40-17-2s0-1-1-1l1-1 20-28h1c1 0 1 0 1 1l-4 31h-1zm-18 26-1-25v-1h1l17 3v1l-15 22c-1 0-1 1-1 1l-1-1zm-35 22-2-28v-1h1l31 12v2l-29 15zm-30 7-26-17c-1 0-1 0-1-1h1l47 13v1l-20 4h-1zm-50 2 12-22v-1h1l31 20c1 0 1 1 1 1 0 1-1 1-1 1l-43 3c-1 0-1 0-1-1v-1zm27-158-48-3h-1v-1l18-20h2l30 23v1zm-52-6-6-24v-1s1-1 1 0l23 5c1 0 1 1 1 1v1l-18 18c0 1 0 1-1 1zm19 30-23 8c-1 0-1 0-1-1l5-28v-1h1l18 21zm-15-24 49 3s1 0 1 1h-1l-30 19h-1l-19-22v-1zm55 5 6 17v1c-1 0-1 1-1 1H67c-1 0-1-1-1-1v-1l29-17c0-1 0-1 1-1zm4 0 41 14c1 0 1 0 1 1h-1l-36 3-6-17v-1h1zm46 19-19 15h-1l-17-12v-1h1l35-3h1zm-15 20 39 20v1h-1l-31-4s-1 0-1-1l-7-15v-1zm8 22 29 29v1h-1l-33-8s-1 0-1-1l5-21v-1s1 0 1 1zm-8 26 5 22c1 0 0 0 0 1h-1l-20-12v-1l15-10zm-19 12 15 9c1 0 1 1 1 1-1 0-1 1-1 0l-31-5v-1l15-4zm-29 7-9 18h-1l-11-19v-1c0-1 0-1 1-1l19 2h1zm69-87 25 39v1h-1l-46-23-1-1h1l21-17s1 0 1 1zm4-1 34 7v1l-8 33h-1l-26-40v-1zm24 47-6 25c0 1 0 1-1 1l-31-31v-1h1l36 5c1 0 1 1 1 1zm17-4-18 25h-1v-1l5-20v-1l14-4c1 1 1 1 0 1zm-62 25 34 8 1 1s0 1-1 1l-28 15h-1l-1-1-5-23v-1zm38 12 2 27v1h-1l-30-13h-1c0-1 0-1 1-1l28-15h1zm-44 16-51 12h-1v-1l9-19c0-1 1-1 1-1l42 7v1zM2 125l25-16h1v1l6 25v1h-1L2 126H1c0-1 0-1 1-1zm26 45-13-12v-1l18-15h1v1l-5 27h-1zm28-2-11 27-1 1-1-1-11-20c0-1 0-1 1-1l22-7h1zm-25 10 11 20v1l-27 14h-1v-1l15-34s1 0 1-1zm0 76 13-48h1l12 39c0 1 0 1-1 1l-24 9h-1zm22-2-21 23h-1c-1 0-1-1-1-1v-15l1-1 21-7c1-1 1 0 1 0 1 0 1 1 0 1zm19 22-10 19s-1 1-1 0h-1v-39s0-1 1-1v1l11 19zm-16 23-24-17c-1 0-1-1-1-1l25-27h1v1l1 43c0 1 0 1-1 1h-1zm-28-34v15c0 1 0 1-1 1L3 291c0 1 0 0-1 0v-1l24-27c0-1 1-1 1-1zm110 27-57-16v-1l56-13h1l1 29v1h-1zM16 216l25-13h1v1l-13 47v1c-1 0-1-1-1-1l-12-34c-1-1 0-1 0-1zM56 51 45 77h-1L21 57v-2l34-5h1zM23 77l-5 4c-1 0-1-1-1-1l1-14v-1c1 0 1 0 1 1l4 10zm-1-16 17 16v1h-1l-12-2-5-14c-1 0 0-1 0-1zm20 21-11 19h-2l-3-21v-1h1l15 2v1c1 0 1 0 0 0zm13 30-23-6c-1-1-1-1 0-1l12-21h2l10 27c0 1 0 1-1 1zM25 97l-8-11c0-1 0-1 1-1l5-5c1 0 1 1 1 1l2 16v1c-1 0-1 0-1-1z"
    />
  </svg>
);

export default Bankera;

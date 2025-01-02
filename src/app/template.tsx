"use client";

import { ReactNode, useState } from "react";

export default function Template({children} : {children: ReactNode}) {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Template {state}</h1>
      <button onClick={() => setState(state + 1)}>Klik</button>
      {children}
    </div>
  )
}
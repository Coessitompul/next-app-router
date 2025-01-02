import { ReactNode } from "react";

export default function AboutLayout({children} : {children: ReactNode}) {
  return (
    <>
      <h1>Title</h1>
      <div>
        {children}
      </div>
    </>
  )
}
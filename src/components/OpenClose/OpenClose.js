import { useState } from "react";

export function OpenClose({ myRenderProp }) {
  // props myRenderProp
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevOpen) => !prevOpen);

  return (
    <div>
      <button onClick={toggle}>{myRenderProp(open)}</button>
    </div>
  );
}

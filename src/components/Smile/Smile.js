import { useContext } from "react";

import { SmileContext } from "App";

export const Smile = () => {
  const { smile, setSmile } = useContext(SmileContext);
  return <div onClick={() => setSmile("😈")}>{smile}</div>;
};

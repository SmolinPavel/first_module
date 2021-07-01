import { SmileContext } from "App";

const SmileComponent = ({ smile, setSmile }) => {
  return <div onClick={() => setSmile("⚽️")}>{smile}</div>;
};

export const Smile = () => (
  <SmileContext.Consumer>
    {({ smile, setSmile }) => {
      return <SmileComponent smile={smile} setSmile={setSmile} />;
    }}
  </SmileContext.Consumer>
);

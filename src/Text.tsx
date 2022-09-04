import { FC } from "react";

type props = {
  color: string;
  fontSize: string;
}

export const Text: FC<props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
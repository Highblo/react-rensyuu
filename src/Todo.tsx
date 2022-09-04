import { FC } from "react";
import { Todotype } from "./types/todo";
export const Todo: FC<Omit<Todotype, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>
};
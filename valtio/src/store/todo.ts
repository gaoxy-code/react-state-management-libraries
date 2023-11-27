import { proxy, subscribe } from "valtio";

type Status = "pending" | "completed";
export type Filter = Status | "all";
export type Todo = {
  description: string;
  status: Status;
  id: number;
};

type State = { filter: Filter; todos: Todo[] };

export const state = proxy<State>({
  filter: "all",
  todos: [],
});

subscribe(state.todos, () => console.log("state has changed to", state.todos));

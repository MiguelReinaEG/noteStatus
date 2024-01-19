import React from "react";
import { supabase } from "../../lib/supabase";

const { data: todos, error } = await supabase.from("todos").select("*");

const SupabaseTest = () => {
  return (
    <div>
      <h2
        style={{
          color: "seagreen",
          fontSize: "20px",
        }}
      >
        SupabaseTest in react component
      </h2>
      {todos.map((todo) => {
        return (
          <p
            style={{
              color: "black",
              fontSize: "20px",
            }}
            key={todo.id}
          >
            {todo.title} / Status: {todo.status}
          </p>
        );
      })}
    </div>
  );
};

export default SupabaseTest;

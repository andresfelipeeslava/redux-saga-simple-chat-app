import React from "react";

const AddMessage = (props) => {
  let input;

  return (
    <section className="new-message new-message-stage">
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.dispatch(input.value, "Me");
            input.value = "";
          }
        }}
        ref={(node) => {
          input = node;
        }}
        type="text"
      />
    </section>
  );
};

export default AddMessage;

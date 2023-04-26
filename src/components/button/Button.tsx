import { Component, JSX } from "solid-js";

import * as pressable from "@zag-js/pressable"
import { normalizeProps, useMachine } from "@zag-js/solid"
import { createMemo, createUniqueId } from "solid-js"

interface ButtonProps {
  onClick?: () => void;
  class?: string;
  children?: JSX.Element;
}

const Button: Component<ButtonProps> = props => {
  const [state, send] = useMachine(
    pressable.machine({
      id: createUniqueId(),
      onPress() {
        console.log("press")
      },
      onLongPress() {
        console.log("long press")
      },
    }),
  )

  const api = createMemo(() => pressable.connect(state, send, normalizeProps))

  return (
    <button class={props.class} onClick={props.onClick} {...api().pressableProps}>
      {props.children}
    </button>
  )
};

export default Button;
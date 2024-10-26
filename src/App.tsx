import { IconProps } from "./icons/Icon";
import { RiTestIcon } from "./icons/RiTestIcon";
import { tokens } from "./tokens";

function App() {
  return (
    <>
      <p>
        Icon looks fine in virtually all other browers - it has a height and
        width of a CSS token, var(--space-32). This behavior should be matched
        by Arc.
      </p>
      <RiTestIcon size={tokens.space32} />

      <p>
        Icon will only look fine in Arc is the width and height is a raw value
        (of 32px), not a CSS token
      </p>
      <RiTestIcon size={"32px" as unknown as IconProps["size"]} />
    </>
  );
}

export default App;

import type { ReactNode } from "react";

type Props = {
  mode: "hint" | "warning";
  children: ReactNode;
};

const InfoBox = ({ mode, children }: Props) => {
  if (mode === "hint") {
    return (
      <aside className="infoBox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

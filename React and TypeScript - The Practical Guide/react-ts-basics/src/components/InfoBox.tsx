import type { ReactNode } from "react";

type Props = {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

const InfoBox = ({ mode, severity, children }: Props) => {
  if (mode === "hint") {
    return (
      <aside className="infoBox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

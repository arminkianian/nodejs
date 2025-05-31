import React, { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [expanded, setExpanded] = useState(true);

  if (children.length <= maxChars) return <p>{children}</p>;

  if (expanded) {
    return (
      <>
        <p>
          {children}
          <button onClick={() => setExpanded(false)}>Less</button>
        </p>
      </>
    );
  } else {
    return (
      <p>
        {children.slice(0, maxChars)}
        ...<button onClick={() => setExpanded(true)}>More</button>
      </p>
    );
  }
};

export default ExpandableText;

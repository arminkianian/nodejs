import { type PropsWithChildren, type ReactNode } from "react";

interface Props extends PropsWithChildren {
  image: {
    src: string;
    alt: string;
  };
}

const Header = ({ children, image }: Props) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;

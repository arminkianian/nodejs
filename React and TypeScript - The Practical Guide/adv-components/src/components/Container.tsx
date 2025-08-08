import { ElementType } from "react";

type ContainerProps = {
  as: ElementType;
};

const Container = ({ as }: ContainerProps) => {
  const Component = as;
  return <Component />;
};

export default Container;

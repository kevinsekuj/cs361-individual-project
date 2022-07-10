import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  fontSize?: number | string;
  fontColor?: string;
}

const Text = ({
  children,
  fontSize = "1em",
  fontColor = "white",
  ...rest
}: TextProps) => {
  return (
    <p {...rest} style={{ color: fontColor, fontSize: fontSize }}>
      {children}
    </p>
  );
};

export default Text;

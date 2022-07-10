import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  fontSize?: number | string;
  fontColor?: string;
  bold?: boolean;
}

const Text = ({
  children,
  fontSize = "1em",
  fontColor = "white",
  bold = false,
  ...rest
}: TextProps) => (
  <p
    {...rest}
    style={{
      color: fontColor,
      fontSize: fontSize,
      fontWeight: bold ? "bold" : "normal",
    }}
  >
    {children}
  </p>
);

export default Text;

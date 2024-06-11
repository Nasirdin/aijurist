import React, { FC } from "react";
import MUIButton, { ButtonProps } from "@mui/material/Button";

type TProps = {
  text: string;
};

const Button: FC<ButtonProps & TProps> = ({ text, onClick, ...props }) => {
  return (
    <MUIButton
      onClick={onClick}
      className="w-full rounded-3xl h-12"
      variant="contained"
      {...props}
    >
      {text}
    </MUIButton>
  );
};

export default Button;

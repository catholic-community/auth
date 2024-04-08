"use client";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface StyledTypographyProps {
  text: string;
  linkText?: string;
  type?: "h1" | "h5" | "caption" | "subtitle2";
}

const StyledTypography: React.FC<StyledTypographyProps> = ({
  text,
  linkText,
  type,
}) => {
  return (
    <Typography
      variant={type}
      sx={{
        size: type === undefined ? "14px" : null,
        marginBottom:
          type === "h1" || type === "h5"
            ? "16px"
            : type === "caption"
            ? "24px"
            : "4px",
        width: "300px",
        padding: type === "caption" ? "0px 16px" : "0px",
        color: type === "caption" ? "#666666" : "#000000",
      }}
    >
      {text} {linkText && <Link> {linkText} </Link>}
    </Typography>
  );
};

export default StyledTypography;

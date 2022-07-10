import React from "react";

import {
  Image as ImageIcon,
  FormatQuote as FormatQuoteIcon,
  Search as SearchIcon,
  Api as ApiIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

export const SIDEBAR_BUTTONS = [
  {
    content: "Get Image",
    icon: <ImageIcon color="primary" />,
    description: "null",
    path: "/image",
  },
  {
    content: "Get Quote",
    icon: <FormatQuoteIcon color="primary" />,
    description: "null",
    path: "/quote",
  },
  {
    content: "Reverse Image Search",
    icon: <SearchIcon color="primary" />,
    description: "null",
    path: "/trace",
  },
  {
    content: "API",
    icon: <ApiIcon color="primary" />,
    description: "null",
    path: null,
  },
  {
    content: "GitHub",
    icon: <GitHubIcon color="primary" />,
    description: "null",
    path: null,
  },
];

export const FONT_FAMILY = `"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka,
"メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`;

export const LI_FONT_SIZE = "1.2em";

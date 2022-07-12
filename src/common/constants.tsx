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
    path: "/",
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

export const MEDIA_CARDS = [
  {
    title: "The Tunnel to Summer, the Exit of Goodbye' Reveals More Cast",
    description: `The staff of the anime film of Mei Hachimoku and Kukka's The Tunnel to Summer, the Exit of Goodbye (Natsu e no Tunnel, Sayonara no Deguchi) young adult novel...`,
    url: "https://cdn.animenewsnetwork.com/thumbnails/max700x700/cms/news.5/187569/png.png.jpg",
  },
  {
    title: "One Piece Film Red Anime Gets IMAX Screenings",
    description: `The official website for the upcoming One Piece Film Red anime film announced on Monday that the film will have IMAX screenings in 27 theaters in Japan...`,
    url: "https://cdn.animenewsnetwork.com/thumbnails/max400x400/cms/news.5/186449/one-piece-film-red-visual.jpg",
  },
];

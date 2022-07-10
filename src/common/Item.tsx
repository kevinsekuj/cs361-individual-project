import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  padding: theme.spacing(2),
})) as typeof Paper;

export default Item;

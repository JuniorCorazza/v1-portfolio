import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
export const useIsMobile = (): boolean => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return matches;
};
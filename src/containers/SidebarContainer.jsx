import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children }) => {

  const theme = useTheme();

  return (
    <Grid2
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400] ,
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      className="sidebarContainer"
    >
      {children}
    </Grid2>
  );
};

export default SidebarContainer;

import { useContext } from "react";
import MainContext from "../../context";

import { MenuRounded } from "@mui/icons-material";
import { Fab, Box } from "@mui/material";
import { red } from "@mui/material/colors";

const DrawerActionButton = () => {

  const { setDrawerOpen } = useContext(MainContext);

    return(
        <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          position:"absolute"
        }}
      >
        <Fab
          aria-label="Sidebar"
          size="small"
          sx={{ m: 2, backgroundColor: red[500] }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuRounded />
        </Fab>
      </Box>
    )
}

export default DrawerActionButton;
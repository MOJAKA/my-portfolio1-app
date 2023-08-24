import { useContext } from "react";
import MainContext from "../../context";

import { useTheme } from "@mui/material/styles";

import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";

import { tabsData } from "../../constants/tabsData";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);
 
    const data = tabsData();
    const theme = useTheme();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      indicatorColor="secondary"
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              color: "text.primary",
              backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500] ,
              borderRadius: 2,
              my: 0.5,
              mx: 1,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;

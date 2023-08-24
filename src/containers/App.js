import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import SwipeableViews from "react-swipeable-views";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import {
  Home,
  AboutMe,
  MySkills,
  Samples,
  Comments,
  Page,
} from "../components/pages";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const preferDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(preferDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  const handlePageChange = index => {
    setPageNumber(index);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <DrawerActionButton />

        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageChange}>
            <Page value={pageNumber} index={0}>
              <Home helmetTitle="وب سایت شخصی MJK | خانه" />
            </Page>
            <Page value={pageNumber} index={1}>
              <AboutMe helmetTitle="وب سایت شخصی MJK | درباره‌ی من" />
            </Page>
            <Page value={pageNumber} index={2}>
              <MySkills helmetTitle="وب سایت شخصی MJK | مهارت‌های من" />
            </Page>
            <Page value={pageNumber} index={3}>
              <Samples helmetTitle="وب سایت شخصی MJK | نمونه کارها" />
            </Page>
            <Page value={pageNumber} index={4}>
              <Comments helmetTitle="وب سایت شخصی MJK | نظرات" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;

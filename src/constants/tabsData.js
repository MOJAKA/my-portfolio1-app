import {
  HomeRounded,
  FaceRounded,
  TerminalRounded,
  MessageRounded,
  Code,
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabs = [
    { label: "صفحه‌ی اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره‌ی من", icon: <FaceRounded />, ...tabProps(1) },
    { label: "مهارت‌های من", icon: <Code />, ...tabProps(2) },
    { label: "نمونه‌ کار‌های من", icon: <TerminalRounded />, ...tabProps(3) },
    { label: "نظرات پس از همکاری", icon: <MessageRounded />, ...tabProps(4) },
  ];

  return tabs;
};

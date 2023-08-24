import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar , Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import avatar from "../../assets/avatar.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import SocialMediaIcons from "../SocialMediaIcons";
import { grey } from "@mui/material/colors" ;

const SidebarHeader = () => {
  const [start,setStart] = useState(false);

  const theme = useTheme();

  const txColor = theme.palette.mode === "dark" ? grey[400] : grey[900] ;

  return (
    <>
    <ThemeActionButton />
      <Avatar
        src={avatar}
        alt="محمدجواد"
        variant="circular"
        sx={{
          height: 200,
          width: 200,
          margin: "0 auto",
          display: { xs: "none", md: "block" },
        }}
      />
      <Typography variant="h6" sx={{ color: "#FD3D92", mt: 2 }}>
        <Typography variant="caption" color="tomato">
          {"{ "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={2}
          characterSet={alphabetPersian}
          characters="محمدجواد کاظمی‌نیا"
          onComplete={() => setStart(true)}
        />
        <Typography variant="caption" color="tomato">
          {" }"}
        </Typography>
      </Typography>

      {start && (<Typography variant="caption" sx={{ color: txColor, mt: 2 }}>
        <Typography variant="caption" color="tomato">
          [{" "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={2}
          characterSet={alphabetPersian}
          characters="برنامه‌نویس و توسعه دهنده‌ی وب"
        />
        <Typography variant="caption" color="tomato">
          {" "}
          ]
        </Typography>
      </Typography>)}

      <SocialMediaIcons/>
    </>
  );
};

export default SidebarHeader;

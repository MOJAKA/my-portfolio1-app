import { useEffect, useRef, useCallback , useState } from "react";

import TextTransition , { presets } from "react-text-transition";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { linkMouseAttraction } from "../../constants/particles";

import bg02 from "../../assets/bg02.jpeg";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Home = ( { helmetTitle } ) => {
  const [index , setIndex] = useState(0);
  const [start , setStart] = useState(false);
  const nameEl = useRef(null);

  const infoStrings = [
    "من یک توسعه دهنده‌ی وب ا َم",
    "که به عنوان یک برنامه‌نویس فرانت اِند فعالیت می‌کنم",
    "از برنامه‌نویسی مثل یه تفریح لذت می‌برم",
    "و برای پیشرفت در کارم بسیار جدی و مشتاق هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["سلام،من محمدجواد کاظمی نیا هستم" , " "],
      typeSpeed: 100,
      backSpeed: 40,
      backDelay: 20,
      showCursor: false,
      onComplete:() => setStart(true)
    });

    const stringsTransition = setTimeout(() => {setInterval(() =>{
      setIndex(index => index + 1);
    }, 4000)},7000)

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
      clearTimeout(stringsTransition);
    };
  }, []);

  const patriclesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg02})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Particles
        id="tsparticles"
        init={patriclesInit}
        loaded={particlesLoaded}
        options={linkMouseAttraction}
      />
      <Typography ref={nameEl} variant="h3" sx={{ color: "#f44336", mb: 5 , textAlign:"center"}} />

      {start && (<TextTransition springConfig={presets.wobbly}>
      <Typography
        variant="h4"
        sx={{
          color: "whitesmoke",
          textDecoration: "underLine",
          textDecorationColor: "#FD3D92",
          textAlign:"center"
        }}
      >
        {infoStrings[index % infoStrings.length]}
      </Typography>
      </TextTransition>)}
      
      <Helmet>
        <title>{ helmetTitle }</title>
      </Helmet>
      
    </Box>
  );
};

export default Home;

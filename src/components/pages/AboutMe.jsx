import { Helmet } from "react-helmet-async";

import {
  Card,
  CardContent,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomDivider from "../common/CustomDivider";
import { PermIdentityRounded } from "@mui/icons-material";
import { DevInfo , DevCoffeeCount , Education } from "./components";

const AboutMe = ( { helmetTitle } ) => {
  

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <CardContent>
        <Grid2 container sx={{ mx: 3 }}>
          <Grid2 xs={12} sm={12} md={12} lg={12} xl={12}>
            
            <CustomDivider
            bColor="primary.main"
            cColor="primary"
            icon={<PermIdentityRounded/>}
            align="center"
            text="درباره ی من"
            />
            
            <Grid2 container sx={{justifyContent: "space-between"}}>
              <Grid2
                xs={4}
                sm={4}
                md={3}
                lg={3}
                xl={9}
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                  mt:2 ,
                }}
              >
                <DevCoffeeCount/>

              </Grid2>

              <Grid2 xs={12} sm={8} md={9} lg={9} xl={9} >
                
                <DevInfo/>
                
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Education/>
      </CardContent>

      <Helmet>
        <title>{ helmetTitle }</title>
      </Helmet>
    </Card>
  );
};

export default AboutMe;

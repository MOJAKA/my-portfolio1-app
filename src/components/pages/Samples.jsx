import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";

import {
  Card,
  CardContent,
} from "@mui/material";

import CustomDivider from "../common/CustomDivider";

import { EngineeringRounded } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ShowSamples } from "./components";

const Samples = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <CardContent>
      <CustomDivider
            bColor="secondary.main"
            cColor="secondary"
            icon={<EngineeringRounded />}
            align="center"
            text="نمونه کارهای من"
            />
        <Grid2 container sx={{ mt: 5 , mx: 3 }}>
          <ShowSamples loading={loading}/>
        </Grid2>
      </CardContent>

      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
    </Card>
  );
};

export default Samples;

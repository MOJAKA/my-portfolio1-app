import { Helmet } from "react-helmet-async";
import { Skills } from "./components";
import { SelfImprovementRounded } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomDivider from "../common/CustomDivider";
import { Card, CardContent } from "@mui/material";

const MySkills = ({helmetTitle}) => {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <CardContent>
        <Grid2 container>
          <Grid2 sx={{ width: 1, mt: 4 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />
            <Skills />
          </Grid2>
        </Grid2>
      </CardContent>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
    </Card>
  );
};

export default MySkills;

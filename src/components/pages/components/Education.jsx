import { useState, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

import { Typography , Slide } from "@mui/material";
import { devEdu } from "../../../constants/details";
import { SchoolRounded } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomDivider from "../../common/CustomDivider";

const Education = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
        <Grid2 container sx={{ mt: 5 }}>
          <Grid2 xs={12}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات من"
            />

            <Timeline position="right" sx={{ direction: "ltr" }}>
              {devEdu.map((item, index) => (
                <Slide
                key={index}
                  direction="up"
                  in={loading}
                  style={{
                    transitionDelay: loading ? `${index + 4}99ms` : "0ms",
                  }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="info" variant="outline">
                        <SchoolRounded color="info" />
                      </TimelineDot>
                      {index !== 2 ? <TimelineConnector /> : null}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1" color="black">
                        {item.cert}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.major}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.uni}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Slide>
              ))}
            </Timeline>
          </Grid2>
        </Grid2>
  );
};

export default Education;

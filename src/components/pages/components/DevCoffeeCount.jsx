import CountUp from "react-countup";

import {
  Tooltip,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { devCoffeeInfo } from "../../../constants/details";

const DevCoffeeCount = () => {
    return (
        <>
        {devCoffeeInfo.map((item, index) => (
            <Box key={index} component="div" sx={{ width: 1, mb: 1 }}>
              <Tooltip title={item.tooltipTitle} placement="right" >
              <Chip
                icon={item.icon}
                label={
                  <Typography variant="body1" color="whitesmoke">
                    <CountUp start={0} end={item.total} duration={4}/>
                  </Typography>
                }
                sx={{
                  p: 2,
                  backgroundColor: item.color,
                  width: 1,
                }}
              />
              </Tooltip>
              
            </Box>
          ))}
        </>
    )
}

export default DevCoffeeCount;
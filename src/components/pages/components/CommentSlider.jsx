import { Avatar, Box, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import { userComments } from "../../../constants/details";

const CommentSlider = () => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    atuoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <Box
      component="div"
      sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
    >
      <Slider {...options}>
        {userComments.map((user, index) => (
          <Box key={index} component="div" sx={{ justifyContent: "center" }}>
            <Avatar
              src={user.avatar}
              variant="circular"
              sx={{ height: 150, width: 150, m: "0 auto" }}
            />
            <Typography variant="body1" textAlign="center" color="black" sx={{ mt: 2 }}>
              {user.fullname}
            </Typography>

            <Typography
              variant="body2"
              textAlign="center"
              color="black"
              sx={{ my: 2 }}
            >
              {user.projectTitle}
            </Typography>
            <Card
              sx={{
                backgroundColor: "lightsalmon",
                width: 1 / 2,
                m: "0 auto",
                borderRedius: 5,
              }}
            >
              <CardContent>
                <Typography variant="body2" textAlign="center">
                  {user.comment}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CommentSlider;

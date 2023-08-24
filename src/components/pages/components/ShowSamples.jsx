import {
    Button,
    Typography,
    Slide,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CardActions,
} from "@mui/material";
import EllipsisText from "react-ellipsis-text";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Samples } from "../../../constants/samples";

const ShowSamples = ({ loading }) => {
    return (
        <>
            {Samples.map((Samples, index) => (
                <Grid2
                    key={index}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    sx={{ px: 2, mb: 2 }}
                >
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading
                                ? `${index + 3}99ms`
                                : "0ms",
                        }}
                    >
                        <Card
                            sx={{
                                maxWidth: 345,
                                backgroundColor: "steelblue",
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    width="200"
                                    image={Samples.image}
                                    alt={Samples.title}
                                />
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        textAlign="left"
                                        gutterBottom
                                    >
                                        {Samples.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        textAlign="left"
                                        gutterBottom
                                        sx={{ direction: "ltr" }}
                                    >
                                        <EllipsisText
                                            text={Samples.info}
                                            length={100}
                                        />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    href={Samples.link}
                                    size="small"
                                    color="primary"
                                    target="_blank"
                                >
                                    اطلاعات بیشتر
                                </Button>
                            </CardActions>
                        </Card>
                    </Slide>
                </Grid2>
            ))}
        </>
    );
};

export default ShowSamples;
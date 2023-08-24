import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
  Card,
  CardContent,
} from "@mui/material";
import { CommentRounded } from "@mui/icons-material";
import CustomDivider from "../common/CustomDivider";
import { CommentSlider } from "./components";

const Comments = ({ helmetTitle }) => {
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
      <CustomDivider
            bColor="error.main"
            cColor="error"
            icon={<CommentRounded />}
            align="center"
            text="نظرات پس از همکاری"
            />

        <CommentSlider/>

      </CardContent>

      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
    </Card>
  );
};

export default Comments;

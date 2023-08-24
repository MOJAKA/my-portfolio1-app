import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
      }}
    >
      <Typography variant="subtitle2" color="text.primary" sx={{ mb: 2 }}>
        طراحی شده با{" "}
        <FavoriteRounded
          sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
        />
      </Typography>

      <Typography variant="subtitle2" color="text.primary">
        کپی رایت ۱۴۰۲{" "}
        <CopyrightRounded sx={{ verticalAlign: "middle", height: 18 }} />
      </Typography>
    </Box>
  );
};

export default SidebarFooter;

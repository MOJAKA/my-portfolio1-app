import { GitHub , LinkedIn , Instagram } from "@mui/icons-material"; 
import { Box , IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors" ;

const SocialMediaIcons = () => {

    const theme = useTheme();
    const txColor = theme.palette.mode === "dark" ? grey[400] : grey[900] ;

    return (
        <Box component="div" sx={{m:"0 auto" , textAlign: "center" }} >
        <IconButton aria-label="Github">
          <a href="https://www.github.com/MOJAKA/" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ color: txColor }} />
          </a>
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <a href="https://www.linkedin.com/in/mohammad-javad-kazeminia/" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ color: txColor }} />
          </a>
        </IconButton>
        <IconButton aria-label="Instagram">
          <a href="https://www.instagram.com/mohammadjavad.kazeminia/" target="_blank" rel="noopener noreferrer">
            <Instagram sx={{ color: txColor }} />
          </a>
        </IconButton>
      </Box>
    )
}

export default SocialMediaIcons;
import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded , FavoriteRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "top", color: "primary.main" }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info> اسم من محمدجواد کاظمی نیا ست</Info>
      <Info>سن من ۲۷ ساله</Info>
      <Info>و زادگاه من شهر بهبهان هستش</Info>
      <Info>شاید جالب باشه براتون که بدونید</Info>
      <Info>من تا چند ماه پیش هیچی راجبه برنامه‌نویسی نمی دونستم </Info>
      <Info>و یادگیری اون رو به صورت خودآموز </Info>
      <Info>و از طریق اینترنت شروع کردم</Info>
      <Info>و رفته رفته علاقم بهش بیشتر شد</Info>
      <Info>این رو هم می دونم که خیلی راه برای رفتن دارم</Info>
      <Info>ولی به نظرم این از قشنگی های برنامه نویسی به حساب میاد</Info>
      <Info>که هر چی جلوتر برم موضوعات بیشتری برای یادگیری هست</Info>
      <Info><FavoriteRounded
          sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
        />ممنونم که از وب سایت شخصی من دیدن می کنید</Info>
      <Info>kazeminia.mj@gmail.com :آدرس ایمیل من</Info>

    </>
  );
};

export default DevInfo;

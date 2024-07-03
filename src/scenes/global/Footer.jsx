import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            WATCHIT
          </Typography>
          <div>
          Watchit is a premier online e-commerce platform dedicated to offering a wide selection of watches from renowned brands at competitive prices. Our mission is to provide customers with high-quality timepieces that cater to diverse tastes and preferences. <br/>With a user-friendly website, secure payment options, and exceptional customer service, Watchit ensures a seamless shopping experience. Whether you're seeking a stylish accessory or a functional timekeeper, our curated collection guarantees authenticity and value. Discover the perfect watch that complements your lifestyle at Watchit, where quality meets affordability.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            23, 10th street, Anna nagar, Chennai.
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: contact@watchit.com
          </Typography>
          <Typography mb="30px">+91 90807 14575</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
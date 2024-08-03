import { School } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 15,
        py: 2,
        backgroundColor: "primary.main",
      }}
    >
      <Container>
        <Stack direction="row" justifyContent="center">
          <Typography variant="h5" fontWeight={900} color="white">
            © Created By Fahem Khakiki Khaya
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

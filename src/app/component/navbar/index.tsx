import { School } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        py: 2,
        backgroundColor: "primary.main",
        zIndex: 1,
      }}
    >
      <Container>
        <Stack direction="row">
          <Stack direction="row" spacing={1} color="white">
            <Typography variant="h5" fontWeight={900}>
              FAHEM ACADEMY
            </Typography>
            <School fontSize="large" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;

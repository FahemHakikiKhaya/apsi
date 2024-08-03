"use client";

import { CheckBox } from "@mui/icons-material";
import {
  Alert,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

const coursePackages = [
  {
    name: "Paket Dasar",
    price: "Rp.499.000",
    description: "Mulai belajar coding",
    benefits: [
      "Akses ke materi dasar",
      "10 video tutorial",
      "Forum komunitas",
      "Sertifikat penyelesaian",
    ],
  },
  {
    name: "Paket Menengah",
    price: "Rp.999.000",
    description: "Latihan dan bimbingan",
    benefits: [
      "Semua dari Paket Dasar",
      "15 video tutorial tambahan",
      "5 sesi tanya jawab",
      "Akses ke latihan praktis",
    ],
  },
  {
    name: "Paket Premium",
    price: "Rp.1.499.000",
    description: "Keterampilan lanjutan dan webinar",
    benefits: [
      "Semua dari Paket Menengah",
      "25 video tutorial lanjutan",
      "10 sesi tanya jawab",
      "Proyek akhir dengan umpan balik",
    ],
  },
  {
    name: "Paket Pro",
    price: "Rp.2.499.000",
    description: "Dukungan karir eksklusif",
    benefits: [
      "Semua dari Paket Premium",
      "Akses seumur hidup",
      "20 sesi tanya jawab dan mentoring",
      "Konsultasi karir dan penilaian CV",
    ],
  },
];

const PricingCard: FC<{
  name: string;
  description: string;
  price: string;
  benefits: string[];
  onClickRegister: () => void;
}> = ({ name, price, description, benefits, onClickRegister }) => {
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Stack height="100%">
        <Typography variant="h5" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="h6" fontWeight={500}>
          {price}
        </Typography>
        <Stack justifyContent="space-between" flex={1}>
          <Stack mt={4} spacing={1}>
            <Typography>{description}</Typography>
            {React.Children.toArray(
              benefits.map((benefit) => (
                <Stack direction="row" spacing={1}>
                  <CheckBox />
                  <Typography>{benefit}</Typography>
                </Stack>
              ))
            )}
          </Stack>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            sx={{ mt: 3 }}
            onClick={onClickRegister}
          >
            Daftar Sekarang
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

const RegisterDialog: FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            setOpenSnackbar(true);
            handleClose();
          },
        }}
      >
        <DialogTitle>Daftar Kelas</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Untuk mendaftar kelas, mohon sertakan alamat email Anda.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Selamat Anda Berhasil Terdaftar!
        </Alert>
      </Snackbar>
    </>
  );
};

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" height="60vh">
        <Stack
          maxWidth="800px"
          textAlign="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h3" fontWeight={700} color="primary">
            Belajar Coding Dengan Mudah
          </Typography>
          <Typography maxWidth="500px">
            Tingkatkan keahlian coding Anda dengan kursus programming yang
            dirancang untuk kesuksesan Anda.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            Daftar Sekarang
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("https://www.instagram.com/fahemkhaya/")}
          >
            Hubungi Kami
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={3}>
        {React.Children.toArray(
          coursePackages.map((coursePackage) => (
            <Grid item md={3} sx={{ display: "flex" }}>
              <PricingCard
                {...coursePackage}
                onClickRegister={() => setOpen(true)}
              />
            </Grid>
          ))
        )}
      </Grid>
      <RegisterDialog open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
}

"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between">
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/healthPlans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/daignostick">
            Daignostick
          </Typography>
          <Typography component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;

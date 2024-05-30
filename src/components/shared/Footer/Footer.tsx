import { Box, Container, Stack, Typography } from "@mui/material";
import facebookImg from "@/assets/footerIcon/facebook.png";
import instagramImg from "@/assets/footerIcon/instagram.png";
import tweetterImg from "@/assets/footerIcon/twitter.png";
import yTubeImg from "@/assets/footerIcon/youtube.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17 , 26 , 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/healthPlans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/daignostick">
            Daignostick
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Image src={facebookImg} width={30} height={30} alt="facebook" />
          <Image src={instagramImg} width={30} height={30} alt="instagram" />
          <Image src={tweetterImg} width={30} height={30} alt="twitter" />
          <Image src={yTubeImg} width={30} height={30} alt="yTube" />
        </Stack>

        {/* <div className="border-b-[1px] border-dashed mt-5"></div> */}

        <Box
          sx={{
            border: "1px dashed lightgray",
            margin: "10px 0",
          }}
        ></Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            @Copy;2024 Ph Health-care . All Rights Reserved.
          </Typography>

          <Typography
            variant="h5"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P{" "}
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Typography component="p" color="white">
            Privacy Policy | Terms&Condition
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

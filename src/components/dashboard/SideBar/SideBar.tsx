import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import homeImg from "../../../assets/svgs/homeImg.png";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { userRole } from "@/types";
import SideBarItem from "./SideBarItem";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.service";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={homeImg} width={30} height={30} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          fontWeight={600}
          sx={{
            cursor: "pointer",
          }}
        >
          Ph Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as userRole).map((item, index) => (
          <SideBarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

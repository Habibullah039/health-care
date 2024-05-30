import { USER_ROLE } from "@/constants/role";
import { DrawerItem, userRole } from "@/types";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import TryIcon from "@mui/icons-material/Try";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PaymentsIcon from "@mui/icons-material/Payments";

export const drawerItems = (role: userRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },

        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );

      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },

        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: TryIcon,
        },

        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },

        {
          title: "Shedules",
          path: `${role}/shedules`,
          icon: CalendarMonthIcon,
        },

        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: CalendarMonthIcon,
        },

        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );

      break;

    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },

        {
          title: "Shedules",
          path: `${role}/shedules`,
          icon: CalendarMonthIcon,
        },

        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: CalendarMonthIcon,
        }
      );

      break;

    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: DashboardIcon,
        },

        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: TryIcon,
        },

        {
          title: "Payment Hishtory",
          path: `${role}/payment-hishtory`,
          icon: PaymentsIcon,
        }
      );

      break;

    default:
      break;
  }
  return [...roleMenus];
};

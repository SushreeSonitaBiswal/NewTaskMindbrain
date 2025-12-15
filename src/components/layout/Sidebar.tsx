import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// Icons (MUI)
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GridViewIcon from "@mui/icons-material/GridView";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import CampaignIcon from "@mui/icons-material/Campaign";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";

const menuSections = [
  {
    heading: "",
    items: [
      { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    ],
  },
  {
    heading: "Catalog & BV Setup",
    items: [
      { name: "Catalog & BV Setup", icon: <GridViewIcon />, path: "/catalog" },
      { name: "Packages", icon: <CardGiftcardIcon />, path: "/packages" },
    ],
  },
  {
    heading: "Orders",
    items: [{ name: "Orders List", icon: <ShoppingCartIcon />, path: "/orders" }],
  },
  {
    heading: "Users & Agents",
    items: [{ name: "Users & Agents", icon: <PeopleIcon />, path: "/users" }],
  },
  {
    heading: "Genealogy & Placement",
    items: [{ name: "Genealogy & Placement", icon: <AccountTreeIcon />, path: "/genealogy" }],
  },
  {
    heading: "Wallets & Payouts",
    items: [{ name: "Wallets & Payouts", icon: <WalletIcon />, path: "/income" }],
  },
  {
    heading: "Rewards Management",
    items: [{ name: "Rewards Management", icon: <LocalActivityIcon />, path: "/rewards" }],
  },
  {
    heading: "CMS, Marketing",
    items: [
      { name: "CMS , Marketing", icon: <CampaignIcon />, path: "/cms" },
    ],
  },
  {
    heading: "Reports & Analytics",
    items: [
      { name: "Reports & Analytics", icon: <AssessmentIcon />, path: "/reports" },
    ],
  },
  {
    heading: "Risk & Compliance",
    items: [
      { name: "Audit", icon: <GppGoodIcon />, path: "/audit" },
    ],
  },
  {
    heading: "Roles & Permissions",
    items: [
      {
        name: "Roles & Permissions",
        icon: <AdminPanelSettingsIcon />,
        path: "/roles",
      },
    ],
  },
  {
    heading: "Settings",
    items: [{ name: "Settings", icon: <SettingsIcon />, path: "/settings" }],
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          background: "#f7f9fc",
          borderRight: "1px solid #e6e8ec",
          paddingTop: 2,
        },
      }}
    >
      {/* Logo */}
        <Box px={2} pb={3}>
          <img src="/assets/images/Logo.png" alt="Logo" style={{ width: "140px" }} />
        </Box>

      <List>
        {menuSections.map((section, index) => (
          <Box key={index}>
            {/* Section Heading */}
            { (
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  px: 2,
                  mt: 2,
                  color: "#7a7f85",
                  textTransform: "uppercase",
                }}
              >
                
              </Typography>
            )}

            {/* Menu Items */}
            {section.items.map((item) => {
              const active = location.pathname === item.path;

              return (
                <ListItemButton
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    mx: 1,
                    mt: 1,
                    borderRadius: "10px",
                    background: active ? "#e6f6ee" : "transparent",
                    color: active ? "#0c8b4a" : "#2b2b2b",
                    "&:hover": {
                      background: "#edf4ff",
                    },
                  }}
                  selected={active}
                >
                  <ListItemIcon
                    sx={{
                      color: active ? "#0c8b4a" : "#7a7f85",
                      minWidth: 36,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
                  />
                </ListItemButton>
              );
            })}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

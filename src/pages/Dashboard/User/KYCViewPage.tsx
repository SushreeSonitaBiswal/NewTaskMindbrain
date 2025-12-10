 // KYCViewPage.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  IconButton,
  Tabs,
  Tab,
  Avatar,
  Chip,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HistoryIcon from "@mui/icons-material/History";

interface KYCViewPageProps {
  onBack?: () => void;
  onOverview?: () => void;
  onTeamView?: () => void;
  onSuspend?: () => void;
  onEdit?: () => void;
}

const KYCViewPage: React.FC<KYCViewPageProps> = ({
  onBack = () => {},
  onOverview = () => {},
  onTeamView = () => {},
  onSuspend = () => {},
  onEdit = () => {},
}) => {
  const [tab, setTab] = useState("kyc");

  const handleTabChange = (_: any, newValue: string) => {
    setTab(newValue);
    if (newValue === "overview") onOverview();
    if (newValue === "team") onTeamView();
  };

  const FieldBox = ({ label, value }: { label: string; value: string }) => (
    <Box
      sx={{
        background: "#F7F9FC",
        p: 2,
        borderRadius: 2,
        border: "1px solid #E3E8EF",
      }}
    >
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography fontWeight={600}>{value}</Typography>
    </Box>
  );

  return (
    <Card
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 4,
        border: "3px solid #2b7cff",
      }}
    >
      <CardContent>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Box display="flex" alignItems="center" gap={2}>
          <Avatar 
          src="https://i.pravatar.cc/50" 
          alt="Rajesh Kumar"
          sx={{ width: 55, height: 55 }}
          />

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Rajesh Kumar
              </Typography>
              <Typography variant="body2" color="text.secondary">
                AGT-1045 • Joined 15/8/2024
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={onBack}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* TABS */}
        <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab icon={<PersonIcon />} value="overview" label="Overview" />
          <Tab icon={<AccountBalanceIcon />} value="kyc" label="KYC & Bank" />
          <Tab icon={<GroupIcon />} value="team" label="Team" />
          <Tab icon={<MonetizationOnIcon />} value="earnings" label="Earnings" />
          <Tab icon={<HistoryIcon />} value="history" label="History" />
        </Tabs>

        {/* -------------------- KYC PAGE -------------------- */}
        {tab === "kyc" && (
          <>
            {/* KYC VERIFICATION CARD */}
            <Card
              sx={{
                mb: 3,
                borderRadius: 3,
                border: "1px solid #D0D7E2",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography variant="h6" fontWeight={600}>
                    KYC Verification
                  </Typography>

                  <Chip
                    label="VERIFIED"
                    sx={{
                      borderRadius: "20px",
                      background: "#E6F9EB",
                      color: "#1B8B3D",
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FieldBox label="Aadhaar Number" value="XXXX XXXX 4521" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FieldBox label="PAN Number" value="ABCDE1234F" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* BANK VERIFICATION CARD */}
            <Card
              sx={{
                borderRadius: 3,
                border: "1px solid #D0D7E2",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Bank Account Verification
                  </Typography>

                  <Chip
                    label="VERIFIED"
                    sx={{
                      borderRadius: "20px",
                      background: "#E6F9EB",
                      color: "#1B8B3D",
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FieldBox label="Account Holder" value="Rajesh Kumar" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FieldBox label="Bank Name" value="State Bank of India" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FieldBox label="Account Number" value="XXXXXXXX4521" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FieldBox label="IFSC Code" value="SBIN0001234" />
                  </Grid>
                </Grid>

                <Typography
                  variant="body2"
                  mt={2}
                  color="text.secondary"
                  fontStyle="italic"
                >
                  Verified on 15/8/2024
                </Typography>
              </CardContent>
            </Card>
          </>
        )}

        {/* FOOTER BUTTONS */}
        <Box mt={4} display="flex" justifyContent="center" gap={2} pb={1}>
          <Button
            variant="contained"
            sx={{
              background: "#CED4E1",
              color: "#2F3A4D",
              px: 4,
            }}
            onClick={onBack}
          >
            Close
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{ px: 4 }}
            onClick={onSuspend}
          >
            Suspend
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{ px: 4 }}
            onClick={onEdit}
          >
            Edit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KYCViewPage;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Tabs,
  Tab,
  Grid,
  Avatar,
} from "@mui/material";

import {
  Close as CloseIcon,
  Person as PersonIcon,
  AccountBalance as BankIcon,
  Group as TeamIcon,
  AttachMoney as EarningsIcon,
  History as HistoryIcon,
} from "@mui/icons-material";

interface AgentDetailsPageProps {
  onClose: () => void;
  onKYCView: () => void;
  onTeamView: () => void;
  onSuspend: () => void;
  onEdit: () => void;
}

const AgentDetailsPage: React.FC<AgentDetailsPageProps> = ({
  onClose,
  onKYCView,
  onTeamView,
  onSuspend,
  onEdit,
}) => {
  const [tabValue, setTabValue] = useState<string>("overview");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    if (newValue === "kyc") onKYCView();
    if (newValue === "team") onTeamView();
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: "auto",
        mt: 5,
        p: 3,
        border: "3px solid #2b7cff",
        borderRadius: "16px",
        background: "#fff",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            src="https://i.pravatar.cc/50"
            alt="Agent photo"
            sx={{ width: 60, height: 60 }}
          />

          <Box>
            <Typography variant="h6" fontWeight={700}>
              Rajesh Kumar
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              AGT-1045 • Joined 15/8/2024
            </Typography>
          </Box>
        </Box>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Tabs */}
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab icon={<PersonIcon />} value="overview" label="Overview" />
        <Tab icon={<BankIcon />} value="kyc" label="KYC & Bank" />
        <Tab icon={<TeamIcon />} value="team" label="Team" />
        <Tab icon={<EarningsIcon />} value="earnings" label="Earnings" />
        <Tab icon={<HistoryIcon />} value="history" label="History" />
      </Tabs>

      {/* Summary Widgets with equal width */}
      <Grid container spacing={2} mb={3}>
        {[{
          value: "45",
          label: "Team Members",
          border: "#bfd7ff"
        }, {
          value: "12450",
          label: "Total BV",
          border: "#e8d4ff"
        }, {
          value: "₹145,600",
          label: "Total Earnings",
          border: "#c5f1cc"
        }, {
          value: "2340",
          label: "Current Month BV",
          border: "#ffd5c2"
        }].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                height: "100%",
                border: `2px solid ${item.border}`,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" fontWeight={700}>{item.value}</Typography>
              <Typography color="text.secondary">{item.label}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Information */}
      <Card sx={{ mb: 3, borderRadius: 3, border: "2px solid #d5defc" }}>
        <CardContent>
          <Typography fontWeight={600} mb={2}>Contact Information</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Phone:</strong> +91 98765 43210</Typography>
              <Typography><strong>Email:</strong> rajesh.kumar@email.com</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography><strong>Join Date:</strong> 15/8/2024</Typography>
              <Typography><strong>Last Active:</strong> 2025-10-28 14:32</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Package Information */}
      <Card sx={{ mb: 3, borderRadius: 3, border: "2px solid #d5defc" }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={600}>Package Information</Typography>

            <Button
              variant="contained"
              size="small"
              sx={{
                background: "#34c76f",
                "&:hover": { background: "#2fa660" },
              }}
            >
              Upgrade
            </Button>
          </Box>

          <Box mt={2}>
            <Typography fontWeight={600}>Silver Package</Typography>
            <Typography color="text.secondary">Package Value: ₹5,000</Typography>
            <Typography mt={1}><strong>Purchased on:</strong> 15/8/2024</Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Network Position */}
      <Card sx={{ mb: 3, borderRadius: 3, border: "2px solid #d5defc" }}>
        <CardContent>
          <Typography fontWeight={600} mb={2}>Network Position</Typography>

          <Box>
            <Typography><strong>Sponsor:</strong> AGT-0023</Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Box display="flex" justifyContent="flex-end" mt={3} gap={2}>
        <Button variant="outlined" onClick={onClose}>Close</Button>
        <Button variant="contained" color="error" onClick={onSuspend}>Suspend</Button>
        <Button variant="contained" onClick={onEdit}>Edit</Button>
      </Box>
    </Box>
  );
};

export default AgentDetailsPage;

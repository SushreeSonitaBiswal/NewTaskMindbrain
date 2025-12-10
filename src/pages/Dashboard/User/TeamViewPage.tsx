import React from 'react';
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
  Avatar
} from '@mui/material';
import {
  Close as CloseIcon,
  Person as PersonIcon,
  AccountBalance as BankIcon,
  Group as TeamIcon,
  AttachMoney as EarningsIcon,
  History as HistoryIcon,
} from '@mui/icons-material';

interface TeamViewPageProps {
  onBack: () => void;
  onOverview: () => void;
  onKYCView: () => void;
  onSuspend: () => void;
  onEdit: () => void;
}

const TeamViewPage: React.FC<TeamViewPageProps> = ({
  onBack,
  onOverview,
  onKYCView,
  onSuspend,
  onEdit,
}) => {
  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 900,
        mx: "auto",
        border: "3px solid #2986ff",
        borderRadius: "16px",
        background: "#fff",
      }}
    >

      {/* Header */}
      <Box display="flex" alignItems="center" gap={2} mb={3}>
       <Avatar
  src="https://i.pravatar.cc/50"    
  alt="Rajesh Kumar"
  sx={{ width: 60, height: 60 }}
/>


        <Box>
          <Typography variant="h6" fontWeight={700}>
            Rajesh Kumar
          </Typography>
          <Typography color="text.secondary">
            AGT-1045 • Joined 15/8/2024
          </Typography>
        </Box>

        <Box flexGrow={1} />

        <IconButton onClick={onBack}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Tabs */}
      <Tabs value="team" sx={{ mb: 3 }}>
        <Tab icon={<PersonIcon />} value="overview" label="Overview" onClick={onOverview} />
        <Tab icon={<BankIcon />} value="kyc" label="KYC & Bank" onClick={onKYCView} />
        <Tab icon={<TeamIcon />} value="team" label="Team" />
        <Tab icon={<EarningsIcon />} value="earnings" label="Earnings" />
        <Tab icon={<HistoryIcon />} value="history" label="History" />
      </Tabs>

      {/* Team Structure Title */}
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ mb: 2 }}
      >
        Team Structure
      </Typography>

      {/* Outer Box */}
      <Box
        sx={{
          border: "1px solid #d2d9ff",
          p: 2,
          borderRadius: 2,
          background: "#fff",
        }}
      >
        {/* LEFT LEG */}
        <Box
          sx={{
            border: "1px solid #c7cdff",
            borderRadius: 2,
            p: 2,
            mb: 2,
            background: "#f7f9ff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "&:hover": { background: "#eef3ff" },
          }}
        >
          <Box>
            <Typography fontWeight={600}>Left Leg</Typography>
            <Typography color="text.secondary" fontSize={14}>
              23 members
            </Typography>
          </Box>

          <Box textAlign="right">
            <Typography fontWeight={700} color="#2352ff">
              6,240 BV
            </Typography>
            <Typography fontSize={12} color="text.secondary">
              Total BV
            </Typography>
          </Box>
        </Box>

        {/* RIGHT LEG */}
        <Box
          sx={{
            border: "1px solid #c7cdff",
            borderRadius: 2,
            p: 2,
            background: "#f7f9ff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "&:hover": { background: "#eef3ff" },
          }}
        >
          <Box>
            <Typography fontWeight={600}>Right Leg</Typography>
            <Typography color="text.secondary" fontSize={14}>
              22 members
            </Typography>
          </Box>

          <Box textAlign="right">
            <Typography fontWeight={700} color="#2352ff">
              6,210 BV
            </Typography>
            <Typography fontSize={12} color="text.secondary">
              Total BV
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Buttons */}
      <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
        <Button variant="outlined" onClick={onBack}>
          Close
        </Button>
        <Button variant="contained" color="error" onClick={onSuspend}>
          Suspend
        </Button>
        <Button variant="contained" onClick={onEdit}>
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default TeamViewPage;

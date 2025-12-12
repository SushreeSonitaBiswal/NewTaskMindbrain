 import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Grid,
  Paper,
  Button
} from "@mui/material";

import type { Agent } from "./types";
import EarningPage from "./EarningPage";
import HistoryPage from "./HistoryPage";

interface Props {
  agent: Agent;
  onClose: () => void;
  onKYCView: () => void;
  onTeamView: () => void;
  onEarningsView: () => void;
  onHistoryView: () => void;
  onEditProfile: () => void;
  onUpgrade: () => void;
}

const AgentDetailsPage: React.FC<Props> = ({
  agent,
  onClose,
  onKYCView,
  onTeamView,
  onEarningsView,
  onHistoryView,
  onEditProfile,
  onUpgrade
}) => {
  const [tab, setTab] = React.useState<string>("overview");

  const handleTabChange = (_: any, value: string) => {
    if (value === "kyc") return onKYCView();
    if (value === "team") return onTeamView();
    if (value === "earnings") return onEarningsView();
    if (value === "history") return onHistoryView();
    setTab(value);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar src={agent.avatar} sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography sx={{ fontWeight: 700 }}>{agent.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {agent.code} • Joined {agent.joinDate}
          </Typography>
        </Box>
      </Box>

      {/* TABS */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        centered
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          mb: 2,
          "& .MuiTab-root": {
            textTransform: "none",
            borderRadius: 2,
            px: 3,
            mx: 0.5,
            fontWeight: 600,
            background: "#f4f6f8",
            border: "1px solid #e5e7eb",
            color: "#475467"
          },
          "& .Mui-selected": {
            background: "#1976d2",
            color: "#fff",
            borderColor: "#1976d2"
          }
        }}
      >
        <Tab label="Overview" value="overview" />
        <Tab label="KYC & Bank" value="kyc" />
        <Tab label="Team" value="team" />
        <Tab label="Earnings" value="earnings" />
        <Tab label="History" value="history" />
      </Tabs>

      {/* ---------------- OVERVIEW TAB ---------------- */}
      {tab === "overview" && (
        <Box
          sx={{
            maxWidth: "1100px",  // ⭐ Wider content
            width: "100%",
            mx: "auto"
          }}
        >
          {/* STATS CARDS */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {[
              { title: "Team Members", value: "45", bg: "#f2f6ff" },
              { title: "Total BV", value: "12450", bg: "#fff5f8" },
              { title: "Total Earnings", value: "₹1,45,600", bg: "#f3fff4" },
              { title: "Current Month BV", value: "2340", bg: "#fff7f3" }
            ].map((s) => (
              <Grid item xs={6} sm={3} key={s.title}>
                <Paper sx={{ p: 2, borderRadius: 2, background: s.bg }}>
                  <Typography sx={{ fontWeight: 700 }}>{s.value}</Typography>
                  <Typography variant="caption">{s.title}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* BASIC INFO */}
          <Paper
            sx={{
              p: 2,
              mb: 2,
              border: "1px solid #dfe8ff",
              borderRadius: 2
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="caption">Phone</Typography>
                <Typography>{agent.phone}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">Join Date</Typography>
                <Typography>{agent.joinDate}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">Email</Typography>
                <Typography>{agent.email}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">Last Active</Typography>
                <Typography>2025-10-28 14:32</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* PACKAGE INFO */}
          <Paper
            sx={{
              p: 2,
              mb: 2,
              border: "1px solid #dfe8ff",
              borderRadius: 2
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  Package Information
                </Typography>
                <Typography>Silver Package</Typography>
                <Typography variant="caption">Package Value: ₹5,000</Typography>
              </Box>

              <Button
                variant="contained"
                onClick={onUpgrade}
                sx={{
                  backgroundColor: "#22c55e",
                  "&:hover": { backgroundColor: "#16a34a" },
                  borderRadius: "6px",
                  padding: "3px 12px",
                  minHeight: "28px",
                  fontSize: "13px",
                  textTransform: "none"
                }}
              >
                Upgrade
              </Button>
            </Box>
          </Paper>

          {/* NETWORK */}
          <Paper
            sx={{
              p: 2,
              border: "1px solid #dfe8ff",
              borderRadius: 2
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Network Position
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
                  <Typography variant="caption">Sponsor</Typography>
                  <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
                  <Typography variant="caption">Left Leg</Typography>
                  <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          {/* FOOTER BUTTONS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 3
            }}
          >
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
            <Button variant="contained" color="error">
              Suspend
            </Button>
            <Button variant="contained" onClick={onEditProfile}>
              Edit
            </Button>
          </Box>
        </Box>
      )}

      {/* ---------------- EARNINGS TAB ---------------- */}
      {tab === "earnings" && <EarningPage />}

      {/* ---------------- HISTORY TAB ---------------- */}
      {tab === "history" && (
        <HistoryPage agent={agent} onBack={onClose} onTabChange={handleTabChange} onEditProfile={onEditProfile} />
      )}
    </Box>
  );
};

export default AgentDetailsPage;

// import React from "react";
// import {
//   Box,
//   Avatar,
//   Typography,
//   Tabs,
//   Tab,
//   Grid,
//   Paper,
//   Button
// } from "@mui/material";

// import type { Agent } from "./types";
// import EarningPage from "./EarningPage";
// import HistoryPage from "./HistoryPage";
// import KYCViewPage from "./KYCViewPage";     // ⭐ ADDED
// import TeamViewPage from "./TeamViewPage";   // ⭐ ADDED

// interface Props {
//   agent: Agent;
//   onClose: () => void;
//   onKYCView: () => void;
//   onTeamView: () => void;
//   onEarningsView: () => void;
//   onHistoryView: () => void;
//   onEditProfile: () => void;
//   onUpgrade: () => void;
// }

// const AgentDetailsPage: React.FC<Props> = ({
//   agent,
//   onClose,
//   onKYCView,
//   onTeamView,
//   onEarningsView,
//   onHistoryView,
//   onEditProfile,
//   onUpgrade
// }) => {
//   const [tab, setTab] = React.useState<string>("overview");

//   const handleTabChange = (_: any, value: string) => {
//     if (value === "kyc") return setTab("kycView");
//     if (value === "team") return setTab("teamView");     // ⭐ ADDED
//     if (value === "earnings") return setTab("earnings");
//     if (value === "history") return setTab("history");
//     setTab(value);
//   };

//   return (
//     <Box sx={{ width: "100%", p: 3 }}>
//       {/* HEADER */}
//       <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
//         <Avatar src={agent.avatar} sx={{ width: 56, height: 56 }} />
//         <Box>
//           <Typography sx={{ fontWeight: 700 }}>{agent.name}</Typography>
//           <Typography variant="body2" color="text.secondary">
//             {agent.code} • Joined {agent.joinDate}
//           </Typography>
//         </Box>
//       </Box>

//       {/* TABS */}
//       <Tabs
//         value={tab}
//         onChange={handleTabChange}
//         centered
//         TabIndicatorProps={{ style: { display: "none" } }}
//         sx={{
//           mb: 2,
//           "& .MuiTab-root": {
//             textTransform: "none",
//             borderRadius: 2,
//             px: 3,
//             mx: 0.5,
//             fontWeight: 600,
//             background: "#f4f6f8",
//             border: "1px solid #e5e7eb",
//             color: "#475467"
//           },
//           "& .Mui-selected": {
//             background: "#1976d2",
//             color: "#fff",
//             borderColor: "#1976d2"
//           }
//         }}
//       >
//         <Tab label="Overview" value="overview" />
//         <Tab label="KYC & Bank" value="kyc" />
//         <Tab label="Team" value="team" />
//         <Tab label="Earnings" value="earnings" />
//         <Tab label="History" value="history" />
//       </Tabs>

//       {/* ---------------- OVERVIEW TAB ---------------- */}
//       {tab === "overview" && (
//         <Box
//           sx={{
//             maxWidth: "1100px",
//             width: "100%",
//             mx: "auto"
//           }}
//         >
//           {/* STATS CARDS */}
//           <Grid container spacing={2} sx={{ mb: 2 }}>
//             {[
//               { title: "Team Members", value: "45", bg: "#f2f6ff" },
//               { title: "Total BV", value: "12450", bg: "#fff5f8" },
//               { title: "Total Earnings", value: "₹1,45,600", bg: "#f3fff4" },
//               { title: "Current Month BV", value: "2340", bg: "#fff7f3" }
//             ].map((s) => (
//               <Grid item xs={6} sm={3} key={s.title}>
//                 <Paper sx={{ p: 2, borderRadius: 2, background: s.bg }}>
//                   <Typography sx={{ fontWeight: 700 }}>{s.value}</Typography>
//                   <Typography variant="caption">{s.title}</Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>

//           {/* BASIC INFO */}
//           <Paper
//             sx={{
//               p: 2,
//               mb: 2,
//               border: "1px solid #dfe8ff",
//               borderRadius: 2
//             }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Phone</Typography>
//                 <Typography>{agent.phone}</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Join Date</Typography>
//                 <Typography>{agent.joinDate}</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Email</Typography>
//                 <Typography>{agent.email}</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Last Active</Typography>
//                 <Typography>2025-10-28 14:32</Typography>
//               </Grid>
//             </Grid>
//           </Paper>

//           {/* PACKAGE INFO */}
//           <Paper
//             sx={{
//               p: 2,
//               mb: 2,
//               border: "1px solid #dfe8ff",
//               borderRadius: 2
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center"
//               }}
//             >
//               <Box>
//                 <Typography sx={{ fontWeight: 600 }}>
//                   Package Information
//                 </Typography>
//                 <Typography>Silver Package</Typography>
//                 <Typography variant="caption">Package Value: ₹5,000</Typography>
//               </Box>

//               <Button
//                 variant="contained"
//                 onClick={onUpgrade}
//                 sx={{
//                   backgroundColor: "#22c55e",
//                   "&:hover": { backgroundColor: "#16a34a" },
//                   borderRadius: "6px",
//                   padding: "3px 12px",
//                   minHeight: "28px",
//                   fontSize: "13px",
//                   textTransform: "none"
//                 }}
//               >
//                 Upgrade
//               </Button>
//             </Box>
//           </Paper>

//           {/* NETWORK */}
//           <Paper
//             sx={{
//               p: 2,
//               border: "1px solid #dfe8ff",
//               borderRadius: 2
//             }}
//           >
//             <Typography sx={{ fontWeight: 600, mb: 1 }}>
//               Network Position
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
//                   <Typography variant="caption">Sponsor</Typography>
//                   <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
//                 </Paper>
//               </Grid>
//               <Grid item xs={6}>
//                 <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
//                   <Typography variant="caption">Left Leg</Typography>
//                   <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Paper>

//           {/* FOOTER BUTTONS */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               gap: 2,
//               mt: 3
//             }}
//           >
//             <Button variant="outlined" onClick={onClose}>
//               Close
//             </Button>
//             <Button variant="contained" color="error">
//               Suspend
//             </Button>
//             <Button variant="contained" onClick={onEditProfile}>
//               Edit
//             </Button>
//           </Box>
//         </Box>
//       )}

//       {/* ---------------- KYC TAB ---------------- */}
//       {tab === "kycView" && (
//         <KYCViewPage agent={agent} onBack={() => setTab("overview")} />
//       )}

//       {/* ---------------- TEAM TAB ---------------- */}
//       {tab === "teamView" && (
//         <TeamViewPage agent={agent} onBack={() => setTab("overview")} />
//       )}

//       {/* ---------------- EARNINGS TAB ---------------- */}
//       {tab === "earnings" && <EarningPage />}

//       {/* ---------------- HISTORY TAB ---------------- */}
//       {tab === "history" && (
//         <HistoryPage
//           agent={agent}
//           onBack={onClose}
//           onTabChange={handleTabChange}
//           onEditProfile={onEditProfile}
//         />
//       )}
//     </Box>
//   );
// };

// export default AgentDetailsPage;



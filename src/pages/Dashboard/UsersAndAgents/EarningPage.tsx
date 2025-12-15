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

// interface EarningPageProps {
//   agent?: any;
//   onOverview?: () => void;
//   onKYC?: () => void;
//   onTeam?: () => void;
//   onHistory?: () => void;
//   onClose?: () => void;
//   onSuspend?: () => void;
//   onEdit?: () => void;
// }

// const EarningPage: React.FC<EarningPageProps> = ({
//   agent = {},
//   onOverview = () => {},
//   onKYC = () => {},
//   onTeam = () => {},
//   onHistory = () => {},
//   onClose = () => {},
//   onSuspend = () => {},
//   onEdit = () => {}
// }) => {
//   return (
//     <Box
//       sx={{
//         p: 3,
//         background: "#fff",
//         borderRadius: "14px",
//         width: "720px",
//         mx: "auto"
//       }}
//     >
//       {/* HEADER */}
//       <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
//         <Avatar src={agent.avatar} sx={{ width: 60, height: 60 }} />

//         <Box>
//           <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
//             {agent.name || "Rajesh Kumar"}
//           </Typography>

//           <Typography sx={{ fontSize: "13px", color: "#707070" }}>
//             {agent.code || "AGT-10456"} • Joined {agent.joinDate || "15 Jun 2023"}
//           </Typography>
//         </Box>
//       </Box>

//       {/* TABS */}
//       <Tabs
//         value="earnings"
//         TabIndicatorProps={{ style: { display: "none" } }}
//         centered
//         sx={{
//           mb: 3,
//           "& .MuiTab-root": {
//             textTransform: "none",
//             borderRadius: "8px",
//             minHeight: 36,
//             px: 3,
//             mx: 1,
//             fontWeight: 600,
//             background: "#F4F6F8",
//             color: "#5A5A5A",
//             border: "1px solid #E1E5EB"
//           },
//           "& .Mui-selected": {
//             background: "#1A73E8",
//             color: "#fff",
//             borderColor: "#1A73E8"
//           }
//         }}
//       >
//         <Tab label="Overview" value="overview" onClick={onOverview} />
//         <Tab label="KYC & Bank" value="kyc" onClick={onKYC} />
//         <Tab label="Team" value="team" onClick={onTeam} />
//         <Tab label="Earnings" value="earnings" />
//         <Tab label="History" value="history" onClick={onHistory} />
//       </Tabs>

//       {/* EARNING SUMMARY MAIN OUTER BOX */}
//       <Paper
//         sx={{
//           p: 3,
//           borderRadius: "12px",
//           border: "2px solid #B3C9F6",
//           background: "#ffffff",
//           mb: 3
//         }}
//       >
//         <Typography
//           sx={{
//             fontWeight: 700,
//             fontSize: "16px",
//             color: "#1A3A8A",
//             mb: 2
//           }}
//         >
//           Earnings Summary
//         </Typography>

//         {/* 2 × 2 GRID AS PER YOUR DESIGN */}
//         <Grid container spacing={3}>
//           {[ 
//             { title: "Total Earnings", value: "₹1,45,600" },
//             { title: "Current Month", value: "₹23,400" },
//             { title: "Last Payout", value: "₹12,450" },
//             { title: "Pending Payout", value: "₹8,900" }
//           ].map((item, index) => (
//             <Grid item xs={6} key={index}>
//               <Paper
//                 sx={{
//                   p: 2.5,
//                   borderRadius: "10px",
//                   background: "#F5F8FC",
//                   border: "1px solid #E0E7F5",
//                   height: "100px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center"
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     color: "#1A3A8A",
//                     fontWeight: 600,
//                     mb: 0.5
//                   }}
//                 >
//                   {item.title}
//                 </Typography>

//                 <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
//                   {item.value}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Paper>

//       {/* FOOTER BUTTONS */}
//       <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//         <Button
//           variant="outlined"
//           sx={{ width: 120, textTransform: "none" }}
//           onClick={onClose}
//         >
//           Close
//         </Button>

//         <Button
//           variant="contained"
//           color="error"
//           sx={{ width: 120, textTransform: "none" }}
//           onClick={onSuspend}
//         >
//           Suspend
//         </Button>

//         <Button
//           variant="contained"
//           sx={{
//             width: 120,
//             textTransform: "none",
//             background: "#1A73E8",
//             "&:hover": { background: "#1558B3" }
//           }}
//           onClick={onEdit}
//         >
//           Edit
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default EarningPage;








import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Button,
} from "@mui/material";

interface EarningPageProps {
  agent?: any;
  onTabChange: (tab: number) => void;
  onClose?: () => void;
  onSuspend?: () => void;
  onEdit?: () => void;
}

const EarningPage: React.FC<EarningPageProps> = ({
  agent = {},
  onTabChange,
  onClose = () => {},
  onSuspend = () => {},
  onEdit = () => {},
}) => {
  const [tab, setTab] = useState(3); // Earnings index

  const handleTabChange = (_: any, newValue: number) => {
    setTab(newValue);
    onTabChange(newValue); // 🔥 THIS switches dialog
  };

  return (
    <Box
      sx={{
        width: 680,
        mx: "auto",
        mt: 2,
        background: "#fff",
        borderRadius: "12px",
        p: 3,
        boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
      }}
    >
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar src={agent.avatar} sx={{ width: 50, height: 50 }} />
        <Box>
          <Typography fontWeight={700}>
            {agent.name || "Rajesh Kumar"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {agent.code || "AGT-10456"} • Joined{" "}
            {agent.joinDate || "15/02/2024"}
          </Typography>
        </Box>
      </Box>

      {/* ✅ WORKING TABS */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        centered
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            px: 3,
            mx: 0.5,
            borderRadius: "8px",
            background: "#f4f6f8",
            color: "#475467",
            border: "1px solid #e5e7eb",
          },
          "& .Mui-selected": {
            background: "#1976d2",
            color: "#fff",
            borderColor: "#1976d2",
          },
        }}
      >
        <Tab label="Overview" />
        <Tab label="KYC & Bank" />
        <Tab label="Team" />
        <Tab label="Earnings" />
        <Tab label="History" />
      </Tabs>

      {/* CONTENT */}
      <Box
        sx={{
          border: "2px solid #1A73E8",
          borderRadius: "12px",
          p: 3,
          background: "#fff",
        }}
      >
        <Typography fontWeight={700} color="#1A73E8" mb={2}>
          Earnings Summary
        </Typography>

        <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={2}>
          {[
            ["Total Earnings", "₹1,45,600"],
            ["Current Month", "₹23,400"],
            ["Last Payout", "₹12,450"],
            ["Pending Payout", "₹8,300"],
          ].map(([label, value]) => (
            <Box key={label} p={2} borderRadius={2} bgcolor="#f5f5f5">
              <Typography variant="body2">{label}</Typography>
              <Typography fontWeight="bold">{value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="outlined" onClick={onClose}>
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

export default EarningPage;

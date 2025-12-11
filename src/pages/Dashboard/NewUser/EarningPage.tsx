 

// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Paper,
//   Avatar,
//   Tabs,
//   Tab,
// } from "@mui/material";

// interface EarningPageProps {
//   onTabChange?: (index: number) => void;
//   onClose?: () => void;
//   onSuspend?: () => void;
//   onEdit?: () => void;
//   selectedTab?: number;
//   agent?: any;
// }

// const EarningPage: React.FC<EarningPageProps> = ({
//   onTabChange = () => {},
//   onClose = () => {},
//   onSuspend = () => {},
//   onEdit = () => {},
//   selectedTab = 3, // Earnings tab
//   agent,
// }) => {
//   return (
//     <Box sx={{ width: "100%", p: 3 }}>
      
//       {/* ---------- HEADER ---------- */}
//       <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//         <Avatar
//           src="https://i.pravatar.cc/150?img=32"
//           sx={{ width: 55, height: 55, mr: 2 }}
//         />
//         <Box>
//           <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
//             {agent?.name || "Rajesh Kumar"}
//           </Typography>

//           <Typography sx={{ color: "#777", fontSize: "13px" }}>
//             {agent?.agentCode || "AGT-1045"} • Joined{" "}
//             {agent?.joinedDate || "15/8/2024"}
//           </Typography>
//         </Box>
//       </Box>

//       {/* ---------- TABS ---------- */}
//       <Tabs
//         value={selectedTab}
//         onChange={(_, v) => onTabChange(v)}
//         variant="scrollable"
//         scrollButtons="auto"
//         sx={{
//           background: "#f7f9fc",
//           borderRadius: 2,
//           mb: 3,
//           "& .Mui-selected": {
//             background: "#0b5cad",
//             color: "#fff !important",
//           },
//         }}
//       >
//         <Tab label="Overview" />
//         <Tab label="KYC & Bank" />
//         <Tab label="Team" />
//         <Tab label="Earnings" />
//         <Tab label="History" />
//       </Tabs>

//       {/* ---------- EARNINGS SUMMARY ---------- */}
//       <Paper
//         sx={{
//           border: "2px solid skyblue",
//           borderRadius: 2,
//           p: 3,
//           mb: 3,
//           background: "#fff",
//         }}
//       >
//         <Typography sx={{ fontWeight: 700, fontSize: "18px", mb: 2 }}>
//           Earnings Summary
//         </Typography>

//         <Grid container spacing={2}>
//           {[
//             { label: "Total Earnings", value: "₹1,45,600" },
//             { label: "Current Month", value: "₹23,400" },
//             { label: "Last Payout", value: "₹12,450" },
//             { label: "Pending Payout", value: "₹8,300" },
//           ].map((item) => (
//             <Grid item xs={6} key={item.label}>
//               <Card sx={{ background: "#f5f5f5", borderRadius: 2 }}>
//                 <CardContent>
//                   <Typography fontWeight={600}>{item.label}</Typography>
//                   <Typography sx={{ mt: 1, fontWeight: 700 }}>
//                     {item.value}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Paper>

//       {/* ---------- FOOTER BUTTONS ---------- */}
//       <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        
//         <Button variant="outlined" sx={{ width: 120 }} onClick={onClose}>
//           Close
//         </Button>

//         <Button
//           variant="contained"
//           color="error"
//           sx={{ width: 120 }}
//           onClick={onSuspend}   // 🔥 THIS will open SuspendPage.tsx
//         >
//           Suspend
//         </Button>

//         <Button
//           variant="contained"
//           sx={{ width: 120 }}
//           onClick={onEdit}
//         >
//           Edit
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default EarningPage;





import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Avatar,
  Tabs,
  Tab,
} from "@mui/material";

interface EarningPageProps {
  onTabChange?: (index: number) => void;
  onClose?: () => void;
  onSuspend?: () => void;
  onEdit?: () => void;
  selectedTab?: number;
  agent?: any;
}

const EarningPage: React.FC<EarningPageProps> = ({
  onTabChange = () => {},
  onClose = () => {},
  onSuspend = () => {},
  onEdit = () => {},
  selectedTab = 3,
  agent,
}) => {
  return (
    <Box sx={{ width: "100%", p: 3 }}>
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar
          src={agent?.avatar || "https://i.pravatar.cc/150?img=32"}
          sx={{ width: 56, height: 56, mr: 2 }}
        />

        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
            {agent?.name || "Rajesh Kumar"}
          </Typography>

          <Typography sx={{ color: "#6b7280", fontSize: "13px" }}>
            {agent?.agentCode || "AGT-1045"} • Joined{" "}
            {agent?.joinedDate || "15/8/2024"}
          </Typography>
        </Box>
      </Box>

      {/* TABS — MATCHING STYLE */}
      <Tabs
        value={selectedTab}
        onChange={(_, v) => onTabChange(v)}
        scrollButtons="auto"
        variant="scrollable"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            textTransform: "none",
            borderRadius: "12px",
            minHeight: 38,
            px: 3,
            mx: 1,
            fontWeight: 600,
            background: "#f8f9fb",
            color: "#4b5563",
            border: "1px solid #e5e7eb",
            transition: "0.25s",
          },
          "& .MuiTab-root.Mui-selected": {
            background: "#0b5cad",
            color: "#fff",
            borderColor: "#0b5cad",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          },
          "& .MuiTab-root:hover": {
            background: "#eef2f7",
          },
        }}
      >
        <Tab label="Overview" value={0} />
        <Tab label="KYC & Bank" value={1} />
        <Tab label="Team" value={2} />
        <Tab label="Earnings" value={3} />
        <Tab label="History" value={4} />
      </Tabs>

      {/* EARNINGS SUMMARY */}
      <Paper
        sx={{
          border: "1.5px solid #c3d9ff",
          borderRadius: 2,
          p: 3,
          mb: 3,
          background: "#fff",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "18px", mb: 2 }}>
          Earnings Summary
        </Typography>

        <Grid container spacing={2}>
          {[
            { label: "Total Earnings", value: "₹1,45,600" },
            { label: "Current Month", value: "₹23,400" },
            { label: "Last Payout", value: "₹12,450" },
            { label: "Pending Payout", value: "₹8,300" },
          ].map((item) => (
            <Grid item xs={6} sm={6} md={3} key={item.label}>
              <Card
                sx={{
                  background: "#f5f6fa",
                  borderRadius: 2,
                  height: "100%",
                  border: "1px solid #e2e8f0",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontWeight={600} sx={{ color: "#475569" }}>
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{ mt: 1, fontWeight: 700, fontSize: "18px" }}
                  >
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* FOOTER BUTTONS */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="outlined" sx={{ width: 120 }} onClick={onClose}>
          Close
        </Button>

        <Button
          variant="contained"
          color="error"
          sx={{ width: 120 }}
          onClick={onSuspend}
        >
          Suspend
        </Button>

        <Button variant="contained" sx={{ width: 120 }} onClick={onEdit}>
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default EarningPage;




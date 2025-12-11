// // import React, { useState } from "react";
// // import { Box } from "@mui/material";

// // import AgentListPage from "./AgentListPage";
// // import AgentDetailsPage from "./AgentDetailsPage";
// // import KYCViewPage from "./KYCViewPage";
// // import TeamViewPage from "./TeamViewPage";
// // import DialogPopup from "./DialogPopup";
// // import type { Agent } from "./types";

// // type PopupPage = "none" | "overview" | "kyc" | "team";

// // const MainApp: React.FC = () => {
// //   const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
// // //   const [popupPage, setPopupPage] = useState<PopupPage>("none");
// //   const [popupPage, setPopupPage] = useState<string>("none");

// //   const openOverview = (agent: Agent) => {
// //     setSelectedAgent(agent);
// //     setPopupPage("overview");
// //   };

// //   const closeAll = () => {
// //     setPopupPage("none");
// //     setSelectedAgent(null);
// //   };
// // console.log(popupPage);
// // const openTeam =()=>{
// //     setPopupPage("team")
// //     console.log("Hello");
// // }
// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <AgentListPage onViewDetails={openOverview} />

// //       {/* Overview dialog */}
// //       <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
// //         {selectedAgent && (
// //           <AgentDetailsPage
// //             agent={selectedAgent}
// //             onClose={closeAll}
// //             onKYCView={() => setPopupPage("kyc")}
// //             onTeamView={ openTeam}

// //           />
// //         )}
// //       </DialogPopup>

// //       {/* KYC dialog */}
// //       <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
// //         {selectedAgent && (
// //           <KYCViewPage agent={selectedAgent} onBack={() => setPopupPage("overview")} />
// //         )}
// //       </DialogPopup>

// //       {/* Team dialog */}
// //       <DialogPopup open={popupPage === "team"} onClose={closeAll}>
// //         {selectedAgent && (
// //           <TeamViewPage agent={selectedAgent} onBack={() => setPopupPage("overview")} />
// //         )}
// //       </DialogPopup>
// //     </Box>
// //   );
// // };

// // export default MainApp;


// // import React, { useState } from "react";
// // import { Box } from "@mui/material";

// // import AgentListPage from "./AgentListPage";
// // import AgentDetailsPage from "./AgentDetailsPage";
// // import KYCViewPage from "./KYCViewPage";
// // import TeamViewPage from "./TeamViewPage";
// // import DialogPopup from "./DialogPopup";
// // import type { Agent } from "./types";

// // type PopupPage = "none" | "overview" | "kyc" | "team";

// // const MainApp: React.FC = () => {
// //   const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
// //   const [popupPage, setPopupPage] = useState<PopupPage>("none");

// //   const openOverview = (agent: Agent) => {
// //     setSelectedAgent(agent);
// //     setPopupPage("overview");
// //   };

// //   const closeAll = () => {
// //     setPopupPage("none");
// //     setSelectedAgent(null);
// //   };

// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <AgentListPage onViewDetails={openOverview} />

// //       {/* Agent Overview Dialog */}
// //       <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
// //         {selectedAgent && (
// //           <AgentDetailsPage
// //             agent={selectedAgent}
// //             onClose={closeAll}
// //             onKYCView={() => setPopupPage("kyc")}
// //             onTeamView={() => setPopupPage("team")}
// //           />
// //         )}
// //       </DialogPopup>

// //       {/* KYC Dialog */}
// //       <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
// //         {selectedAgent && (
// //           <KYCViewPage
// //             agent={selectedAgent}
// //             onBack={() => setPopupPage("overview")}
// //           />
// //         )}
// //       </DialogPopup>

// //       {/* Team Dialog */}
// //       <DialogPopup open={popupPage === "team"} onClose={closeAll}>
// //         {selectedAgent && (
// //           <TeamViewPage
// //             agent={selectedAgent}
// //             onBack={() => setPopupPage("overview")}
// //           />
// //         )}
// //       </DialogPopup>

// //     </Box>
// //   );
// // };

// // export default MainApp;




// import React, { useState } from "react";
// import { Box } from "@mui/material";

// import AgentListPage from "./AgentListPage";
// import AgentDetailsPage from "./AgentDetailsPage";
// import KYCViewPage from "./KYCViewPage";
// import TeamViewPage from "./TeamViewPage";
// import EarningPage from "./EarningPage";
// import HistoryPage from "./HistoryPage";   // ✅ NEW IMPORT
// import DialogPopup from "./DialogPopup";

// import type { Agent } from "./types";

// type PopupPage =
//   | "none"
//   | "overview"
//   | "kyc"
//   | "team"
//   | "earnings"
//   | "history";   // ✅ ADDED HISTORY

// const MainApp: React.FC = () => {
//   const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
//   const [popupPage, setPopupPage] = useState<PopupPage>("none");

//   const openOverview = (agent: Agent) => {
//     setSelectedAgent(agent);
//     setPopupPage("overview");
//   };

//   const closeAll = () => {
//     setPopupPage("none");
//     setSelectedAgent(null);
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* Agent List Page */}
//       <AgentListPage onViewDetails={openOverview} />

//       {/* OVERVIEW POPUP */}
//       <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
//         {selectedAgent && (
//           <AgentDetailsPage
//             agent={selectedAgent}
//             onClose={closeAll}
//             onKYCView={() => setPopupPage("kyc")}
//             onTeamView={() => setPopupPage("team")}
//             onEarningsView={() => setPopupPage("earnings")}
//             onHistoryView={() => setPopupPage("history")}   // ✅ ADDED
//           />
//         )}
//       </DialogPopup>

//       {/* KYC POPUP */}
//       <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
//         {selectedAgent && (
//           <KYCViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* TEAM POPUP */}
//       <DialogPopup open={popupPage === "team"} onClose={closeAll}>
//         {selectedAgent && (
//           <TeamViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* EARNINGS POPUP */}
//       <DialogPopup open={popupPage === "earnings"} onClose={closeAll}>
//         <EarningPage />
//       </DialogPopup>

//       {/* HISTORY POPUP — NEW! */}
//       <DialogPopup open={popupPage === "history"} onClose={closeAll}>
//         <HistoryPage />   {/* ✅ Load HistoryPage here */}
//       </DialogPopup>
//     </Box>
//   );
// };

// export default MainApp;

// import { useState } from "react";
// import { Box } from "@mui/material";

// import AgentListPage from "./AgentListPage";
// import AgentDetailsPage from "./AgentDetailsPage";
// import KYCViewPage from "./KYCViewPage";
// import TeamViewPage from "./TeamViewPage";
// import EarningPage from "./EarningPage";
// import HistoryPage from "./HistoryPage";
// import EditAgentProfile from "./EditAgentProfile";

// import DialogPopup from "./DialogPopup";
// import type { Agent } from "./types";

// type PopupPage =
//   | "none"
//   | "overview"
//   | "kyc"
//   | "team"
//   | "earnings"
//   | "history"
//   | "editProfile";   // ✅ Added Edit Profile popup

// const MainApp: React.FC = () => {
//   const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
//   const [popupPage, setPopupPage] = useState<PopupPage>("none");

//   const openOverview = (agent: Agent) => {
//     setSelectedAgent(agent);
//     setPopupPage("overview");
//   };

//   const closeAll = () => {
//     setPopupPage("none");
//     setSelectedAgent(null);
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* Agent List Page */}
//       <AgentListPage onViewDetails={openOverview} />

//       {/* OVERVIEW POPUP */}
//       <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
//         {selectedAgent && (
//           <AgentDetailsPage
//             agent={selectedAgent}
//             onClose={closeAll}
//             onKYCView={() => setPopupPage("kyc")}
//             onTeamView={() => setPopupPage("team")}
//             onEarningsView={() => setPopupPage("earnings")}
//             onHistoryView={() => setPopupPage("history")}
//           />
//         )}
//       </DialogPopup>

//       {/* KYC POPUP */}
//       <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
//         {selectedAgent && (
//           <KYCViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* TEAM POPUP */}
//       <DialogPopup open={popupPage === "team"} onClose={closeAll}>
//         {selectedAgent && (
//           <TeamViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* EARNINGS POPUP */}
//       <DialogPopup open={popupPage === "earnings"} onClose={closeAll}>
//         <EarningPage />
//       </DialogPopup>

//       {/* HISTORY POPUP */}
//       <DialogPopup open={popupPage === "history"} onClose={closeAll}>
//         <HistoryPage onEditProfile={() => setPopupPage("editProfile")} />
//       </DialogPopup>

//       {/* EDIT PROFILE POPUP */}
//      <DialogPopup open={popupPage === "editProfile"}>
//   <EditAgentProfile onBack={() => setPopupPage("history")} />
// </DialogPopup>

//     </Box>
//   );
// };

// export default MainApp;


// import { useState } from "react";
// import { Box } from "@mui/material";

// import AgentListPage from "./AgentListPage";
// import AgentDetailsPage from "./AgentDetailsPage";
// import KYCViewPage from "./KYCViewPage";
// import TeamViewPage from "./TeamViewPage";
// import EarningPage from "./EarningPage";
// import HistoryPage from "./HistoryPage";
// import EditAgentProfile from "./EditAgentProfile";

// import DialogPopup from "./DialogPopup";
// import type { Agent } from "./types";

// type PopupPage =
//   | "none"
//   | "overview"
//   | "kyc"
//   | "team"
//   | "earnings"
//   | "history"
//   | "editProfile";

// const MainApp: React.FC = () => {
//   const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
//   const [popupPage, setPopupPage] = useState<PopupPage>("none");

//   const openOverview = (agent: Agent) => {
//     setSelectedAgent(agent);
//     setPopupPage("overview");
//   };

//   const closeAll = () => {
//     setPopupPage("none");
//     setSelectedAgent(null);
//   };

//   return (
//     <Box sx={{ p: 3 }}>

//       {/* AGENT LIST PAGE */}
//       <AgentListPage onViewDetails={openOverview} />

//       {/* OVERVIEW POPUP */}
//       <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
//         {selectedAgent && (
//           <AgentDetailsPage
//             agent={selectedAgent}
//             onClose={closeAll}
//             onKYCView={() => setPopupPage("kyc")}
//             onTeamView={() => setPopupPage("team")}
//             onEarningsView={() => setPopupPage("earnings")}
//             onHistoryView={() => setPopupPage("history")}
//           />
//         )}
//       </DialogPopup>

//       {/* KYC POPUP */}
//       <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
//         {selectedAgent && (
//           <KYCViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* TEAM POPUP */}
//       <DialogPopup open={popupPage === "team"} onClose={closeAll}>
//         {selectedAgent && (
//           <TeamViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* EARNINGS POPUP */}
//       <DialogPopup open={popupPage === "earnings"} onClose={closeAll}>
//         <EarningPage onBack={() => setPopupPage("overview")} />
//       </DialogPopup>

//       {/* HISTORY POPUP */}
//       <DialogPopup open={popupPage === "history"} onClose={closeAll}>
//         {selectedAgent && (
//           <HistoryPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}       // ✅ Close now works
//             onEditProfile={() => setPopupPage("editProfile")}
//           />
//         )}
//       </DialogPopup>

//       {/* EDIT PROFILE POPUP */}
//       <DialogPopup open={popupPage === "editProfile"} onClose={closeAll}>
//         <EditAgentProfile
//           agent={selectedAgent}
//           onBack={() => setPopupPage("history")}
//         />
//       </DialogPopup>

//     </Box>
//   );
// };

// export default MainApp;



// import { useState } from "react";
// import { Box } from "@mui/material";

// import AgentListPage from "./AgentListPage";
// import AgentDetailsPage from "./AgentDetailsPage";
// import KYCViewPage from "./KYCViewPage";
// import TeamViewPage from "./TeamViewPage";
// import EarningPage from "./EarningPage";
// import HistoryPage from "./HistoryPage";
// import EditAgentProfile from "./EditAgentProfile";

// import DialogPopup from "./DialogPopup";
// import type { Agent } from "./types";

// type PopupPage =
//   | "none"
//   | "overview"
//   | "kyc"
//   | "team"
//   | "earnings"
//   | "history"
//   | "editProfile";

// const MainApp: React.FC = () => {
//   const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
//   const [popupPage, setPopupPage] = useState<PopupPage>("none");

//   const openOverview = (agent: Agent) => {
//     setSelectedAgent(agent);
//     setPopupPage("overview");
//   };

//   const closeAll = () => {
//     setPopupPage("none");
//     setSelectedAgent(null);
//   };

//   return (
//     <Box sx={{ p: 3 }}>

//       {/* AGENT LIST PAGE */}
//       <AgentListPage onViewDetails={openOverview} />

//       {/* OVERVIEW POPUP */}
//       <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
//         {selectedAgent && (
//           <AgentDetailsPage
//             agent={selectedAgent}
//             onClose={closeAll}
//             onKYCView={() => setPopupPage("kyc")}
//             onTeamView={() => setPopupPage("team")}
//             onEarningsView={() => setPopupPage("earnings")}
//             onHistoryView={() => setPopupPage("history")}
//           />
//         )}
//       </DialogPopup>

//       {/* KYC POPUP */}
//       <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
//         {selectedAgent && (
//           <KYCViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* TEAM POPUP */}
//       <DialogPopup open={popupPage === "team"} onClose={closeAll}>
//         {selectedAgent && (
//           <TeamViewPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//           />
//         )}
//       </DialogPopup>

//       {/* EARNINGS POPUP */}
//       <DialogPopup open={popupPage === "earnings"} onClose={closeAll}>
//         <EarningPage
//           selectedTab={3}
//           onClose={() => setPopupPage("overview")}
//           onEdit={() => setPopupPage("editProfile")}
//           onSuspend={() => console.log("Suspend clicked")}
//           onTabChange={(tab) => {
//             if (tab === 0) setPopupPage("overview");
//             if (tab === 1) setPopupPage("kyc");
//             if (tab === 2) setPopupPage("team");
//             if (tab === 3) setPopupPage("earnings");
//             if (tab === 4) setPopupPage("history");
//           }}
//         />
//       </DialogPopup>

//       {/* HISTORY POPUP */}
//       <DialogPopup open={popupPage === "history"} onClose={closeAll}>
//         {selectedAgent && (
//           <HistoryPage
//             agent={selectedAgent}
//             onBack={() => setPopupPage("overview")}
//             onEditProfile={() => setPopupPage("editProfile")}
//             onTabChange={(tab) => {
//               if (tab === 0) setPopupPage("overview");
//               if (tab === 1) setPopupPage("kyc");
//               if (tab === 2) setPopupPage("team");
//               if (tab === 3) setPopupPage("earnings");
//               if (tab === 4) setPopupPage("history");
//             }}
//           />
//         )}
//       </DialogPopup>

//       {/* EDIT PROFILE POPUP */}
//       <DialogPopup open={popupPage === "editProfile"} onClose={closeAll}>
//         <EditAgentProfile
//           agent={selectedAgent}
//           onBack={() => setPopupPage("history")}
//         />
//       </DialogPopup>

//     </Box>
//   );
// };

// export default MainApp;

import { useState } from "react";
import { Box } from "@mui/material";

import AgentListPage from "./AgentListPage";
import AgentDetailsPage from "./AgentDetailsPage";
import KYCViewPage from "./KYCViewPage";
import TeamViewPage from "./TeamViewPage";
import EarningPage from "./EarningPage";
import HistoryPage from "./HistoryPage";
import EditAgentProfile from "./EditAgentProfile";
import SuspendPage from "./SuspendPage";
import UpgradePackagePage from "./UpgradePackagePage";    // ✅ UPDATED IMPORT

import DialogPopup from "./DialogPopup";
import type { Agent } from "./types";

type PopupPage =
  | "none"
  | "overview"
  | "kyc"
  | "team"
  | "earnings"
  | "history"
  | "editProfile"
  | "suspend"
  | "upgrade";       // ⭐ UPGRADE POPUP

const MainApp: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [popupPage, setPopupPage] = useState<PopupPage>("none");

  const openOverview = (agent: Agent) => {
    setSelectedAgent(agent);
    setPopupPage("overview");
  };

  const closeAll = () => {
    setPopupPage("none");
    setSelectedAgent(null);
  };

  return (
    <Box sx={{ p: 3 }}>

      {/* AGENT LIST PAGE */}
      <AgentListPage onViewDetails={openOverview} />

      {/* OVERVIEW POPUP */}
      <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
        {selectedAgent && (
          <AgentDetailsPage
            agent={selectedAgent}
            onClose={closeAll}
            onKYCView={() => setPopupPage("kyc")}
            onTeamView={() => setPopupPage("team")}
            onEarningsView={() => setPopupPage("earnings")}
            onHistoryView={() => setPopupPage("history")}
            onUpgrade={() => setPopupPage("upgrade")} onEditProfile={function (): void {
              throw new Error("Function not implemented.");
            } }          />
        )}
      </DialogPopup>

      {/* KYC POPUP */}
      <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
        {selectedAgent && (
          <KYCViewPage
            agent={selectedAgent}
            onBack={() => setPopupPage("overview")}
          />
        )}
      </DialogPopup>

      {/* TEAM POPUP */}
      <DialogPopup open={popupPage === "team"} onClose={closeAll}>
        {selectedAgent && (
          <TeamViewPage
            agent={selectedAgent}
            onBack={() => setPopupPage("overview")}
          />
        )}
      </DialogPopup>

      {/* EARNINGS POPUP */}
      <DialogPopup open={popupPage === "earnings"} onClose={closeAll}>
        <EarningPage
          selectedTab={3}
          agent={selectedAgent}
          onClose={() => setPopupPage("overview")}
          onEdit={() => setPopupPage("editProfile")}
          onSuspend={() => setPopupPage("suspend")}
          onUpgrade={() => setPopupPage("upgrade")}   
          onTabChange={(tab) => {
            if (tab === 0) setPopupPage("overview");
            if (tab === 1) setPopupPage("kyc");
            if (tab === 2) setPopupPage("team");
            if (tab === 3) setPopupPage("earnings");
            if (tab === 4) setPopupPage("history");
          }}
        />
      </DialogPopup>

      {/* HISTORY POPUP */}
      <DialogPopup open={popupPage === "history"} onClose={closeAll}>
        {selectedAgent && (
          <HistoryPage
            agent={selectedAgent}
            onBack={() => setPopupPage("overview")}
            onEditProfile={() => setPopupPage("editProfile")}
            onTabChange={(tab) => {
              if (tab === 0) setPopupPage("overview");
              if (tab === 1) setPopupPage("kyc");
              if (tab === 2) setPopupPage("team");
              if (tab === 3) setPopupPage("earnings");
              if (tab === 4) setPopupPage("history");
            }}
          />
        )}
      </DialogPopup>

      {/* EDIT PROFILE POPUP */}
      <DialogPopup open={popupPage === "editProfile"} onClose={closeAll}>
        <EditAgentProfile
          agent={selectedAgent}
          onBack={() => setPopupPage("history")}
        />
      </DialogPopup>

      {/* SUSPEND POPUP */}
      <DialogPopup open={popupPage === "suspend"} onClose={closeAll}>
        <SuspendPage
          agent={selectedAgent}
          onCancel={() => setPopupPage("earnings")}
        />
      </DialogPopup>

      {/* ⭐ NEW UPGRADE PACKAGE POPUP */}
      <DialogPopup open={popupPage === "upgrade"} onClose={closeAll}>
        <UpgradePackagePage
          agent={selectedAgent}
          onCancel={() => setPopupPage("overview")}
          onConfirm={() => setPopupPage("overview")}
        />
      </DialogPopup>

    </Box>
  );
};

export default MainApp;

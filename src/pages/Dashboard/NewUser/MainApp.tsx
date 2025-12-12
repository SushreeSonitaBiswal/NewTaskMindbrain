 
// import { useState } from "react";
// import { Box } from "@mui/material";

// import AgentListPage from "./AgentListPage";
// import AgentDetailsPage from "./AgentDetailsPage";
// import KYCViewPage from "./KYCViewPage";
// import TeamViewPage from "./TeamViewPage";
// import EarningPage from "./EarningPage";
// import HistoryPage from "./HistoryPage";
// import EditAgentProfile from "./EditAgentProfile";
// import SuspendPage from "./SuspendPage";
// import UpgradePackagePage from "./UpgradePackagePage";
// import UpgradeSummaryPage from "./UpgradeSummaryPage";

// import DialogPopup from "./DialogPopup";
// import type { Agent } from "./types";

// type PopupPage =
//   | "none"
//   | "overview"
//   | "kyc"
//   | "team"
//   | "earnings"
//   | "history"
//   | "editProfile"
//   | "suspend"
//   | "upgrade"
//   | "upgradeSummary";

// const MainApp = () => {
//   const [selectedAgent, setSelectedAgent] = useState(null);
//   const [popupPage, setPopupPage] = useState("none");
//   const [selectedUpgrade, setSelectedUpgrade] = useState("");

//   const openOverview = (agent) => {
//     setSelectedAgent(agent);
//     setPopupPage("overview");
//   };

//   const closeAll = () => {
//     setPopupPage("none");
//     setSelectedAgent(null);
//     setSelectedUpgrade("");
//   };

//   return (
//     <Box sx={{ p: 3 }}>
      
//       {/* AGENT LIST */}
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
//             onUpgrade={() => setPopupPage("upgrade")}
//             onEditProfile={() => setPopupPage("editProfile")}
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
//           agent={selectedAgent}
//           onClose={() => setPopupPage("overview")}
//           onEdit={() => setPopupPage("editProfile")}
//           onSuspend={() => setPopupPage("suspend")}
//           onUpgrade={() => setPopupPage("upgrade")}
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

//       {/* EDIT PROFILE */}
//       <DialogPopup open={popupPage === "editProfile"} onClose={closeAll}>
//         <EditAgentProfile
//           agent={selectedAgent}
//           onBack={() => setPopupPage("history")}
//         />
//       </DialogPopup>

//       {/* SUSPEND POPUP */}
//       <DialogPopup open={popupPage === "suspend"} onClose={closeAll}>
//         <SuspendPage
//           agent={selectedAgent}
//           onCancel={() => setPopupPage("earnings")}
//         />
//       </DialogPopup>

//       {/* UPGRADE PACKAGE */}
//       <DialogPopup open={popupPage === "upgrade"} onClose={closeAll}>
//         <UpgradePackagePage
//           agent={selectedAgent}
//           onCancel={() => setPopupPage("overview")}
//           onConfirm={(pkg) => {
//             setSelectedUpgrade(pkg);
//             setPopupPage("upgradeSummary");
//           }}
//         />
//       </DialogPopup>

//       {/* UPGRADE SUMMARY */}
//       <DialogPopup open={popupPage === "upgradeSummary"} onClose={closeAll}>
//         <UpgradeSummaryPage
//           packageName={selectedUpgrade}   // ✔ Correct prop name
//           onFinish={() => setPopupPage("overview")}
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
import UpgradePackagePage from "./UpgradePackagePage";
import UpgradeSummaryPage from "./UpgradeSummaryPage";

import VerificationPage from "./VerificationPage";   // 🔥 Add this

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
  | "upgrade"
  | "upgradeSummary"
  | "verification";   // 🔥 New popup

const MainApp = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [popupPage, setPopupPage] = useState<PopupPage>("none");
  const [selectedUpgrade, setSelectedUpgrade] = useState("");

  const openOverview = (agent: Agent) => {
    setSelectedAgent(agent);
    setPopupPage("overview");
  };

  const closeAll = () => {
    setPopupPage("none");
    setSelectedAgent(null);
    setSelectedUpgrade("");
  };

  return (
    <Box sx={{ p: 3 }}>
      
      {/* AGENT LIST */}
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
            onUpgrade={() => setPopupPage("upgrade")}
            onEditProfile={() => setPopupPage("editProfile")}
          />
        )}
      </DialogPopup>

      {/* KYC POPUP */}
      <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
        {selectedAgent && (
          <KYCViewPage
            agent={selectedAgent}
            onBack={() => setPopupPage("overview")}

            // 🔥 When clicking "Verified" → open Verification Page
            onVerificationView={() => setPopupPage("verification")}
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

      {/* EDIT PROFILE */}
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

      {/* UPGRADE PACKAGE */}
      <DialogPopup open={popupPage === "upgrade"} onClose={closeAll}>
        <UpgradePackagePage
          agent={selectedAgent}
          onCancel={() => setPopupPage("overview")}
          onConfirm={(pkg) => {
            setSelectedUpgrade(pkg);
            setPopupPage("upgradeSummary");
          }}
        />
      </DialogPopup>

      {/* UPGRADE SUMMARY */}
      <DialogPopup open={popupPage === "upgradeSummary"} onClose={closeAll}>
        <UpgradeSummaryPage
          packageName={selectedUpgrade}
          onFinish={() => setPopupPage("overview")}
        />
      </DialogPopup>

      {/* 🔥 VERIFICATION POPUP */}
      <DialogPopup open={popupPage === "verification"} onClose={closeAll}>
        <VerificationPage
          agent={selectedAgent}
          onBack={() => setPopupPage("kyc")}
        />
      </DialogPopup>

    </Box>
  );
};

export default MainApp;



import React, { useState } from "react";
import UpgradePackagePage from "./UpgradePackagePage";
import UpgradeSummaryPage from "./UpgradeSummaryPage";

const PopupContainer = ({ agent, onClose }) => {
  const [popupPage, setPopupPage] = useState("upgradePage");
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <>
      {popupPage === "upgradePage" && (
        <UpgradePackagePage
          agent={agent}
          onCancel={onClose}
          onConfirm={(pkg) => {
            setSelectedPackage(pkg);   // SAVE PACKAGE
            setPopupPage("upgradeSummary"); // GO TO SUMMARY
          }}
        />
      )}

      {popupPage === "upgradeSummary" && (
        <UpgradeSummaryPage
          selectedPkg={selectedPackage}
          onFinish={() => {
            console.log("Final package:", selectedPackage);
            onClose();        // CLOSE POPUP
          }}
        />
      )}
    </>
  );
};

export default PopupContainer;

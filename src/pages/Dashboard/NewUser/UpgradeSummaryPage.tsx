import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  RadioGroup,
} from "@mui/material";

interface UpgradePackagePageProps {
  agent?: any;
  onCancel: () => void;
  onConfirm: (pkg: string) => void;
}

const TickItem = ({ text }: { text: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
    <Box
      sx={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "#1976d2",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        mr: 1,
      }}
    >
      ✓
    </Box>
    <Typography sx={{ fontSize: "12px" }}>{text}</Typography>
  </Box>
);

const UpgradeSummaryPage: React.FC<UpgradePackagePageProps> = ({
  agent,
  onCancel,
  onConfirm,
}) => {
  const [selected, setSelected] = useState("");

  /** CURRENT PACKAGE VALUES */
  const currentPackage = agent?.currentPackageName || "Silver";
  const currentAmount = currentPackage === "Silver" ? 5000 : 0;
  const currentBV = agent?.currentBV || 500;

  /** PACKAGE DATA */
  const packageData = {
    gold: { name: "Gold Partner", price: 10000, bv: 3000 },
    platinum: { name: "Platinum", price: 15000, bv: 5000 },
  };

  /** SUMMARY CALCULATION */
  const { newPackage, newAmount, upgradeCost, additionalBV } = useMemo(() => {
    if (!selected)
      return {
        newPackage: "-",
        newAmount: 0,
        upgradeCost: 0,
        additionalBV: 0,
      };

    const pkg = packageData[selected];
    return {
      newPackage: pkg.name,
      newAmount: pkg.price,
      upgradeCost: pkg.price - currentAmount,
      additionalBV: pkg.bv - currentBV,
    };
  }, [selected, currentAmount, currentBV]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "#f9fafb",
        display: "flex",
        justifyContent: "center",
        overflowY: "auto",
        px: { xs: 2, md: 4 },
        py: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "650px",
          background: "white",
          p: 3,
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
          Package Upgrade
        </Typography>

        <Typography sx={{ fontSize: "12px", color: "#6b7280", mt: 0.5 }}>
          Upgrade package for {agent?.fullName || "Rajesh Kumar"} (
          {agent?.agentCode || "AGT-1045"})
        </Typography>

        {/* CURRENT PACKAGE BOX */}
        <Paper
          sx={{
            p: 1.5,
            mt: 1.5,
            borderRadius: "8px",
            border: "1px solid #cddaff",
            background: "#f4f8ff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                Current Package
              </Typography>
              <Typography sx={{ fontSize: "12px", mt: 0.3 }}>
                {currentPackage}
              </Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography
                sx={{ fontWeight: 600, color: "#1976d2", fontSize: "16px" }}
              >
                {currentBV}
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "#555" }}>
                BV Earned
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* SELECT PACKAGE */}
        <Typography sx={{ fontWeight: 700, fontSize: "15px", mt: 3, mb: 1.5 }}>
          Select Upgrade Package
        </Typography>

        <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
          {/* GOLD */}
          <Paper
            onClick={() => setSelected("gold")}
            sx={{
              border:
                selected === "gold" ? "2px solid #1976d2" : "1px solid #e4e7ec",
              borderRadius: "8px",
              overflow: "hidden",
              mb: 1.5,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                background: "#1E569C",
                color: "white",
                py: 1.2,
                px: 1.5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  Gold Partner
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "13px", mt: 0.3 }}>
                  ₹10,000
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                3000 BV
              </Typography>
            </Box>

            <Box sx={{ p: 1.5 }}>
              <TickItem text="Premium commission" />
              <TickItem text="10 referral coupons" />
              <TickItem text="300 coins/month" />
              <TickItem text="₹5,000 daily cap" />
            </Box>
          </Paper>

          {/* PLATINUM */}
          <Paper
            onClick={() => setSelected("platinum")}
            sx={{
              border:
                selected === "platinum"
                  ? "2px solid #1976d2"
                  : "1px solid #e4e7ec",
              borderRadius: "8px",
              overflow: "hidden",
              mb: 2,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                background: "#1E569C",
                color: "white",
                py: 1.2,
                px: 1.5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  Platinum
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "13px", mt: 0.3 }}>
                  ₹15,000
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                5000 BV
              </Typography>
            </Box>

            <Box sx={{ p: 1.5 }}>
              <TickItem text="Maximum commission" />
              <TickItem text="20 referral coupons" />
              <TickItem text="500 coins/month" />
              <TickItem text="₹10,000 daily cap" />
            </Box>
          </Paper>
        </RadioGroup>

        {/* SUMMARY BOX */}
        <Box
          sx={{
            background: "#FFFFFF",
            borderRadius: "10px",
            padding: "16px",
            border: "1px solid #E5E5E5",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#2F80ED",
              mb: 2,
            }}
          >
            Upgrade Summary
          </Typography>

          <Row label="Current Package" value={`${currentPackage} (₹${currentAmount})`} />
          <Row label="New Package" value={`${newPackage} ${newAmount ? `(₹${newAmount})` : ""}`} />
          <Row label="Upgrade Cost" value={`₹${upgradeCost}`} bold />
          <Row label="Additional BV" value={`+${additionalBV} BV`} green />
        </Box>

        {/* FOOTER BUTTONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            pt: 2.5,
            mt: 1,
            borderTop: "1px solid #e4e6eb",
          }}
        >
          <Button
            variant="outlined"
            sx={{ minWidth: "110px", textTransform: "none" }}
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            disabled={!selected}
            onClick={() => onConfirm(selected)}
          >
            Confirm Upgrade
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

/** SMALL COMPONENT FOR SUMMARY ROWS */
const Row = ({
  label,
  value,
  bold,
  green,
}: {
  label: string;
  value: string;
  bold?: boolean;
  green?: boolean;
}) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
    <Typography>{label}</Typography>
    <Typography
      sx={{
        fontWeight: bold ? 600 : 500,
        color: green ? "green" : "inherit",
      }}
    >
      {value}
    </Typography>
  </Box>
);

export default UpgradeSummaryPage;

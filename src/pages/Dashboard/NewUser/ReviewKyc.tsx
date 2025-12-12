// import React, { useState } from "react";
// import {
//   Dialog,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Divider,
//   Paper,
// } from "@mui/material";

// interface ReviewKycProps {
//   open: boolean;
//   onClose: () => void;
//   onApprove: () => void;
//   onReject: (reason: string) => void;
//   agentName?: string;
//   agentCode?: string;
// }

// const ReviewKyc: React.FC<ReviewKycProps> = ({
//   open,
//   onClose,
//   onApprove,
//   onReject,
//   agentName = "Meera Joshi",
//   agentCode = "AGT-5678",
// }) => {
//   const [reason, setReason] = useState("");

//   // Updated BOX with pattern background
//   const docBoxStyles = {
//     width: "100%",
//     height: "125px",
//     borderRadius: "10px",
//     border: "1px solid #c9c9c9",
//     backgroundImage:
//       "linear-gradient(45deg, #e0e0e0 25%, transparent 25%)," +
//       "linear-gradient(-45deg, #e0e0e0 25%, transparent 25%)," +
//       "linear-gradient(45deg, transparent 75%, #e0e0e0 75%)," +
//       "linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)",
//     backgroundSize: "20px 20px",
//     backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
//     backgroundColor: "#ffffff",
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="md"
//       fullWidth
//       PaperProps={{
//         sx: {
//           borderRadius: "12px",
//           padding: "20px",
//           height: "90vh",
//           display: "flex",
//           flexDirection: "column",
//           overflow: "hidden",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           flex: 1,
//           overflow: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//         }}
//       >
//         {/* HEADER */}
//         <Typography fontSize="20px" fontWeight={700}>
//           KYC Document Review
//         </Typography>

//         <Typography fontSize="13px" color="gray">
//           Review and verify KYC documents for {agentName} ({agentCode})
//         </Typography>

//         {/* SCROLLABLE CONTENT */}
//         <Box
//           sx={{
//             flex: 1,
//             overflow: "auto",
//             pr: 1,
//           }}
//         >
//           {/* AADHAAR CARD */}
//           <Paper
//             elevation={0}
//             sx={{
//               border: "1px solid #1e88e5",
//               borderRadius: "10px",
//               padding: "16px",
//             }}
//           >
//             {/* Title */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 mb: 2,
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "18px", fontWeight: 600, color: "#1e88e5" }}
//               >
//                 Aadhaar Card
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: "12px",
//                   fontWeight: 600,
//                   background: "#f5f5f5",
//                   padding: "3px 10px",
//                   borderRadius: "6px",
//                   border: "1px solid #ddd",
//                 }}
//               >
//                 XXXX XXXX 4521
//               </Typography>
//             </Box>

//             {/* Labels */}
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 mb: 1,
//               }}
//             >
//               <Typography fontSize="14px" fontWeight={600}>
//                 Front Side
//               </Typography>
//               <Typography fontSize="14px" fontWeight={600}>
//                 Back Side
//               </Typography>
//             </Box>

//             {/* IMAGES */}
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 gap: 2,
//               }}
//             >
//               <Box sx={docBoxStyles} />
//               <Box sx={docBoxStyles} />
//             </Box>
//           </Paper>

//           {/* PAN CARD */}
//           <Paper
//             elevation={0}
//             sx={{
//               border: "1px solid #1e88e5",
//               borderRadius: "10px",
//               padding: "16px",
//               mt: 3,
//             }}
//           >
//             {/* Title */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 mb: 2,
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "18px", fontWeight: 600, color: "#1e88e5" }}
//               >
//                 PAN Card
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: "12px",
//                   fontWeight: 600,
//                   background: "#f5f5f5",
//                   padding: "3px 10px",
//                   borderRadius: "6px",
//                   border: "1px solid #ddd",
//                 }}
//               >
//                 ABCDE1234F
//               </Typography>
//             </Box>

//             {/* Labels */}
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 mb: 1,
//               }}
//             >
//               <Typography fontSize="14px" fontWeight={600}>
//                 Front Side
//               </Typography>
//               <Typography fontSize="14px" fontWeight={600}>
//                 Back Side
//               </Typography>
//             </Box>

//             {/* IMAGES */}
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 gap: 2,
//               }}
//             >
//               <Box sx={docBoxStyles} />
//               <Box sx={docBoxStyles} />
//             </Box>
//           </Paper>

//           {/* REJECTION REASON */}
//           <Box mt={3}>
//             <Typography fontSize="14px" fontWeight={500} mb={1}>
//               Rejection Reason (If Rejecting)
//             </Typography>

//             <TextField
//               placeholder="Provide detailed reason for rejection..."
//               fullWidth
//               multiline
//               rows={3}
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//             />
//           </Box>
//         </Box>

//         <Divider />

//         {/* FOOTER BUTTONS */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             mt: 1,
//           }}
//         >
//           <Button
//             variant="contained"
//             onClick={onClose}
//             sx={{
//               backgroundColor: "#b8bfd6",
//               color: "#fff",
//               px: 4,
//               "&:hover": { backgroundColor: "#a8b0c5" },
//             }}
//           >
//             Cancel
//           </Button>

//           <Box>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#E53935",
//                 mr: 2,
//                 px: 4,
//                 "&:hover": { backgroundColor: "#d32f2f" },
//               }}
//               onClick={() => onReject(reason)}
//             >
//               Reject KYC
//             </Button>

//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#1E62B5",
//                 px: 4,
//                 "&:hover": { backgroundColor: "#164a87" },
//               }}
//               onClick={onApprove}
//             >
//               Approve KYC
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Dialog>
//   );
// };

// export default ReviewKyc;




import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  TextField,
  Paper,
} from "@mui/material";

interface ReviewKycProps {
  open: boolean;
  onClose: () => void;
  onApprove: () => void;
  onReject: (reason: string) => void;
  agentName?: string;
  agentCode?: string;
}

const ReviewKyc: React.FC<ReviewKycProps> = ({
  open,
  onClose,
  onApprove,
  onReject,
  agentName,
  agentCode,
}) => {
  const [reason, setReason] = useState("");

  const checkerBg = {
    mt: 1,
    height: 130,
    borderRadius: 2,
    border: "1px solid #d0d7de",
    backgroundColor: "#f8f8f8",
    backgroundImage:
      "linear-gradient(45deg, #d0d0d0 25%, transparent 25%), \
       linear-gradient(-45deg, #d0d0d0 25%, transparent 25%), \
       linear-gradient(45deg, transparent 75%, #d0d0d0 75%), \
       linear-gradient(-45deg, transparent 75%, #d0d0d0 75%)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="body" // <-- KEY: No internal scrollbar
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "visible", // <-- no scroll inside
          p: 0,
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          px: 3,
          pt: 3,
          pb: 1,
          fontSize: "20px",
          fontWeight: 700,
        }}
      >
        KYC Document Review
      </DialogTitle>

      <Typography sx={{ px: 3, color: "grey.600", mb: 2 }}>
        Review and verify KYC documents for {agentName} ({agentCode})
      </Typography>

      {/* Content */}
      <DialogContent
        sx={{
          px: 3,
          pb: 1,
          overflow: "visible",
        }}
      >

        {/* Aadhaar Card Section */}
        <Paper
          sx={{
            border: "1px solid #cfd8e3",
            borderRadius: 2,
            p: 2,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: 700, color: "#0066cc" }}
            >
              Aadhaar Card
            </Typography>

            <Box
              sx={{
                background: "#f1f1f1",
                borderRadius: "6px",
                px: 1.5,
                py: 0.5,
                fontSize: "14px",
              }}
            >
              XXXX XXXX 4521
            </Box>
          </Box>

          <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography>Front Side</Typography>
              <Box sx={checkerBg} />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography>Back Side</Typography>
              <Box sx={checkerBg} />
            </Box>
          </Box>
        </Paper>

        {/* PAN Card Section */}
        <Paper
          sx={{
            border: "1px solid #cfd8e3",
            borderRadius: 2,
            p: 2,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: 700, color: "#0066cc" }}
            >
              PAN Card
            </Typography>

            <Box
              sx={{
                background: "#f1f1f1",
                borderRadius: "6px",
                px: 1.5,
                py: 0.5,
                fontSize: "14px",
              }}
            >
              ABCDE1234F
            </Box>
          </Box>

          <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography>Front Side</Typography>
              <Box sx={checkerBg} />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography>Back Side</Typography>
              <Box sx={checkerBg} />
            </Box>
          </Box>
        </Paper>

        {/* Rejection Reason */}
        <Typography sx={{ mb: 1, fontWeight: 600 }}>
          Rejection Reason (if Rejecting)
        </Typography>

        <TextField
          fullWidth
          multiline
          minRows={3}
          placeholder="Provide detailed reason for rejection..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          sx={{
            borderRadius: 2,
            background: "#fafafa",
          }}
        />
      </DialogContent>

      {/* Action Buttons */}
      <DialogActions sx={{ px: 3, pb: 3, pt: 1 }}>
        <Button variant="outlined" onClick={onClose} sx={{ width: 120 }}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => onReject(reason)}
          sx={{ width: 140 }}
        >
          Reject KYC
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={onApprove}
          sx={{ width: 150 }}
        >
          Approve KYC
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewKyc;





 
 
 
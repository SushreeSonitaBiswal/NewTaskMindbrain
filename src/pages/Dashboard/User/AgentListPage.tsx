import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  Grid,
} from '@mui/material';

import { Visibility as EyeIcon } from '@mui/icons-material';

interface Agent {
  id: string;
  name: string;
  type: 'Agent' | 'Customer';
  kycStatus: 'Approved' | 'Pending' | '-';
  package: 'Gold' | 'Silver' | 'Star' | '-';
  joinDate: string;
  status: 'Active' | 'Pending KYC' | 'Suspended';
}

interface AgentListPageProps {
  onViewDetails: () => void;
}

const AgentListPage: React.FC<AgentListPageProps> = ({ onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('all');

  const agents: Agent[] = [
    { id: 'AGT-1001', name: 'Rajesh Kumar', type: 'Agent', kycStatus: 'Approved', package: 'Gold', joinDate: '15 Jun 2023', status: 'Active' },
    { id: 'CU2045', name: 'Rajesh Kumar', type: 'Customer', kycStatus: '-', package: '-', joinDate: '22 Jun 2023', status: 'Active' },
    { id: 'AGT-1002', name: 'Rajesh Kumar', type: 'Agent', kycStatus: 'Pending', package: 'Silver', joinDate: '28 Jun 2023', status: 'Pending KYC' },
    { id: 'CU2046', name: 'Rajesh Kumar', type: 'Customer', kycStatus: '-', package: '-', joinDate: '05 Jul 2023', status: 'Active' },
    { id: 'AGT-1003', name: 'Rajesh Kumar', type: 'Agent', kycStatus: 'Approved', package: 'Star', joinDate: '05 Jul 2023', status: 'Active' },
  ];

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'Active': return <Chip label="Active" color="success" size="small" />;
      case 'Pending KYC': return <Chip label="Pending KYC" color="warning" size="small" />;
      case 'Suspended': return <Chip label="Suspended" color="error" size="small" />;
      default: return <Chip label={status} size="small" />;
    }
  };

  const getPackageChip = (pkg: string) => {
    switch (pkg) {
      case 'Gold': return <Chip label="Gold" color="warning" size="small" />;
      case 'Silver': return <Chip label="Silver" variant="outlined" size="small" />;
      case 'Star': return <Chip label="Star" color="primary" size="small" />;
      default: return <Chip label={pkg} size="small" />;
    }
  };

  const getKYCStatusChip = (status: string) => {
    switch (status) {
      case 'Approved': return <Chip label="Approved" color="success" size="small" />;
      case 'Pending': return <Chip label="Pending" color="warning" size="small" />;
      default: return <Chip label={status} size="small" />;
    }
  };

  const getTypeChip = (type: string) => (
    <Chip
      label={type}
      color={type === 'Agent' ? 'primary' : 'default'}
      size="small"
    />
  );

  return (
    <Box sx={{ p: 3 }}>

      {/* Title Row */}
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        mb={3}
        sx={{ gap: 1 }}
      >
        {/* Left Blue Button */}
        <Box
          sx={{
            background: "#1E40AF",
            color: "#fff",
            px: 2,
            py: 1.2,
            width: "fit-content",
            borderRadius: "6px",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          Users & Agents
        </Box>

        {/* Right White Button */}
        <Button
          variant="outlined"
          sx={{
            background: "#ffffff",
            fontWeight: 600,
            px: 3,
            py: 1,
            border: "1px solid #1E40AF",
            color: "#1E40AF",
            textTransform: "none",
            borderRadius: "6px",
            ml: -4,   // makes the button nearly touch the blue one
          }}
        >
          KYC Approvals
        </Button>
      </Box>

      {/* Search Section */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search agents & users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>User Type</InputLabel>
                <Select
                  label="User Type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <MenuItem value="all">All Users</MenuItem>
                  <MenuItem value="agent">Agent</MenuItem>
                  <MenuItem value="customer">Customer</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={2}>
              <Button variant="contained" fullWidth size="small">
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Table Section */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Users & Agents List
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: '#f1f5f9' }}>
                  <TableCell>ID</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>KYC Status</TableCell>
                  <TableCell>Package</TableCell>
                  <TableCell>Join Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {agents.map((agent, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{agent.id}</TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          src="https://i.pravatar.cc/50"
                          alt={agent.name}
                          sx={{ width: 32, height: 32 }}
                        />

                        <Box>
                          <Typography>{agent.name}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {agent.id.toLowerCase()}@example.com
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell>{getTypeChip(agent.type)}</TableCell>
                    <TableCell>{getKYCStatusChip(agent.kycStatus)}</TableCell>
                    <TableCell>{getPackageChip(agent.package)}</TableCell>
                    <TableCell>{agent.joinDate}</TableCell>
                    <TableCell>{getStatusChip(agent.status)}</TableCell>

                    <TableCell>
                      <IconButton size="small" onClick={onViewDetails}>
                        <EyeIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box display="flex" justifyContent="center" mt={3} gap={1}>
            <Button variant="outlined" size="small">Previous</Button>
            <Button variant="contained" size="small">1</Button>
            <Button variant="outlined" size="small">2</Button>
            <Button variant="outlined" size="small">3</Button>
            <Button variant="outlined" size="small">Next</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AgentListPage;




// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Chip,
//   Grid,
//   Modal,
//   Fade,
//   Backdrop,
// } from '@mui/material';

// import { Visibility as EyeIcon } from '@mui/icons-material';
// import AgentDetailsPage from './AgentDetailsPage';

// interface Agent {
//   id: string;
//   name: string;
//   type: 'Agent' | 'Customer';
//   kycStatus: 'Approved' | 'Pending' | '-';
//   package: 'Gold' | 'Silver' | 'Star' | '-';
//   joinDate: string;
//   status: 'Active' | 'Pending KYC' | 'Suspended';
// }

// interface AgentListPageProps {
//   onViewDetails?: () => void; // no longer used but kept for compatibility
// }

// const AgentListPage: React.FC<AgentListPageProps> = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [userType, setUserType] = useState('all');

//   // Popup state
//   const [openDetails, setOpenDetails] = useState(false);

//   const agents: Agent[] = [
//     { id: 'AGT-1001', name: 'Rajesh Kumar', type: 'Agent', kycStatus: 'Approved', package: 'Gold', joinDate: '15 Jun 2023', status: 'Active' },
//     { id: 'CU2045', name: 'Rajesh Kumar', type: 'Customer', kycStatus: '-', package: '-', joinDate: '22 Jun 2023', status: 'Active' },
//     { id: 'AGT-1002', name: 'Rajesh Kumar', type: 'Agent', kycStatus: 'Pending', package: 'Silver', joinDate: '28 Jun 2023', status: 'Pending KYC' },
//     { id: 'CU2046', name: 'Rajesh Kumar', type: 'Customer', kycStatus: '-', package: '-', joinDate: '05 Jul 2023', status: 'Active' },
//     { id: 'AGT-1003', name: 'Rajesh Kumar', type: 'Agent', kycStatus: 'Approved', package: 'Star', joinDate: '05 Jul 2023', status: 'Active' },
//   ];

//   const getStatusChip = (status: string) => {
//     switch (status) {
//       case 'Active': return <Chip label="Active" color="success" size="small" />;
//       case 'Pending KYC': return <Chip label="Pending KYC" color="warning" size="small" />;
//       case 'Suspended': return <Chip label="Suspended" color="error" size="small" />;
//       default: return <Chip label={status} size="small" />;
//     }
//   };

//   const getPackageChip = (pkg: string) => {
//     switch (pkg) {
//       case 'Gold': return <Chip label="Gold" color="warning" size="small" />;
//       case 'Silver': return <Chip label="Silver" variant="outlined" size="small" />;
//       case 'Star': return <Chip label="Star" color="primary" size="small" />;
//       default: return <Chip label={pkg} size="small" />;
//     }
//   };

//   const getKYCStatusChip = (status: string) => {
//     switch (status) {
//       case 'Approved': return <Chip label="Approved" color="success" size="small" />;
//       case 'Pending': return <Chip label="Pending" color="warning" size="small" />;
//       default: return <Chip label={status} size="small" />;
//     }
//   };

//   const getTypeChip = (type: string) => (
//     <Chip label={type} color={type === 'Agent' ? 'primary' : 'default'} size="small" />
//   );

//   return (
//     <>
//       {/* BLUR BACKGROUND WHEN POPUP IS OPEN */}
//       <Box
//         sx={{
//           p: 3,
//           filter: openDetails ? 'blur(4px)' : 'none',
//           transition: '0.3s ease',
//         }}
//       >
//         <Typography variant="h4" gutterBottom fontWeight={700}>
//           Users & Agents
//         </Typography>

//         {/* Search Section */}
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   placeholder="Search agents & users..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   size="small"
//                 />
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <FormControl fullWidth size="small">
//                   <InputLabel>User Type</InputLabel>
//                   <Select
//                     label="User Type"
//                     value={userType}
//                     onChange={(e) => setUserType(e.target.value)}
//                   >
//                     <MenuItem value="all">All Users</MenuItem>
//                     <MenuItem value="agent">Agent</MenuItem>
//                     <MenuItem value="customer">Customer</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} md={2}>
//                 <Button variant="contained" fullWidth size="small">
//                   Search
//                 </Button>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>

//         {/* Table Section */}
//         <Card>
//           <CardContent>
//             <Typography variant="h6" fontWeight={700} mb={2}>
//               Users & Agents List
//             </Typography>

//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow sx={{ background: '#f1f5f9' }}>
//                     <TableCell>ID</TableCell>
//                     <TableCell>User</TableCell>
//                     <TableCell>Type</TableCell>
//                     <TableCell>KYC Status</TableCell>
//                     <TableCell>Package</TableCell>
//                     <TableCell>Join Date</TableCell>
//                     <TableCell>Status</TableCell>
//                     <TableCell>Actions</TableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {agents.map((agent, index) => (
//                     <TableRow key={index} hover>
//                       <TableCell>{agent.id}</TableCell>

//                       <TableCell>
//                         <Box display="flex" alignItems="center" gap={1}>
//                           <Avatar
//                             src="https://i.pravatar.cc/50"
//                             alt={agent.name}
//                             sx={{ width: 32, height: 32 }}
//                           />

//                           <Box>
//                             <Typography>{agent.name}</Typography>
//                             <Typography variant="caption" color="text.secondary">
//                               {agent.id.toLowerCase()}@example.com
//                             </Typography>
//                           </Box>
//                         </Box>
//                       </TableCell>

//                       <TableCell>{getTypeChip(agent.type)}</TableCell>
//                       <TableCell>{getKYCStatusChip(agent.kycStatus)}</TableCell>
//                       <TableCell>{getPackageChip(agent.package)}</TableCell>
//                       <TableCell>{agent.joinDate}</TableCell>
//                       <TableCell>{getStatusChip(agent.status)}</TableCell>

//                       <TableCell>
//                         <IconButton size="small" onClick={() => setOpenDetails(true)}>
//                           <EyeIcon />
//                         </IconButton>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>

//             {/* Pagination */}
//             <Box display="flex" justifyContent="center" mt={3} gap={1}>
//               <Button variant="outlined" size="small">Previous</Button>
//               <Button variant="contained" size="small">1</Button>
//               <Button variant="outlined" size="small">2</Button>
//               <Button variant="outlined" size="small">3</Button>
//               <Button variant="outlined" size="small">Next</Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>

//       {/* POPUP MODAL (Agent Details Page) */}
//       <Modal
//         open={openDetails}
//         onClose={() => setOpenDetails(false)}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{ backdrop: { timeout: 300 } }}
//       >
//         <Fade in={openDetails}>
//           <Box
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               width: '90%',
//               maxWidth: 900,
//               bgcolor: 'background.paper',
//               boxShadow: 24,
//               borderRadius: 2,
//               p: 2,
//               maxHeight: '90vh',
//               overflowY: 'auto',
//             }}
//           >
//             <AgentDetailsPage onClose={() => setOpenDetails(false)} />
//           </Box>
//         </Fade>
//       </Modal>
//     </>
//   );
// };

// export default AgentListPage;

 
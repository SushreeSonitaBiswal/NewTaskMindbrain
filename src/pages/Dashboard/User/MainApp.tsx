import React, { useState } from 'react';
import {
  Box,
  Snackbar,
  Alert,
} from '@mui/material';

import AgentListPage from './AgentListPage';
import AgentDetailsPage from './AgentDetailsPage';
import KYCViewPage from './KYCViewPage';
import TeamViewPage from './TeamViewPage';

type Page = 'list' | 'details' | 'kyc' | 'team';

const MainApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('list');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'info' | 'warning',
  });

  const showSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSuspend = () => {
    showSnackbar('Agent suspended successfully!', 'warning');
  };

  const handleEdit = () => {
    showSnackbar('Edit mode activated', 'info');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'list':
        return (
          <AgentListPage
            onViewDetails={() => setCurrentPage('details')}
          />
        );
      case 'details':
        return (
          <AgentDetailsPage
            onClose={() => setCurrentPage('list')}
            onKYCView={() => setCurrentPage('kyc')}
            onTeamView={() => setCurrentPage('team')}
            onSuspend={handleSuspend}
            onEdit={handleEdit}
          />
        );
      case 'kyc':
        return (
          <KYCViewPage
            onBack={() => setCurrentPage('details')}
            onOverview={() => setCurrentPage('details')}
            onTeamView={() => setCurrentPage('team')}
            onSuspend={handleSuspend}
            onEdit={handleEdit}
          />
        );
      case 'team':
        return (
          <TeamViewPage
            onBack={() => setCurrentPage('details')}
            onOverview={() => setCurrentPage('details')}
            onKYCView={() => setCurrentPage('kyc')}
            onSuspend={handleSuspend}
            onEdit={handleEdit}
          />
        );
      default:
        return <AgentListPage onViewDetails={() => setCurrentPage('details')} />;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {renderPage()}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MainApp;

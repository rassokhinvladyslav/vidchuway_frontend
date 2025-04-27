import { styled } from '@mui/material/styles';
import { Container, Typography, Button } from '@mui/material';

export const ErrorContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
});

export const ErrorTitle = styled(Typography)({
    marginBottom: '1rem',
});

export const ErrorMessage = styled(Typography)({
    marginBottom: '2rem',
});

export const ReloadButton = styled(Button)({
    minWidth: '200px',
}); 
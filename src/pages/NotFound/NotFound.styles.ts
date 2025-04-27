import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
});

export const StyledTitle = styled(Typography)({
    marginBottom: '1rem',
}) as typeof Typography;

export const StyledSubtitle = styled(Typography)({
    marginBottom: '1rem',
}) as typeof Typography;

export const StyledText = styled(Typography)({
    marginBottom: '2rem',
}) as typeof Typography;

export const StyledButton = styled(Button)({}) as typeof Button; 
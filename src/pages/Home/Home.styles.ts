import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
    textAlign: 'center',
});

export const StyledTitle = styled(Typography)({
    marginBottom: '1rem',
}) as typeof Typography;

export const StyledMessage = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
})) as typeof Typography; 
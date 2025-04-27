import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Root = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
});

export const NavLink = styled(RouterLink)({
    textDecoration: 'none',
    color: 'inherit',
    flexGrow: 1,
});

export const NavTitle = styled(Typography)({
    textDecoration: 'none',
    color: 'inherit',
    flexGrow: 1,
}) as typeof Typography;

export const Footer = styled(Box)(({ theme }) => ({
    padding: '1.5rem 1rem',
    marginTop: 'auto',
    backgroundColor: theme.palette.mode === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
})); 
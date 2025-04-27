import { Typography, Container } from '@mui/material';
import { Root, Footer, NavLink, NavTitle } from './Layout.styles';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Root>
            <NavLink to="/">
                <NavTitle variant="h6">
                    Vidchuway
                </NavTitle>
            </NavLink>
            <Container>
                {children}
            </Container>
            <Footer>
                <Container maxWidth="sm">
                    <Typography variant="body2" color="text.secondary" align="center">
                        © {new Date().getFullYear()} Vidchuway. All rights reserved.
                    </Typography>
                </Container>
            </Footer>
        </Root>
    );
}; 
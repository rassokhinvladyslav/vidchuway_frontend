import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { theme } from './styles/theme';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <ErrorBoundary>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Layout>
                    </Router>
                </ThemeProvider>
            </ApolloProvider>
        </ErrorBoundary>
    );
}

export default App; 
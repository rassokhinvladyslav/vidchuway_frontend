import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { ErrorContainer, ErrorTitle, ErrorMessage, ReloadButton } from './ErrorBoundary.styles';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <ErrorTitle variant="h4" color="error" gutterBottom>
                        Something went wrong
                    </ErrorTitle>
                    <ErrorMessage variant="body1" paragraph>
                        {this.state.error?.message || 'An unexpected error occurred'}
                    </ErrorMessage>
                    <ReloadButton
                        variant="contained"
                        color="primary"
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </ReloadButton>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
} 
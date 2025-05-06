import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorInfo: error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-10 text-center">
                    <h1 className="text-3xl font-bold text-red-500">Something went wrong.</h1>
                    <p className="mt-4">{this.state.errorInfo?.toString()}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

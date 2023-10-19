import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Fullpage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // load authenticated user
    const { isLoading, isAuthenticated } = useUser();



    // if no authenticated user, redirect to the /login
    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/login");
    }, [isAuthenticated, isLoading, navigate])

    // while loading, show spinner
    if (isLoading) {
        return (
            <Fullpage>
                <Spinner />
            </Fullpage>
        );
    }

    // if there is user, render the app
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
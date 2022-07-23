import {useAuth} from "context/AuthProvider/useAuth";
import { useNavigate } from 'react-router-dom';
import {getUserLocalStorage} from "../../context/AuthProvider/util";

export const ProtectLayout = ({children}: {children: JSX.Element}) => {
    const navigate = useNavigate();

    const auth = getUserLocalStorage();

    if(!auth) {
        window.location.href = "/Dasckup";
    }

    return children;
}
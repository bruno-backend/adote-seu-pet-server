import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png"

function Navbar() {
    // Example: replace with your actual authentication logic
    const isAuthenticated = false;
    const logout = () => {
        // Implement logout logic here
    };

    return (
        <nav>
            <div className="logo">  
                <Link to="/">
                    <img src={Logo} alt="Adotando Sofia" />
                    <h2>Adotando Sofia</h2>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Adotar</Link>
                </li>
                <li>
                    <Link to="/pet/create">Entrar</Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/user/profile">Login</Link>
                        </li>
                        <li onClick={logout}>Sair</li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>
                        <li>
                            <Link to="/register">Cadastrar</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
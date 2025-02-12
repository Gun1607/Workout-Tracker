import { Link } from "react-router-dom"



const Navbar=() => {
    return(
        <header className="bg-[url('/images/NavbarImage.jpg')] bg-cover bg-center">
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar
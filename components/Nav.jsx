import Link from "next/link"
import "../styles/navbar.css"

export default function Nav() {

return(

<header className="navbar">

<div className="nav-container">

<h1 className="logo">
KESARINANDAN
</h1>

<nav className="nav-links">

<Link href="/">Home</Link>
<Link href="/products">Products</Link>
<Link href="/contact">Contact</Link>

</nav>

<a
href="https://wa.me/919511629883"
className="whatsapp-btn"
>
WhatsApp
</a>

</div>

</header>

)

}
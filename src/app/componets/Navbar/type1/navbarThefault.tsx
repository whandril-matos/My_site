// components/Navbar.tsx
"use client"
import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: string; // Caminho para o logo
  links: NavLink[]; // Lista de links para o menu
  cta?: {
    label: string; // Texto do botão
    href: string;  // URL do botão
  };
}

const Navbar: React.FC<NavbarProps> = ({ logo, links, cta }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [active, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!active);
    toggleMenu() // Alterna entre true e false
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        {/* Menu Toggle (Mobile) */}
        <button className="navbar-toggle" onClick={ toggleClass}>
        <div className={`pin pin01 ${active ? 'active' : ''}`} ></div>
        <div className={`pin pin02 ${active ? 'active' : ''}`} ></div>
        <div className={`pin pin03 ${active ? 'active' : ''}`} ></div>
        </button>

        {/* Links */}
        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} passHref>
                  <span className="navbar-link">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Call-to-Action (Opcional) */}
          {cta && (
            <Link href={cta.href} passHref>
              <span className="navbar-cta">{cta.label}</span>
            </Link>
          )}
        </nav>
      </div>

      {/* {/* Estilização básica */} 
      <style jsx>{`
        .navbar {
          background: #333;
          color: #fff;
          padding: 1rem 2rem;
          z-index: 500;
          display:felz;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          
        }
        .navbar-logo img {
          height: 40px;
          cursor: pointer;
        }
        .navbar-toggle {
          background: none;
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          display: none;
        }
        .navbar-menu {
          display: flex;
          align-items: center;
          z-index: 15;
          
        }
        .navbar-menu ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-menu li {
          margin: 0 1rem;
        }
        .navbar-link {
          text-decoration: none;
          color: #fff;
          cursor: pointer;
        }
        .navbar-link:hover {
          text-decoration: underline;
        }
        .navbar-cta {
          display: flex;
          background: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          text-decoration: none;
          border-radius: 5px;
          cursor: pointer;
          width:fit-content;
        }
        .navbar-cta:hover {
          background: #005bb5;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .navbar-toggle {
            display: block;
          }
          .navbar-menu {
            display: ${menuOpen ? "block" : "none"};
            flex-direction: column;
            position: absolute;
            top: 100px;
            left: 0;
            width: 100%;
            background: #333;
            padding: 1rem;
            transition: all 0.3s ease;
          }
          .navbar-menu ul {
            flex-direction: column;
          }
          .navbar-menu li {
            margin: 1rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

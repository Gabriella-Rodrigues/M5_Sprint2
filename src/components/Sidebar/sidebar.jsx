import React from "react";
import { Link } from "react-router-dom";
import S from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastro</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Trainin
import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddEmployees from "./components/AddEmployees/AddEmployees";
import Employees from "./components/Employees/Employees";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

const App = () => {
  // state Employees
  const [datos, setDatos] = useState([]);

  // pull data from AddEmployees
  const crearDatos = (dato) => {
    setDatos([...datos, dato]);
  };

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* Nav menu */}
          <div className="d-flex flex-column col-3">
            <h1>Fenix Forward IT</h1>
            <hr />
            <div className="d-flex flex-column">
              <Link to="/">Home</Link>
              <a
                data-toggle="collapse"
                href="#employeesMenu"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Empleados
              </a>
              <div className="collapse bg-warning" id="employeesMenu">
                <Link to="/empleados">Lista Empleados</Link>
                <Link to="/nuevo-empleado">Agregar Empleado</Link>
              </div>
              <Link>Proyectos</Link>
              <Link>Calendario</Link>
            </div>
            <hr />
            <a href="!#">Mostrar mas</a>
          </div>

          {/* Routes */}
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />

            <Route path="/nuevo-empleado">
              <AddEmployees crearDatos={crearDatos} />
            </Route>

            <Route path="/empleados">
              {datos.map((dato) => {
                return <Employees dato={dato} />;
              })}
            </Route>
          </Switch>

          {/* Filters */}
        </div>
      </div>
    </Router>
  );
};

export default App;

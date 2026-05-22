import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p className="lead">
        Welcome to the modern OctoFit Tracker frontend. Use the navigation links to explore the dashboard, teams, and leaderboard.
      </p>
      <p>
        Frontend is running on <strong>5173</strong>, and the backend API is expected on <strong>8000</strong>.
      </p>
    </div>
  )
}

function Teams() {
  return (
    <div className="container py-5">
      <h2>Teams</h2>
      <p>Track teams, members, and competitive progress.</p>
    </div>
  )
}

function Leaderboard() {
  return (
    <div className="container py-5">
      <h2>Leaderboard</h2>
      <p>View team rankings and performance metrics.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            OctoFit Tracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

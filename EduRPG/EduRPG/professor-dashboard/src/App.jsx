import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MissionManager from './components/MissionManager';
import ProgressTracker from './components/ProgressTracker';
import InterventionPanel from './components/InterventionPanel';
import GamificationWidget from './components/GamificationWidget';
import { AuthProvider } from './context/AuthContext';
import './styles/main.css';
import './styles/components.css';
import './styles/responsive.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/missions" component={MissionManager} />
                    <Route path="/progress" component={ProgressTracker} />
                    <Route path="/intervention" component={InterventionPanel} />
                    <Route path="/gamification" component={GamificationWidget} />
                    <Route path="/" exact>
                        <h1>Bienvenido al Dashboard del Profesor</h1>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
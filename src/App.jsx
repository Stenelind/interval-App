import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TimerProvider } from './components/timecontext/TimeContext';
import AlarmView from "./components/alarmview/AlarmView";
import AnalogClock from "./components/analogclock/AnalogClock";
import DigitalClock from "./components/digitalclock/DigitalClock";
import Logo from "./components/logo/Logo"
import SetTimer from "./components/settimer/SetTimer";
import './index.css';

function App() {
  return (
    <Router>
      <TimerProvider> 
        <div className="app">
          <Routes>
            <Route path="/" element={<Logo />} />
            <Route path="/set-timer" element={<SetTimer />} />
            <Route path="/analog-clock" element={<AnalogClock />} />
            <Route path="/digital-clock" element={<DigitalClock />} />
            <Route path="/alarm-view" element={<AlarmView />} />
          </Routes>
        </div>
      </TimerProvider>
    </Router>
  );
}

export default App;

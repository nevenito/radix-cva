import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button';
import Tooltip from './components/Tooltip';

function App() {
    return (
        <div className="grid gap-2">
            <Button size="small" intent="secondary" className="bg-red-500">
                Test button
            </Button>
            <Button size="large">Test button</Button>
            <Button intent="secondary">Test button</Button>
            <Button intent="danger">Test button</Button>

            <Tooltip title="testy" intent="danger" size="large">
                <Button intent="primary" size="small">
                    Test button
                </Button>
            </Tooltip>
            <Tooltip title="testy" intent="primary" size="large">
                <Button intent="primary" size="small">
                    Test button
                </Button>
            </Tooltip>
        </div>
    );
}

export default App;

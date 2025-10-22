import React, { useState } from 'react';

const MissionManager = () => {
    const [missions, setMissions] = useState([]);
    const [missionName, setMissionName] = useState('');
    const [timeLimit, setTimeLimit] = useState('');
    const [missionType, setMissionType] = useState('standard');

    const handleAddMission = (e) => {
        e.preventDefault();
        const newMission = {
            id: Date.now(),
            name: missionName,
            timeLimit,
            type: missionType,
        };
        setMissions([...missions, newMission]);
        setMissionName('');
        setTimeLimit('');
        setMissionType('standard');
    };

    const handleDeleteMission = (id) => {
        setMissions(missions.filter(mission => mission.id !== id));
    };

    return (
        <div className="mission-manager">
            <h2>Mission Manager</h2>
            <form onSubmit={handleAddMission}>
                <input
                    type="text"
                    placeholder="Mission Name"
                    value={missionName}
                    onChange={(e) => setMissionName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Time Limit (minutes)"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(e.target.value)}
                    required
                />
                <select
                    value={missionType}
                    onChange={(e) => setMissionType(e.target.value)}
                >
                    <option value="standard">Standard</option>
                    <option value="challenge">Challenge</option>
                </select>
                <button type="submit">Add Mission</button>
            </form>
            <ul>
                {missions.map(mission => (
                    <li key={mission.id}>
                        {mission.name} - {mission.timeLimit} min - {mission.type}
                        <button onClick={() => handleDeleteMission(mission.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionManager;
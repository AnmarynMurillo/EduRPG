import React from 'react';

const GamificationWidget = ({ studentData }) => {
    return (
        <div className="gamification-widget">
            <h2>Gamificación</h2>
            <div className="xp-rewards">
                <h3>Recompensas de XP</h3>
                <p>{studentData.xp} XP</p>
            </div>
            <div className="badges">
                <h3>Insignias</h3>
                <ul>
                    {studentData.badges.map((badge, index) => (
                        <li key={index}>
                            <img src={badge.icon} alt={badge.name} />
                            <span>{badge.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GamificationWidget;
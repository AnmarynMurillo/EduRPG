import React from 'react';

const InterventionPanel = ({ students, onIntervene }) => {
    return (
        <div className="intervention-panel">
            <h2>Intervención Inmediata</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id} className="student-item">
                        <span>{student.name}</span>
                        {student.stuck && (
                            <button 
                                className="btn-intervene" 
                                onClick={() => onIntervene(student.id)}
                            >
                                Ayudar
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InterventionPanel;
import React, { useEffect, useState } from 'react';
import { fetchStudentProgress } from '../utils/api';

const ProgressTracker = () => {
    const [progressData, setProgressData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProgressData = async () => {
            try {
                const data = await fetchStudentProgress();
                setProgressData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProgressData();
    }, []);

    if (loading) {
        return <div>Cargando progreso de estudiantes...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos: {error}</div>;
    }

    return (
        <div className="progress-tracker">
            <h2>Progreso de Estudiantes</h2>
            <ul>
                {progressData.map((student) => (
                    <li key={student.id}>
                        <span>{student.name}</span>
                        <span>{student.progress}%</span>
                        <span>{student.isConnected ? 'Conectado' : 'Desconectado'}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressTracker;
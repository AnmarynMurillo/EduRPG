export const fetchMissions = async () => {
    const response = await fetch('/api/missions');
    if (!response.ok) {
        throw new Error('Error fetching missions');
    }
    return await response.json();
};

export const createMission = async (missionData) => {
    const response = await fetch('/api/missions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(missionData),
    });
    if (!response.ok) {
        throw new Error('Error creating mission');
    }
    return await response.json();
};

export const fetchStudentProgress = async (missionId) => {
    const response = await fetch(`/api/progress/${missionId}`);
    if (!response.ok) {
        throw new Error('Error fetching student progress');
    }
    return await response.json();
};

export const interveneStudent = async (studentId, missionId) => {
    const response = await fetch(`/api/intervene`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, missionId }),
    });
    if (!response.ok) {
        throw new Error('Error intervening with student');
    }
    return await response.json();
};
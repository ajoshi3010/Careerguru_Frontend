// api.js

const API_BASE_URL = 'http://localhost:5000';

export const getJobRecommendations = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/job-recommendations/${userId}`);
    const data = await response.json();
    return data.jobRecommendations;
  } catch (error) {
    console.error('Error fetching job recommendations:', error.message);
    return [];
  }
};

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const findProjects = async () => {
  const response = await api.get('/all-projects');
  const data = response.data.projects;

  return data.map(project => {
    return {
      uid: project.uid,
      data: JSON.parse(project.data)
    }
  });
};

export const newProject = async (flow) => {
  const convertToText = JSON.stringify(flow);

  await api.post('/new-project', {
    data: convertToText
  });
}
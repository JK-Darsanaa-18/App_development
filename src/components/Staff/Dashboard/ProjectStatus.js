import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import './ProjectStatus.css';

const ProjectStatus = ({ projects }) => {
  const data = projects.map((project) => ({
    name: project.name,
    completion: project.completion,
  }));

  const getColor = (completion) => {
    if (completion >= 90) return '#55d70f'; // Green for 90% and above
    if (completion >= 70) return '#c9d70f'; // Yellow for 70% to 89%
    if (completion >= 50) return '#f16e2c'
    return '#e82e1d'; // Red for below 70%
  };

  return (
    <div className="project-status">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completion">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.completion)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectStatus;
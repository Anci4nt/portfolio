'use client';

import { useEffect, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function Dashboard() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
  });
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ title: '', description: '', image: '', link: '' });
      fetchProjects(); // Refresh list
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    const res = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setProjects(projects.filter((p) => p.id !== id));
    } else {
      alert('Failed to delete project');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['title', 'description', 'image', 'link'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Add Project
        </button>
      </form>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Your Projects</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="border rounded p-4 relative bg-white shadow">
            <h4 className="text-xl font-bold">{project.title}</h4>
            <p className="text-sm">{project.description}</p>
            <a href={project.link} className="text-blue-600 underline block mt-1" target="_blank">
              {project.link}
            </a>
            <button
              onClick={() => handleDelete(project.id)}
              className="absolute top-2 right-2 text-red-600 font-bold hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

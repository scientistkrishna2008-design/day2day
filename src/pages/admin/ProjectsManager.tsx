import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import { Plus, Pencil, Trash2, X, Image as ImageIcon } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export const ProjectsManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Commercial');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const resetForm = () => {
    setTitle('');
    setCategory('Commercial');
    setDescription('');
    setImageFile(null);
    setImageUrl('');
    setEditingId(null);
    setIsModalOpen(false);
  };

  const handleOpenEdit = (project: Project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setCategory(project.category);
    setDescription(project.description);
    setImageUrl(project.imageUrl);
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let finalImageUrl = imageUrl;

      if (imageFile) {
        const storageRef = ref(storage, `projects/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      }

      const projectData = {
        title,
        category,
        description,
        imageUrl: finalImageUrl,
        updatedAt: new Date()
      };

      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), projectData);
      } else {
        await addDoc(collection(db, 'projects'), { ...projectData, createdAt: new Date() });
      }

      await fetchProjects();
      resetForm();
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project. Ensure Firestore rules allow writes.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'projects', id));
        fetchProjects();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Projects | Admin Panel</title>
      </Helmet>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-secondary">Projects</h1>
        <button 
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          <span>Add Project</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No projects found. Add your first project!</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 font-semibold text-gray-600">Image</th>
                <th className="px-6 py-4 font-semibold text-gray-600">Title</th>
                <th className="px-6 py-4 font-semibold text-gray-600">Category</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 rounded-lg bg-gray-200 overflow-hidden">
                      {project.imageUrl ? (
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon size={20} /></div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-secondary">{project.title}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">{project.category}</span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleOpenEdit(project)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(project.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10 rounded-t-3xl">
              <h2 className="text-xl font-bold text-secondary">{editingId ? 'Edit Project' : 'Add New Project'}</h2>
              <button onClick={resetForm} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                <input 
                  type="text" required value={title} onChange={e => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="e.g. Apollo Hospital Maintenance"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select 
                  value={category} onChange={e => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                >
                  <option value="Commercial">Commercial</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Residential">Residential</option>
                  <option value="Educational">Educational</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                {imageUrl && !imageFile && (
                  <div className="mb-4 relative w-32 h-24 rounded-lg overflow-hidden border border-gray-200">
                    <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
                <input 
                  type="file" accept="image/*"
                  onChange={e => e.target.files && setImageFile(e.target.files[0])}
                  className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
                <p className="text-xs text-gray-400 mt-2">Alternatively, provide an image URL if you don't want to upload a file.</p>
                <input 
                  type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  rows={4} required value={description} onChange={e => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="Describe the project scope and achievements..."
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={resetForm} className="px-6 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={uploading} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50">
                  {uploading ? 'Saving...' : 'Save Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import { Plus, Pencil, Trash2, X, User } from 'lucide-react';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export const StaffManager = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const fetchStaff = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'staff'));
      const staffData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as StaffMember[];
      setStaff(staffData);
    } catch (error) {
      console.error("Error fetching staff:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const resetForm = () => {
    setName('');
    setRole('');
    setImageFile(null);
    setImageUrl('');
    setEditingId(null);
    setIsModalOpen(false);
  };

  const handleOpenEdit = (member: StaffMember) => {
    setEditingId(member.id);
    setName(member.name);
    setRole(member.role);
    setImageUrl(member.imageUrl);
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let finalImageUrl = imageUrl;

      if (imageFile) {
        const storageRef = ref(storage, `staff/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      }

      const staffData = {
        name,
        role,
        imageUrl: finalImageUrl,
        updatedAt: new Date()
      };

      if (editingId) {
        await updateDoc(doc(db, 'staff', editingId), staffData);
      } else {
        await addDoc(collection(db, 'staff'), { ...staffData, createdAt: new Date() });
      }

      await fetchStaff();
      resetForm();
    } catch (error) {
      console.error("Error saving staff member:", error);
      alert("Failed to save staff member. Ensure Firestore rules allow writes.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to remove this staff member?')) {
      try {
        await deleteDoc(doc(db, 'staff', id));
        fetchStaff();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Staff | Admin Panel</title>
      </Helmet>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-secondary">Staff Members</h1>
        <button 
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          <span>Add Staff</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading staff members...</div>
        ) : staff.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No staff members found. Add your first team member!</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 font-semibold text-gray-600">Photo</th>
                <th className="px-6 py-4 font-semibold text-gray-600">Name</th>
                <th className="px-6 py-4 font-semibold text-gray-600">Role</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((member) => (
                <tr key={member.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                      {member.imageUrl ? (
                        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100"><User size={20} /></div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-secondary">{member.name}</td>
                  <td className="px-6 py-4 text-gray-600">{member.role}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleOpenEdit(member)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(member.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10 rounded-t-3xl">
              <h2 className="text-xl font-bold text-secondary">{editingId ? 'Edit Staff Member' : 'Add New Staff Member'}</h2>
              <button onClick={resetForm} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" required value={name} onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="e.g. John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role/Designation</label>
                <input 
                  type="text" required value={role} onChange={e => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  placeholder="e.g. Facility Manager"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                {imageUrl && !imageFile && (
                  <div className="mb-4 relative w-24 h-24 rounded-full overflow-hidden border border-gray-200">
                    <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
                <input 
                  type="file" accept="image/*"
                  onChange={e => e.target.files && setImageFile(e.target.files[0])}
                  className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
                <p className="text-xs text-gray-400 mt-2">Or provide an image URL</p>
                <input 
                  type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={resetForm} className="px-6 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={uploading} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50">
                  {uploading ? 'Saving...' : 'Save Staff'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import { Plus, Trash2, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
}

export const GalleryManager = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'gallery'));
      const imagesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as GalleryImage[];
      setImages(imagesData);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const resetForm = () => {
    setCaption('');
    setImageFile(null);
    setImageUrl('');
    setIsModalOpen(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile && !imageUrl) {
      alert("Please provide an image file or URL");
      return;
    }
    
    setUploading(true);

    try {
      let finalImageUrl = imageUrl;

      if (imageFile) {
        const storageRef = ref(storage, `gallery/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, 'gallery'), { 
        imageUrl: finalImageUrl, 
        caption,
        createdAt: new Date() 
      });

      await fetchImages();
      resetForm();
    } catch (error) {
      console.error("Error saving image:", error);
      alert("Failed to save image. Ensure Firestore rules allow writes.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await deleteDoc(doc(db, 'gallery', id));
        fetchImages();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Gallery | Admin Panel</title>
      </Helmet>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-secondary">Gallery Images</h1>
        <button 
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          <span>Add Image</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading gallery...</div>
        ) : images.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No images found. Add your first gallery image!</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {images.map((img) => (
              <div key={img.id} className="relative group rounded-xl overflow-hidden aspect-square border border-gray-200">
                <img src={img.imageUrl} alt={img.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                   <p className="text-white text-sm text-center px-2">{img.caption}</p>
                   <button onClick={() => handleDelete(img.id)} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                     <Trash2 size={16} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10 rounded-t-3xl">
              <h2 className="text-xl font-bold text-secondary">Add Gallery Image</h2>
              <button onClick={resetForm} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image Upload</label>
                {imageUrl && !imageFile && (
                  <div className="mb-4 relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
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
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Caption (Optional)</label>
                <input 
                  type="text" value={caption} onChange={e => setCaption(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="e.g. Office Cleaning"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={resetForm} className="px-6 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={uploading} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50">
                  {uploading ? 'Uploading...' : 'Save Image'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

import { useState, useEffect } from 'react';
import { StarRating } from '../components/StarRating';
import { motion } from 'framer-motion';
import { Upload, X, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

export const FeedbackPage = () => {
  const [workRating, setWorkRating] = useState(0);
  const [portfolioRating, setPortfolioRating] = useState(0);
  const [photoUrl, setPhotoUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string>('');
  
  const [state, handleSubmit] = useForm("xzzrvdlw");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      // Navigate to thank you page after 1.5 seconds
      setTimeout(() => {
        navigate('/thank-you');
      }, 1500);
    }
  }, [state.succeeded, navigate]);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please upload an image file (JPG, PNG, etc.)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    setUploadError('');

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to Dropbox
    await uploadToDropbox(file);
  };

  const uploadToDropbox = async (file: File) => {
    setIsUploading(true);
    setUploadError('');

    try {
      // Get Dropbox token from environment variable or use placeholder
      const DROPBOX_ACCESS_TOKEN = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN || '';
      
      if (!DROPBOX_ACCESS_TOKEN || DROPBOX_ACCESS_TOKEN === '') {
        console.warn('⚠️ Dropbox token not configured. Photo will not be uploaded.');
        console.log('📝 To enable photo uploads:');
        console.log('1. Create .env file in project root');
        console.log('2. Add: VITE_DROPBOX_ACCESS_TOKEN=your_token');
        console.log('3. See DROPBOX_SETUP_GUIDE.md for instructions');
        
        setUploadError('Photo upload not configured. Form will still work without photo.');
        setIsUploading(false);
        return;
      }

      // Upload to Dropbox
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const path = `/feedback-photos/${timestamp}_${safeName}`;

      const uploadResponse = await fetch('https://content.dropboxapi.com/2/files/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${DROPBOX_ACCESS_TOKEN}`,
          'Content-Type': 'application/octet-stream',
          'Dropbox-API-Arg': JSON.stringify({
            path: path,
            mode: 'add',
            autorename: true,
            mute: false
          })
        },
        body: file
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        console.error('Dropbox upload error:', errorData);
        throw new Error('Upload failed. Please check your Dropbox token and permissions.');
      }

      const uploadData = await uploadResponse.json();
      console.log('✅ File uploaded to Dropbox:', uploadData.path_display);
      
      // Create shareable link
      const linkResponse = await fetch('https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${DROPBOX_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          path: uploadData.path_display,
          settings: {
            requested_visibility: 'public'
          }
        })
      });

      if (!linkResponse.ok) {
        // Try to get existing shared link instead
        const existingLinkResponse = await fetch('https://api.dropboxapi.com/2/sharing/list_shared_links', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${DROPBOX_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            path: uploadData.path_display
          })
        });

        if (existingLinkResponse.ok) {
          const existingData = await existingLinkResponse.json();
          if (existingData.links && existingData.links.length > 0) {
            const publicUrl = existingData.links[0].url.replace('dl=0', 'raw=1');
            setPhotoUrl(publicUrl);
            console.log('✅ Using existing shared link:', publicUrl);
            setIsUploading(false);
            return;
          }
        }

        throw new Error('Failed to create shareable link');
      }

      const linkData = await linkResponse.json();
      const publicUrl = linkData.url.replace('dl=0', 'raw=1');
      setPhotoUrl(publicUrl);
      console.log('✅ Photo uploaded successfully! URL:', publicUrl);
      
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error instanceof Error ? error.message : 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const removePhoto = () => {
    setPhotoPreview('');
    setPhotoUrl('');
    setUploadError('');
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate ratings
    if (workRating === 0 || portfolioRating === 0) {
      alert('⭐ Please provide both ratings before submitting');
      return;
    }

    // All validation passed, submit the form
    handleSubmit(e);
  };

  return (
    <>
      {/* Main Content */}
      <main className="md:pl-24 md:pr-8 px-4 py-16 pb-28 md:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-emerald-400">
              Share Your Feedback
            </h1>
            <p className="text-xl text-gray-300">
              Your insights help me grow. I'd love to hear your thoughts! 💚
            </p>
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-white mb-2 font-medium">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:border-emerald-400/50"
                  required
                />
                <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
              </div>

              {/* Company/Organization */}
              <div>
                <label htmlFor="company" className="block text-white mb-2 font-medium">
                  Company / Organization <span className="text-red-400">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Tech Corp Inc."
                  className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:border-emerald-400/50"
                  required
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>

              {/* Designation */}
              <div>
                <label htmlFor="designation" className="block text-white mb-2 font-medium">
                  Designation / Position <span className="text-red-400">*</span>
                </label>
                <input
                  id="designation"
                  type="text"
                  name="designation"
                  placeholder="Senior Developer"
                  className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:border-emerald-400/50"
                  required
                />
                <ValidationError prefix="Designation" field="designation" errors={state.errors} />
              </div>

              {/* Your Feedback */}
              <div>
                <label htmlFor="feedback" className="block text-white mb-2 font-medium">
                  Your Feedback <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  placeholder="Share your thoughts about my work..."
                  rows={5}
                  className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:border-emerald-400/50 resize-none"
                  required
                />
                <ValidationError prefix="Feedback" field="feedback" errors={state.errors} />
              </div>

              {/* Personal Guidance (Optional) */}
              <div>
                <label htmlFor="guidance" className="block text-white mb-2 font-medium">
                  Personal Guidance or Suggestions for Harshit{' '}
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <textarea
                  id="guidance"
                  name="guidance"
                  placeholder="Any advice or suggestions for improvement..."
                  rows={4}
                  className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:border-emerald-400/50 resize-none"
                />
                <ValidationError prefix="Guidance" field="guidance" errors={state.errors} />
              </div>

              {/* Rate Harshit's Work */}
              <div>
                <StarRating
                  rating={workRating}
                  setRating={setWorkRating}
                  maxStars={10}
                  label="Rate Harshit's Work *"
                />
                <input type="hidden" name="workRating" value={workRating} />
              </div>

              {/* Upload Photo */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Upload your photo to appear with your testimonial on Harshit’s portfolio{' '}
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                
                {!photoPreview ? (
                  <label
                    htmlFor="photo"
                    className="flex flex-col items-center justify-center w-full h-32 bg-black/30 backdrop-blur-sm rounded-lg border-2 border-dashed border-white/10 cursor-pointer hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <Upload className="text-emerald-400 mb-2" size={32} />
                    <span className="text-gray-300">Click to upload photo</span>
                    <span className="text-gray-500 text-sm mt-1">JPG, PNG - Max 5MB</span>
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative inline-block">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg border border-emerald-400/50"
                    />
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <X size={16} />
                    </button>
                    {photoUrl && (
                      <div className="mt-2 text-sm text-emerald-400">
                        ✅ Photo uploaded successfully!
                      </div>
                    )}
                  </div>
                )}

                {isUploading && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-400"></div>
                    <span className="text-emerald-400">Uploading photo...</span>
                  </div>
                )}
                
                {uploadError && (
                  <p className="text-yellow-400 mt-2 text-sm">
                    ⚠️ {uploadError}
                  </p>
                )}
                
                {/* Hidden field for photo URL */}
                <input type="hidden" name="photoUrl" value={photoUrl} />
              </div>

              {/* Rate Portfolio */}
              <div>
                <StarRating
                  rating={portfolioRating}
                  setRating={setPortfolioRating}
                  maxStars={10}
                  label="Rate Harshit's Portfolio *"
                />
                <input type="hidden" name="portfolioRating" value={portfolioRating} />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
              >
                <MessageSquare size={24} />
                {state.submitting ? 'Sending Your Feedback...' : 'Submit Feedback'}
              </motion.button>

              {/* Success Message */}
              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 font-medium text-lg"
                >
                  🎉 Thank you for your valuable feedback! Redirecting...
                </motion.div>
              )}

              {/* Error Message */}
              {Array.isArray(state.errors) && state.errors.length > 0 && !state.submitting && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400"
                >
                  ⚠️ Oops! Something went wrong. Please try again or check if the form is configured correctly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            className="text-center mt-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg italic">
              Your feedback means the world to me. Thank you for taking the time! 💙
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
};

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
        


        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="text-emerald-400" />
            <span className="text-gray-300">Diu, India</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="text-emerald-400" />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitsoni2026@gmail.com&su=Impressed%20by%20Your%20Portfolio%20%E2%80%93%20Let%27s%20Connect!&body=Hi%20Harshit%2C%0A%0AI%20came%20across%20your%20portfolio.%20Your%20work%20aligns%20with%20some%20roles%20we%E2%80%99re%20currently%20hiring%20for%20at%20%5BCompany%20Name%5D.%0A%0ALet%20me%20know%20if%20you%27d%20be%20open%20to%20a%20quick%20conversation.%0A%0ABest%2C%0A%5BRecruiter%27s%20Name%5D%0A%5BCompany%20Name%5D
" className="text-gray-300 hover:text-emerald-400">
              harshitsoni2026@gmail.com
            </a>
          </div>
          
        </div>

        <div className="mt-8">
          <h4 className="text-white mb-1">Connect with me</h4>
          <p className="text-sm text-gray-400 mb-4 italic">
            Text me to collaborate or just drop a “Hey!” 😄
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Harshitsoni294" className="text-gray-400 hover:text-emerald-400">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/harshitsoni29" className="text-gray-400 hover:text-emerald-400">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>
        
        <div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full h-32 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-emerald-400">
            Message sent successfully! 📨 Let’s build something awesome together.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400">
            Oops! Something went wrong. But hey, don’t give up on me yet 😅
          </p>
        )}

        <div className="text-lg text-white-400 text-center pt-4 italic">
        Let’s make the end of this page a new beginning — send me a message!😅<br />
          Or just say hi — I’m always open to ideas!
        </div>
      </form>
    </div>
  );
};

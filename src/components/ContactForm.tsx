import { Mail, MapPin, Linkedin, Github as GitHub } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzzrvdlw");

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Info Section */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>

        <div className="space-y-4">
          {/* Location */}
          <div className="flex items-center space-x-3">
            <MapPin className="text-emerald-400" />
            <span className="text-gray-300">Diu, India</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="text-emerald-400" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitsoni2026@gmail.com&su=Impressed%20by%20Your%20Portfolio%20%E2%80%93%20Let%27s%20Connect!&body=Hi%20Harshit%2C%0A%0AI%20came%20across%20your%20portfolio.%20Your%20work%20aligns%20with%20some%20roles%20we%E2%80%99re%20currently%20hiring%20for%20at%20%5BCompany%20Name%5D.%0A%0ALet%20me%20know%20if%20you%27d%20be%20open%20to%20a%20quick%20conversation.%0A%0ABest%2C%0A%5BRecruiter%27s%20Name%5D%0A%5BCompany%20Name%5D"
              className="text-gray-300 hover:text-emerald-400"
            >
              harshitsoni2026@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <Linkedin className="text-emerald-400" />
            <a
              href="https://www.linkedin.com/in/harshitsoni29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400"
            >
              linkedin.com/in/harshitsoni2026
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-3">
            <GitHub className="text-emerald-400" />
            <a
              href="https://github.com/harshitsoni29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400"
            >
              github.com/harshitsoni29
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-white mb-1">Connect with me</h4>
          <p className="text-sm text-gray-400 mb-4 italic">
            Text me to collaborate or just drop a “Hey!” 😄
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>

        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full h-32 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>

        {state.succeeded && (
          <p className="text-emerald-400">
            Message sent successfully! 📨 Let’s build something awesome together.
          </p>
        )}

        {Array.isArray(state.errors) && state.errors.length > 0 && !state.submitting && (
          <p className="text-red-400">
            Oops! Something went wrong. But hey, don’t give up on me yet 😅
          </p>
        )}

        <div className="text-lg text-white text-center pt-4 italic">
          Let’s make the end of this page a new beginning — send me a message! 😅<br />
          Or just say hi — I’m always open to ideas!
        </div>
      </form>
    </div>
  );
};
import { Mail, MapPin, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from '../ui/SocialLinks.jsx';

const ContactSection = () => {
  {/* EmailJS Configuration */}
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  {/* Form State */}
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  {/* UI State */}
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  {/* Form Validation */}
  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter a message');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters');
      return false;
    }
    return true;
  };

  {/* Form Submit Handler */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSubmitStatus('idle');
    setErrorMessage('');
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
         
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or email fetchcaterdesign@gmail.com directly.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  {/* Input Change Handler */}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-portfolio-hero"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-xl max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-start">
          {/* Contact Information */}
          <div className="flex-shrink-0 lg:w-auto w-full lg:flex lg:flex-col lg:items-start flex flex-col items-center">
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold mb-8 lg:text-left text-center text-foreground">
              Connect
            </h3>
            
            {/* Desktop Layout */}
            <div className="hidden lg:block space-y-12">
              <div className="space-y-6">

                {/* Location */}
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm mb-1 text-muted-foreground">Location</p>
                    <p className="text-sm sm:text-base text-foreground">Perth, Western Australia, Australia</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a 
                href="mailto:fetchcaterdesign@gmail.com"
                className="flex items-center gap-4 text-left hover:opacity-80 transition-opacity"
              >
                <div className="social-lightning w-12 h-12 rounded-portfolio flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm mb-1 text-muted-foreground">Email</p>
                  <span className="text-sm sm:text-base text-foreground">
                    fetchcaterdesign@gmail.com
                  </span>
                </div>
              </a>

              {/* Social Links */}
              <div className="flex gap-4">
                <SocialLinks variant="large" excludeEmail={true} />
              </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden">
              {/* Medium Mobile */}
              <div className="hidden md:flex flex-wrap gap-6 items-center justify-center">

                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5 text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">Perth, WA, Australia</p>
                  </div>

                  <a 
                    href="mailto:fetchcaterdesign@gmail.com"
                    className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity"
                  >
                  <div className="social-lightning w-12 h-12 rounded-portfolio flex items-center justify-center">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5 text-muted-foreground">Email</p>
                    <span className="text-sm sm:text-base text-foreground">
                      fetchcaterdesign@gmail.com
                    </span>
                  </div>
                </a>

                </div>
                  <SocialLinks variant="large" excludeEmail={true} />
                </div>

              {/* Small Mobile */}
              <div className="md:hidden space-y-4">

                <div className="flex justify-center">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs mb-0.5 text-muted-foreground">Location</p>
                      <p className="text-sm text-foreground">Perth, WA, Australia</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="mailto:fetchcaterdesign@gmail.com"
                    className="social-lightning w-12 h-12 rounded-portfolio flex items-center justify-center"
                    aria-label="Email"
                    title="fetchcaterdesign@gmail.com"
                  >
                    <Mail className="w-5 h-5 text-foreground" />
                  </a>

                  <SocialLinks variant="large" excludeEmail={true} />
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative w-full lg:w-[640px] xl:w-[680px] 2xl:w-[760px]">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-primary rounded-portfolio-lg blur-2xl opacity-30 pointer-events-none z-0"></div>
            
            <div 
              className="relative p-8 rounded-portfolio-lg card-lightning border-2 border-portfolio z-10"
              style={{ 
                background: 'linear-gradient(to bottom, var(--card) 0%, var(--background) 100%)'
              }}
            >
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold mb-8 text-foreground">
                Reach Out!
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm mb-2 text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="input-lightning w-full px-4 py-3 rounded-portfolio border focus:outline-none focus:ring-0 bg-input border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm mb-2 text-muted-foreground">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="input-lightning w-full px-4 py-3 rounded-portfolio border focus:outline-none focus:ring-0 bg-input border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm mb-2 text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Hello, I'd like to talk about..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="input-lightning w-full px-4 py-3 rounded-portfolio border focus:outline-none focus:ring-0 resize-none bg-input border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Submit Button / Status Container */}
                <div className="flex justify-center" style={{ minHeight: '63px' }}>
                  <div className="relative w-full max-w-[280px] flex items-center justify-center">
                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <div 
                        className="flex items-center justify-center gap-3 animate-slide-up"
                        style={{
                          borderRadius: '16px',
                          padding: '16px 32px',
                          border: '2px solid #8A8A96',
                          background: 'rgb(22, 23, 39)',
                          fontSize: '18px',
                          fontWeight: '500',
                          color: '#8A8A96',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#8A8A96' }} />
                        <span>Message sent successfully!</span>
                      </div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <div 
                        className="flex items-center justify-center gap-3 animate-slide-up"
                        style={{
                          borderRadius: '16px',
                          padding: '16px 32px',
                          border: '2px solid rgba(239, 68, 68, 0.3)',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          fontSize: '18px',
                          fontWeight: '500',
                          color: '#EF4444',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#EF4444' }} />
                        <span>{errorMessage || 'Failed to send'}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    {submitStatus === 'idle' && (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-lightning-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed animate-slide-up w-full ${isSubmitting ? 'pointer-events-none' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ 
                                border: '2px solid #8A8A96',
                                borderTopColor: 'transparent',
                                animation: 'spin 1s linear infinite'
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React from 'react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert';
import{Particles} from '../components/Particles';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'


const Contact = () => {
   
    useEffect(() => {
        // Debug: Check if environment variables are loaded
        console.log('All import.meta.env:', import.meta.env);
        console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        
        if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
            console.log('EmailJS initialized successfully');
        } else {
            console.error('VITE_EMAILJS_PUBLIC_KEY is undefined!');
        }
    }, []);
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');
    const handleChange =(e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const showAlertMessage=(type, message) => {
         setShowAlert(true);
        setAlertType(type);
        setAlertMessage(message);
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }
    const handleSubmits = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Debug: Log environment variables
        console.log('Environment variables:', {
            serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            toEmail: import.meta.env.VITE_TO_EMAIL
        });
        
        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    to_name: "Onesimus",
                    from_email: formData.email,
                    to_email: import.meta.env.VITE_TO_EMAIL,
                    message: formData.message
                }
            );
            
            console.log('Email sent successfully:', result);
            setIsLoading(false);
            setFormData({name: '', email: '', message: ''});
            showAlertMessage('success', 'Message sent successfully!');
           
        } catch (error) {
            console.error('Email send error:', error);
            setIsLoading(false);
            showAlertMessage('danger', 'Something went wrong. Please try again.');
        }
    }


return (
    <section id="contact" className='relative flex items-center c-space section-spacing'>
        
        
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        {showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto
        border border-white/10 rounded-2xl bg-primary'>
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                <h2 className='text-heading'>Let's Talk about it!</h2>
                <p className='font-normal text-neutral-400'>
                    Whether you're looking to collaborate on a project or just want to say hello, feel free to reach out! It will be my pleasure to connect with you.
                </p>
            </div>
            <form className="w-full" onSubmit={handleSubmits}>
                <div className='mb-5'>
                    <label htmlFor="name" className='field-label'>
                        Full Name
                    </label>
                    <input 
                    type="text" 
                    id='name'
                    name='name'
                    className='field-input field-input-focus'
                    placeholder='Enter your full name'
                    autoComplete='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='field-label'>
                        Email
                    </label>
                    <input 
                    type="email" 
                    id='email'
                    name='email'
                    className='field-input field-input-focus'
                    placeholder='doejohn@gmail.com'
                    autoComplete='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="message" className='field-label'>
                        Message
                    </label>
                    <textarea 
                    type="text" 
                    id='message'
                    name='message'
                    rows="4"
                    className='field-input field-input-focus'
                    placeholder='Share your thoughts.... '
                    autoComplete='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
                    {!isLoading ? 'Send' : 'Sending...'}
                </button>
            </form>
        </div>

        

    </section>
  )
}

export default Contact
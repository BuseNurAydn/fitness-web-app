import { motion } from 'framer-motion';
import Htext from "../../shared/Htext";
import { useState } from 'react';
import ContactImg from "../../assets/jpg/ContactImage.jpg";

type Props = {};

const ContactUs = (props: Props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form submitted:', { name, surname, phone, message });
        setName('');
        setSurname('');
        setPhone('');
        setMessage('');
    };

    return (
        <section id="contactus" className="mx-auto py-20 w-5/6">
            <div>
                <div>
                    <Htext>Contact Us</Htext>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam ipsa iusto aliquid numquam provident quo ex molestiae earum voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem.
                    </p>
                </div>

                <div className="mt-10 md:flex">
                    {/* Form alanı */}
                    <motion.div
                      className="md:w-4/6"
                      animate={{ opacity: 1 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.4}}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }} 
                    >
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={name}
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border-2 mb-4 border-pink-200 rounded-md px-4 py-2 placeholder-gray-400 outline-none w-full"
                            />
                            <input
                                type="text"
                                placeholder="Surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                required
                                className="border-2 mb-4 border-pink-200 rounded-md px-4 py-2 placeholder-gray-400 outline-none w-full"
                            />
                            <input
                                type="text"
                                value={phone}
                                placeholder="+90 (555) 000-0000"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="border-2 mb-4 border-pink-200 rounded-md px-4 py-2 placeholder-gray-400 outline-none w-full"
                            />
                            <textarea
                                placeholder="Message"
                                rows={8}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="border-2 mb-4 border-pink-200 rounded-md px-4 py-2 placeholder-gray-400 outline-none w-full"
                            />
                            <button
                                className="bg-pink-500 px-8 py-1 rounded-lg text-center hover:bg-pink-600"
                                type="submit"
                            >
                                Gönder
                            </button>
                        </form>
                    </motion.div>

                    {/* Resim alanı */}
                    <motion.div
                        className="relative md:ml-40 mt-8 md:mt-0"
                        animate={{ opacity: 1 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4}}
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                      }} 
                    >
                        <img
                            src={ContactImg}
                            alt=""
                            className="rounded-lg opacity-80 hover:opacity-100 transition duration-500 cursor-pointer"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

import {motion} from "framer-motion";
import LocationIcon from "../../../assets/icons/location-add.svg";
import callIcon from "../../../assets/icons/call-incoming.svg";
import smsIcon from "../../../assets/icons/sms.svg";
import {useState} from "react";
import emailjs from '@emailjs/browser';
const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_me', 'contact_me', e.target, '1OiJLxMax-YJXH7AS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <motion.div
        className={'container'}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <div className={'mt-9 flex flex-col md:flex-row items-center gap-5 justify-evenly'}>
          <div className={'mt-3 md:w-40 w-2/6 flex flex-col justify-center items-center'}>
            <img className={'w-12 h-12'} src={LocationIcon} alt="location icon"/>
            <p className={'font-bold'}>Office</p>
            <p className={'text-gray-500 text-center font-thin text-sm'}>123 Main Street, Anytown,USA</p>
          </div>
          <div className={'md:w-40 w-2/6 flex flex-col justify-center items-center'}>
            <img className={'w-12 h-12'} src={smsIcon} alt="sms icon"/>
            <p className={'font-bold'}>Email</p>
            <p className={'text-gray-500 text-center font-thin text-sm'}>test@gmail.com</p>
          </div>
          <div className={'md:w-40 w-2/6 flex flex-col justify-center items-center'}>
            <img className={'w-12 h-12'} src={callIcon} alt="call icon"/>
            <p className={'font-bold'}>Phone</p>
            <p className={'text-gray-500 text-center font-thin text-sm'}>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-14 text-justify mt-10">
          <div className={'flex-1'}>
            <h3 className={'text-center md:text-justify text-lg font-semibold'}>Message us</h3>
            <p className={'my-3'}>We&apos;re here to assist you every step of the way. Whether you have a question, need technical support, or simply want to share your feedback, our dedicated team is ready to listen and provide prompt assistance.</p>
          </div>
          <form onSubmit={handleSubmit} className={'flex-1 flex flex-col gap-5'}>
            <input
              className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
              placeholder={'Your name'}
              onChange={handleChange}
              type="text"
              name={'name'}
              value={formData.name}
            />
            <input
              name={'email'}
              className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
              placeholder={'Email'}
              onChange={handleChange}
              type="email"
              value={formData.email}
            />
            <textarea
              className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
              placeholder={'Message'}
              name="message"
              id=""
              cols="30"
              onChange={handleChange}
              value={formData.message}
              rows="8"></textarea>
            <button className={'btn btn-primary'}>Submit</button>
          </form>
        </div>
      </motion.div>
    </>
  )
}

export default ContactPage;
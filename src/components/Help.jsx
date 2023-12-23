// src/components/HelpPage.js
import React from 'react';
import FaqAccordion from './FaqHelp';
import Footer from './Footer'
// import '../fontAwesome'; // Import Font Awesome configuration

const HelpPage = () => {

  // src/data/faqData.js
const faqData = [
  {
    id: 1,
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    question: "How can I contact support?",
    answer: "You can contact our support team by emailing support@example.com.",
  },
  {
    id: 3,
    question: "Is there a mobile app available?",
    answer: "Yes, we have a mobile app for both iOS and Android platforms. You can download it from the respective app stores.",
  },
  {
    id: 4,
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your registered email.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and other secure payment methods. You can find more details in the payment section of your account settings.",
  },
  {
    id: 6,
    question: "Can I change my subscription plan?",
    answer: "Yes, you can change your subscription plan at any time by going to your account settings and selecting the desired plan.",
  },
  {
    id: 7,
    question: "Are there any discounts available?",
    answer: "We occasionally offer discounts and promotions. Keep an eye on our website and follow us on social media to stay informed about any ongoing discounts.",
  },
  {
    id: 8,
    question: "How do I update my account information?",
    answer: "You can update your account information, including your email address and password, in the account settings section.",
  },
  {
    id: 9,
    question: "What is your refund policy?",
    answer: "Our refund policy is outlined in the terms and conditions. Please refer to the refund policy section on our website for detailed information.",
  },
  {
    id: 10,
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a free trial for new users. You can sign up for a free trial on our website and explore the features before making a subscription commitment.",
  },
  // Add more FAQs as needed
  {
    id: 11,
    question: "How do I customize my profile?",
    answer: "To customize your profile, go to the profile settings page where you can update your profile picture, bio, and other personal information.",
  },
  {
    id: 12,
    question: "Can I share my account with others?",
    answer: "No, sharing accounts is against our terms of service. Each user should have their own individual account.",
  },
  {
    id: 13,
    question: "What happens if I forget my username?",
    answer: "If you forget your username, you can recover it by providing the email address associated with your account. We will send you instructions on how to retrieve your username.",
  },
  {
    id: 14,
    question: "Is my data secure?",
    answer: "Yes, we take the security of your data seriously. We use encryption and other security measures to protect your information. You can find more details in our privacy policy.",
  },
  {
    id: 15,
    question: "How do I report a bug or issue?",
    answer: "If you encounter a bug or issue, please contact our support team and provide detailed information about the problem. We will investigate and work on resolving it.",
  },
  {
    id: 16,
    question: "Can I change my username?",
    answer: "Currently, we do not support the ability to change usernames. Choose your username carefully during the account creation process.",
  },
  {
    id: 17,
    question: "Do you have a community forum?",
    answer: "Yes, we have a community forum where users can discuss features, ask questions, and share experiences. You can find the link to the forum on our website.",
  },
  {
    id: 18,
    question: "What browsers do you support?",
    answer: "We support the latest versions of popular browsers such as Chrome, Firefox, Safari, and Edge. Make sure to keep your browser updated for the best experience.",
  },
  {
    id: 19,
    question: "How do I unsubscribe from emails?",
    answer: "To unsubscribe from emails, you can adjust your email preferences in the account settings. Alternatively, you can use the 'unsubscribe' link provided in the emails.",
  },
  {
    id: 20,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time by visiting your account settings.",
  },
];





  return (
   <> <div className="container mx-auto  py-8 ">
      
      <h1 className="text-3xl font-bold m-4  p-auto bg-gray-800 text-white text-center h-16">Help Center</h1>
      <p className="text-gray-600 mb-8">Welcome to our help center. Find answers to frequently asked questions below.</p>

      {/* Add your dummy content here */}

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      
        <div className="space-y-4 ">

          {
            faqData.map(item=>(
              <div className='mb-10'><FaqAccordion  key={item.id} data={item}/></div>
            ))
          }
          {/* Add more FAQs as needed */}
        </div>
      </section>

      



    </div>
    <Footer/>
    </>
  );
};

export default HelpPage;

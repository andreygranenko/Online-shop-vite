import {motion} from "framer-motion";
import './faq-page.sass';
const FaqPage = () => {
  return (
    <>
      <motion.div
        className={'container px-5 py-5 faq-page '}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <img src="https://i.ibb.co/NsWWJkf/Frame-26086945.png" alt="faq"/>
        <div className="container flex justify-center align-middle">
          <aside className={'py-3'}>
            Table of Contents
            <ul>
              <li><a href="#">General</a></li>
              <li><a href="#">Trusts & Safety</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Billing</a></li>
            </ul>
          </aside>

          <div className="container questions py-3">
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Can I purchase products from Tech Heim using installment payments?
              </div>
              <div className="collapse-content">
                <p>Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget.
                </p>
              </div>
            </div>
            <hr/>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I engage with the magazine content on Tech Heim?
              </div>
              <div className="collapse-content">
                <p>You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with fellow tech enthusiasts in the community.</p>
              </div>
            </div>
            <hr/>

            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Does Tech Heim offer a warranty on its products?
              </div>
              <div className="collapse-content">
                <p>Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.</p>
              </div>
            </div>
            <hr/>

            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Is Tech Heim a secure platform for online shopping?
              </div>
              <div className="collapse-content">
                <p>Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.</p>
              </div>
            </div>
            <hr/>

            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I get assistance with my purchase or any other inquiries?
              </div>
              <div className="collapse-content">
                <p>If you need assistance with your purchase or have any questions, our dedicated customer support team is here to help. You can reach out to us through the contact page on our website, and we&apos;ll be happy to assist you promptly.</p>
              </div>
            </div>
            <hr/>

          </div>
        </div>

      </motion.div>
    </>

  );
};

export default FaqPage;

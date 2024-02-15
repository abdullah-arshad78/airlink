import { useEffect } from "react";
import { AiFillCaretRight } from "react-icons/ai";

const pointsHeadingClasses = "font-bold mt-2 md:mt-4";
const listItemClasses = "flex items-start justify-start space-x-2 my-2";
const iconClasses =
  "w-[1.2rem] h-[1.2rem] min-w-[1.2rem] min-h-[1.2rem] md:w-[1.5rem] md:h-[1.5rem] md:min-w-[1.5rem] md:min-h-[1.5rem]";
const Privacy = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-left pt-[13vh] sm:pt-[12vh] w-[100vw] min-w-[100vw] text-slate-600">
      <div className=" px-4 w-full max-w-[60rem] md:px-8">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 heading-font text-[1.5rem] md:text-[2rem] font-black white-shadow">
          Privacy Policy for Airlink Travels
        </h1>
        <span className="font-bold text-sm my-4">
          Last updated: February 14, 2024
        </span>
        <div className="privacy-content my-4">
          <h2 className="mb-4">
            Welcome to Airlink Travels, a premier travel agency based in
            Ireland. Protecting your privacy is paramount to us. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website and use our services.
          </h2>
          <h3 className={pointsHeadingClasses}>1. Information We Collect</h3>
          <p>
            {" "}
            We collect information that you provide directly to us, including
            but not limited to:
          </p>
          <ul className="flex flex-col">
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                Personal Identification Information: Name, email address, phone
                number, postal address.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                Travel Preferences and Requirements: Information related to your
                travel preferences, including flight and accommodation
                preferences, dietary requirements, and other information
                relevant to customizing your travel package.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                Transaction Information: Details of the services you have
                purchased from us, including financial information required to
                process your payments.
              </p>
            </li>
          </ul>

          <h3 className={pointsHeadingClasses}>
            2. How We Use Your Information
          </h3>
          <p> The information we collect is used for various purposes:</p>
          <ul>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                To provide and maintain our services, including booking tickets
                and customizing holiday packages.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                To communicate with you, respond to your inquiries, and provide
                customer support.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                To process transactions and send related information, including
                confirmations and invoices.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                For marketing and promotional activities, provided you have
                given consent.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                To improve our website and services based on your feedback and
                interactions.
              </p>
            </li>
          </ul>
          <h3 className={pointsHeadingClasses}>
            3. How We Share Your Information
          </h3>
          <p>
            {" "}
            We may share your information with third parties in the following
            situations:
          </p>
          <ul>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                Service Providers: To airlines, hotels, and other service
                providers for booking and reservation purposes.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                Legal Requirements: If required by law or in response to valid
                requests by public authorities (e.g., a court or a government
                agency).
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                Business Transfers: In connection with, or during negotiations
                of, any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business to another
                company.
              </p>
            </li>
          </ul>
          <h3 className={pointsHeadingClasses}>4. Data Security</h3>
          <p>
            {" "}
            We implement a variety of security measures to maintain the safety
            of your personal information when you enter, submit, or access your
            personal information.
          </p>

          <h3 className={pointsHeadingClasses}>
            5. Your Data Protection Rights
          </h3>
          <p> Under GDPR, you have various rights including:</p>
          <ul>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                {" "}
                The right to access, update or delete the information we have on
                you.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                The right of rectification, to have your information corrected
                if it is inaccurate or incomplete.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                The right to object to our processing of your personal data.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                The right to data portability, to receive a copy of the
                information we have on you in a structured, machine-readable,
                and commonly used format.
              </p>
            </li>
            <li className={listItemClasses}>
              <AiFillCaretRight className={iconClasses} />
              <p>
                The right to withdraw consent at any time where we rely on your
                consent to process your personal information.
              </p>
            </li>
          </ul>
          <h3 className={pointsHeadingClasses}>
            6. Changes to This Privacy Policy
          </h3>
          <p>
            {" "}
            We reserve the right to modify this privacy policy at any time, so
            please review it frequently. Changes and clarifications will take
            effect immediately upon their posting on the website.
          </p>

          <h3 className={pointsHeadingClasses}>7. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at info@airlink.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

// Privacy Policy for [Travel Agency Name]

// Last Updated: [Date]

// Welcome to [Travel Agency Name], a premier travel agency based in Ireland. Protecting your privacy is paramount to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

// 1. Information We Collect
// We collect information that you provide directly to us, including but not limited to:

// Personal Identification Information: Name, email address, phone number, postal address.
// Travel Preferences and Requirements: Information related to your travel preferences, including flight and accommodation preferences, dietary requirements, and other information relevant to customizing your travel package.
// Transaction Information: Details of the services you have purchased from us, including financial information required to process your payments.
// 2. How We Use Your Information
// The information we collect is used for various purposes:

// To provide and maintain our services, including booking tickets and customizing holiday packages.
// To communicate with you, respond to your inquiries, and provide customer support.
// To process transactions and send related information, including confirmations and invoices.
// For marketing and promotional activities, provided you have given consent.
// To improve our website and services based on your feedback and interactions.
// 3. How We Share Your Information
// We may share your information with third parties in the following situations:

// Service Providers: To airlines, hotels, and other service providers for booking and reservation purposes.
// Legal Requirements: If required by law or in response to valid requests by public authorities (e.g., a court or a government agency).
// Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
// 4. Data Security
// We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.

// 5. Your Data Protection Rights
// Under GDPR, you have various rights including:

// The right to access, update or delete the information we have on you.
// The right of rectification, to have your information corrected if it is inaccurate or incomplete.
// The right to object to our processing of your personal data.
// The right to data portability, to receive a copy of the information we have on you in a structured, machine-readable, and commonly used format.
// The right to withdraw consent at any time where we rely on your consent to process your personal information.
// 6. Changes to This Privacy Policy
// We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.

// 7. Contact Us
// If you have any questions or concerns about this Privacy Policy, please contact us at [Contact Information].

// This Privacy Policy has been created to be compliant with the General Data Protection Regulation (GDPR) and the Data Protection Acts in Ireland.

// Note: It's important to tailor this Privacy Policy template to your specific circumstances and to ensure it complies with all applicable laws and regulations. Legal advice should be sought to ensure full compliance.

import { Newsletter } from "./Newsletter";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const { VITE_MAILCHIMP_URL, VITE_MAILCHIMP_U, VITE_MAILCHIMP_ID } = import.meta
  .env;

export const MailchimpForm = () => {
  const postUrl = `${VITE_MAILCHIMP_URL}?u=${VITE_MAILCHIMP_U}&id=${VITE_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

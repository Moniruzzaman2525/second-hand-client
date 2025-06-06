import ComparePage from "@/components/modules/compare/comparison";
import ContactForm from "@/components/modules/contact";
import ContactLocation from "@/components/modules/contact/ContactLocation";

const ContactUsPage = () => {
    return (
        <div>
            <ContactForm />
            <ContactLocation />
            <ComparePage />
        </div>
    );
};

export default ContactUsPage;

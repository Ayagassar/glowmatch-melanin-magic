
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium text-skin-brown-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-skin-brown-600">
              Have questions about skincare? We're here to help you achieve your best skin.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

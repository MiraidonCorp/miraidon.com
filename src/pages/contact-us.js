import * as React from "react"
import Layout from "../components/layout/layout"
import ContactForm from "../components/ContactUs/ContactForm";
import PageBanner from "../components/common/PageBanner";
import Subscribe from "../components/common/Subscribe";

const ContactUs = (props) => {
    return( <Layout>
        <PageBanner pageName="Contact Us" />
        <ContactForm />
        <Subscribe />
    </Layout>);
}

export default ContactUs
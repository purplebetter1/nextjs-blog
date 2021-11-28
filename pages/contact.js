import { Fragment } from 'react'
import Head from 'next/head'
import ContactForm from '../components/contacts/contact-form'

function ContactPage() {
  
  return (
    <Fragment>
    <Head>
      <title>Contact Me</title>
      <meta name="descritpion" content="send a message to let us know what you think" />
    </Head>
    <ContactForm />
  </Fragment>
  )
  
}

export default ContactPage

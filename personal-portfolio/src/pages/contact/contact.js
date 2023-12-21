import Title from "../../components/elements/title"
import './contact.scss';

const Contact = () => {

    return (
      <section className="contact" id="contact">
        <Title>Contact</Title>
        <p>
          I am always open to new oppertunities and collaborations. If you have
          a project that you think I can help with, feel fre to contact me
        </p>
        <email>KatharineK@gmail.com</email>
        <br />
        <a href="http://google.com"
        >LinkedIn</a> <br />
        <a href="http://google.com">Github</a>
        <br />
        <a href="http://google.com">Resume</a>
        <br />
      </section>
    );
}

export default Contact
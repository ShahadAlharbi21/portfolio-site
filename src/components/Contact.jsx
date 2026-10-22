import github from '../assets/github-light.svg';
import email from '../assets/mailboxdotorg.svg';
export default function Contact() {
  return <section id="contact" className="contact-banner" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact</h2>
    <div className="contact-links">
      <a href="https://github.com/ShahadAlharbi21" target="_blank" rel="noopener noreferrer"><img src={github} alt="" width="40" height="40" /><span>GitHub</span></a>
      <a href="mailto:shahad_100hr@outlook.com"><img src={email} alt="" width="40" height="40" /><span>Email</span></a>
    </div>
  </section>;
}

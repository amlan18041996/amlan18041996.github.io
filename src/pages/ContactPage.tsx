import { type FormEvent, useState } from 'react';
import { ArrowUpRight, CalendarDays, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { portfolioData } from '../data/portfolio';
import type { SocialLink } from '../types/portfolio';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
};

type OnlineSocialLink = SocialLink & { platform: 'github' | 'linkedin' };

export default function ContactPage() {
  const { person } = portfolioData;
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !subject || !message) {
      setFormMessage('Please complete each field before sending.');
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormMessage('Your email app should open with the message ready to send.');
    event.currentTarget.reset();
  };

  return (
    <article className="route-page contact-page">
      <div className="page-container">
        <Reveal className="route-heading">
          <p className="eyebrow">The first step is simple</p>
          <h1 className="section-title">Let’s talk about what’s next<span className="title-period">.</span></h1>
          <p className="route-lead">
            Share a project, an opportunity, or a question. Tell me what you’re thinking and I’ll get back to you.
          </p>
        </Reveal>

        <div className="contact-page-layout">
          <Reveal className="contact-page-card contact-form-card">
            <div className="contact-form-intro">
              <span className="contact-step">01</span>
              <div>
                <p className="eyebrow">Send a message</p>
                <h2 className="contact-form-heading">Tell me about it.</h2>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input autoComplete="name" name="name" required />
              </label>
              <label>
                Email
                <input autoComplete="email" name="email" type="email" required />
              </label>
              <label>
                Subject
                <input name="subject" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={6} required />
              </label>
              <p className="contact-form-note">This prepares an email in your own mail app; nothing is sent from this site.</p>
              <button className="button button-primary" type="submit">
                Prepare email <ArrowUpRight size={16} aria-hidden="true" />
              </button>
              <p className="contact-form-status" role="status" aria-live="polite">{formMessage}</p>
            </form>
          </Reveal>

          <aside className="contact-page-details" aria-label="Other ways to connect">
            <Reveal className="contact-page-card">
              <div className="contact-card-heading">
                <span className="contact-step">02</span>
                <p className="eyebrow">Direct contact</p>
              </div>
              <a className="contact-detail" href={`mailto:${person.email}`}>
                <Mail size={18} aria-hidden="true" />
                <span>{person.email}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a className="contact-detail" href={`tel:${person.phone}`}>
                <Phone size={18} aria-hidden="true" />
                <span>{person.phone}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <p className="contact-detail contact-location">
                <MapPin size={18} aria-hidden="true" />
                <span>{person.location}</span>
              </p>
            </Reveal>

            {person.appointmentUrl && (
              <Reveal className="contact-page-card contact-booking-card">
                <div className="contact-card-heading">
                  <span className="contact-step"><CalendarDays size={15} aria-hidden="true" /></span>
                  <p className="eyebrow">Book a conversation</p>
                </div>
                <p className="contact-booking-copy">
                  Choose an available time through Google Calendar.
                </p>
                <a
                  className="button button-primary contact-booking-link"
                  href={person.appointmentUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View available times <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Reveal>
            )}

            <Reveal className="contact-page-card">
              <div className="contact-card-heading">
                <span className="contact-step">03</span>
                <p className="eyebrow">Find me online</p>
              </div>
              <div className="contact-page-socials">
                {portfolioData.socials
                  .filter(
                    (social): social is OnlineSocialLink =>
                      social.platform === 'github' || social.platform === 'linkedin',
                  )
                  .map((social) => {
                    const Icon = socialIcons[social.platform];
                    return (
                      <a
                        href={social.url}
                        key={social.platform}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon size={17} aria-hidden="true" />
                        <span>{social.label}</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    );
                  })}
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </article>
  );
}

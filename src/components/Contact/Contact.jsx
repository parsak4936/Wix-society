import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <Section>
      <TitleContainer>
        <span className="green">{t("Get in touch")}</span>
        <h1>{t("Let’s build something together")}</h1>
      </TitleContainer>

      {status === "success" ? (
        <Thanks initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {t(
            "Thank you! Your message has been sent — I’ll get back to you soon."
          )}
        </Thanks>
      ) : (
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <Field
            type="text"
            name="name"
            placeholder={t("Your name")}
            value={form.name}
            onChange={handleChange}
            required
          />
          <Field
            type="email"
            name="email"
            placeholder={t("Your email")}
            value={form.email}
            onChange={handleChange}
            required
          />
          <Area
            name="message"
            rows="5"
            placeholder={t("Your message")}
            value={form.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit" disabled={status === "sending"}>
            {status === "sending" ? t("Sending...") : t("Send message")}
          </SubmitButton>
          {status === "error" && (
            <ErrorMsg>
              {t("Something went wrong. Please email me directly.")}
            </ErrorMsg>
          )}
        </Form>
      )}
    </Section>
  );
};

export default Contact;

/* ---------- STYLES ---------- */

const Section = styled.div`
  width: 90%;
  max-width: 720px;
  margin: 0 auto;
  padding: 5rem 0 6rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  span {
    font-weight: 700;
    text-transform: uppercase;
    color: #018367;
  }

  h1 {
    padding-top: 1rem;
    color: #fff;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const fieldStyles = `
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.3s;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    outline: none;
    border-color: #018367;
  }
`;

const Field = styled.input`
  ${fieldStyles}
`;

const Area = styled.textarea`
  ${fieldStyles}
  resize: vertical;
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 10px;
  background: #018367;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  &:hover {
    background: #00a37a;
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
    transform: none;
  }
`;

const Thanks = styled(motion.div)`
  text-align: center;
  font-size: 1.2rem;
  color: #9fe3cf;
  padding: 2rem 0;
`;

const ErrorMsg = styled.p`
  color: #ff8a80;
  font-size: 0.9rem;
  margin: 0;
`;

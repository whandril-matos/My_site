"use client";
import React, { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = formData.name.trim() === "";
    const emailError = !validateEmail(formData.email);
    const phoneError = !validatePhone(formData.phone);

    setErrors({ name: nameError, email: emailError, phone: phoneError });

    if (!nameError && !emailError && !phoneError) {
      console.log("Form data:", formData);
      alert("Formulário enviado com sucesso!");
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Formulário</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.error : ""}
            placeholder="Digite seu nome"
          />
          {errors.name && <span className={styles.errorMsg}>O nome é obrigatório.</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.error : ""}
            placeholder="Digite seu e-mail"
          />
          {errors.email && <span className={styles.errorMsg}>E-mail inválido.</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? styles.error : ""}
            placeholder="Digite seu telefone"
          />
          {errors.phone && <span className={styles.errorMsg}>Número de telefone inválido.</span>}
        </div>
        <button type="submit" className={styles.submitBtn}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;

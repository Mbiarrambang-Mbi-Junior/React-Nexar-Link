import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  English: {
    dashboard: "Dashboard",
    attendance: "Attendance",
    students: "Students",
    teachers: "Teachers",
    settings: "Settings",
    welcome: "Welcome to",
    search: "Search...",
    total_students: "Total Students",
    present: "Present Today",
    add_student: "Add Student"
  },
  French: {
    dashboard: "Tableau de bord",
    attendance: "Présence",
    students: "Étudiants",
    teachers: "Enseignants",
    settings: "Paramètres",
    welcome: "Bienvenue à",
    search: "Rechercher...",
    total_students: "Total d'étudiants",
    present: "Présent aujourd'hui",
    add_student: "Ajouter un étudiant"
  },
  // Add Spanish and German here following the same pattern
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
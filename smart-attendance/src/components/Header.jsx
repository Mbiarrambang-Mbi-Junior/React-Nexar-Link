import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsSearch,
  BsChevronDown,
  BsChevronRight,
  BsSunFill,
  BsMoonFill,
} from "react-icons/bs";
import { useLanguage } from "./LanguageContext";
import profileImg from "../assets/IMG-20251126-WA0005.jpg";

function Header({ isDarkMode, handleThemeToggle }) {
  const { language, setLanguage, t } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const languages = ["English", "French", "Spanish", "German"];

  const handleLanguageSelect = (lang) => {
    setCurrentLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    // Fixed: 'border-b-2' instead of 'border-bottom-2'
    <header className="flex justify-between items-center bg-gray-100 gap-4 p-3 border-b-2 border-gray-300 shadow-md sticky top-0">
      <h1 className="text-xl font-bold flex gap-2">
        {t('Welcome to')} <span className="text-blue-600">Nexar|Link</span>
      </h1>

      {/* Fixed: 'border' instead of 'border-1'. Added 'bg-white' and 'px-3' */}
      <div className="flex items-center gap-2 border border-gray-400 rounded-xl px-3 py-1 bg-white">
        <input
          type="text"
          placeholder={t("Search...") }
          className="outline-none bg-transparent text-sm w-40 md:w-64"
        />
        <BsSearch className="text-gray-500" />
      </div>

      <div className="relative">
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        >
          {language}
          {isLangDropdownOpen ? <BsChevronDown /> : <BsChevronRight />}
        </div>

        {isLangDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-32 z-50">
            {languages.map((lang) => (
              <div
                key={lang}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                onClick={() => handleLanguageSelect(lang)}
              >
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Added a placeholder circle for the user image */}
        <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden border border-gray-300">
          <img
            src={profileImg}
            alt="current user"
            className="object-cover w-full h-full"
          />
        </div>
        <span className="font-semibold text-gray-700">Admin</span>
      </div>
      <div className="theme-btn">
        <button onClick={handleThemeToggle}>
          {isDarkMode ? (
            <BsSunFill className="text-yellow-300" />
          ) : (
            <BsMoonFill className="text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;

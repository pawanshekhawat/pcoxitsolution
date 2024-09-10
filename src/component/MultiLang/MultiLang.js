import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import './MultiLang.css'

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
  // {
  //   code: 'ed',
  //   name: 'German',
  //   country_code: 'ed',
  // },
  {
    code: 'zh',
    name: 'Chinese',
    country_code: 'zh',
  },
  {
    code: 'es',
    name: 'Spanish',
    country_code: 'es',
  },
  {
    code: 'ja',
    name: 'Japanese',
    country_code: 'ja',
  },
  {
    code: 'th',
    name: 'Thai',
    country_code: 'th',
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    country_code: 'vi',
  },
  {
    code: 'fil',
    name: 'Filipino',
    country_code: 'fil',
  },
  {
    code: 'id',
    name: 'Indonesian',
    country_code: 'id',
  },
]

export default function MultiLang() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';

    // Close the dropdown if the user clicks outside of it
    const handleClickOutside = (event) => {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      if (!event.target.matches('.dropbtn')) {
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };

  }, [currentLanguage, t])

  const myFunction = () => {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  return (
    <div className='dropdown'>
      <button type='button' className='dropbtn' onClick={myFunction}>🌐</button>
      <div id="myDropdown" className='dropdown-content'>
        {languages.map(({ code, name, country_code }) => (
          <a
            key={country_code}
            href="#"
            className={classNames('', {
              disabled: currentLanguageCode === code,
            })}
            onClick={(e) => {
              e.preventDefault();
              i18next.changeLanguage(code)
            }}
          >
            <span
              className={`flag-icon flag-icon-${country_code} mx-2`}
              style={{
                opacity: currentLanguageCode === code ? 0.5 : 1,
              }}
            ></span>
            {name}
          </a>
        ))}
      </div>
    </div>
  )
}

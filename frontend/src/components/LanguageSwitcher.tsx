import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';

const languages = [
  { code: 'tr', name: 'Türkçe' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <Button
        color="inherit"
        startIcon={<LanguageIcon />}
        onClick={handleClick}
        sx={{ textTransform: 'none' }}
      >
        {currentLanguage.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={i18n.language === language.code}
          >
            {language.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher; 
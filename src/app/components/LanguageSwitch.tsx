

export default function LanguageSwitch() {
  return (
    <div className="lang-switch">
      <input
        id="lang-preview-en"
        type="radio"
        name="language-preview"
        defaultChecked
        className="lang-switch__input"
      />
      <input
        id="lang-preview-pl"
        type="radio"
        name="language-preview"
        className="lang-switch__input"
      />

      <span className="lang-switch__thumb" />

      <label htmlFor="lang-preview-en" className="lang-switch__option">
        EN
      </label>
      <label htmlFor="lang-preview-pl" className="lang-switch__option">
        PL
      </label>
    </div>
  );
}
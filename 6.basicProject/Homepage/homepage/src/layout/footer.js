import "./style.css";

function Footer(props) {
  return (
    <div className="footer">
      help
      <LegalSection></LegalSection>
    </div>
  );
}


function LegalSection(props) {
  return (
    <div>
      <span>
        Geshet.io  |  All Rights Reserved © 2022
  Privacy Policy
  Terms & Conditions
  Made with Love by toseek.io | This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </span>
    </div>
  )
}

export default Footer;

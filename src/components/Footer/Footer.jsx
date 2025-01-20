import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} To-Do List. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;

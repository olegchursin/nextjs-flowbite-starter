const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-800 p-8 text-white">
      <div className="container flex-col items-center justify-center text-center">
        <h3>Footer</h3>
        <p>Copyright &copy; {currentYear} OC</p>
      </div>
    </div>
  );
};

export default Footer;

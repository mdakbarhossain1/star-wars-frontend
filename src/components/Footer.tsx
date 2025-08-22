const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 text-center border-t border-gray-800">
      © {new Date().getFullYear()} Star Wars Universe | Contact:{" "}
      <a
        href="mailto:mdakbarhossain16@mail.com"
        className="text-yellow-400 hover:underline"
      >
        mdakbarhossain16@mail.com
      </a>
    </footer>
  );
};

export default Footer;

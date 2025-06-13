import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between py-10 mt-10 gap-15">
        <div className="flex flex-col gap-4 ">
          <img src={assets.logo} className="w-40" alt="" />
          <p className="w-2/3 text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic vel
            ipsum labore ab cumque enim amet autem? Explicabo ea harum fugit
            facilis quo. Quasi, sunt qui ipsam molestiae illo molestias!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-6">COMPANY</h2>
          <ul className="text-sm text-gray-700">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-6">GET IN TOUCH</h2>
          <ul className="text-gray-800">
            <li>+0-000-000-000</li>
            <li>mohammedzain4099@gamil.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-t-gray-200 py-5 text-sm text-gray-800 font-medium">
        Copyright 2025 @ Mohd Zain (mohammedzain4099@gamil.com). All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;

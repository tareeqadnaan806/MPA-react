import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center p-5 bg-slate-300">
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis
        molestiae debitis <br /> est voluptates repudiandae illum facere ratione
        velit distinctio.
      </p>
      <ul className="flex  ">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Carrers</a>
        </li>
        <li>
          <a href="">History</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Peoples</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>

      <ul className="flex ">
        <li>
          <a href="https://github.com/tareeqadnaan806" target="_blank">
            <i class="fa-brands fa-github fa-xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohammed-tareeq-adnaan-4b574a242/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AdnaanTareeq" target="_blank">
            <i class="fa-brands fa-twitter fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook fa-xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCu2gqNFzn3gjxXBcUuQsLyw"
            target="_blank"
          >
            <i class="fa-brands fa-youtube fa-xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tareeq_adnaan_023/"
            target="_blank"
          >
            <i class="fa-brands fa-instagram fa-xl"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

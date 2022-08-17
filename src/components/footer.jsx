const Footer = () => {
  return (
    <div className="container footer-section">
      <div className="footer-columns">
        <img
          class="mb-2"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="24"
          height="24"
        ></img>
        <p>© 2017-2018</p>
      </div>
      <div className="footer-columns">
        <h3>Features</h3>
        <ul>
          <li>Cool stuff</li>
          <li>Random feature</li>
          <li>Stuff for developers</li>
          <li>Another one</li>
          <li>Last time</li>
        </ul>
      </div>
      <div className="footer-columns">
        <h3>Resources</h3>
        <ul>
          <li>Resource</li>
          <li>Resource name</li>
          <li>Another resource</li>
          <li>Another one</li>
          <li>Final resource</li>
        </ul>
      </div>
      <div className="footer-columns">
        <h3>About</h3>
        <ul>
          <li>Team</li>
          <li>Locations</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

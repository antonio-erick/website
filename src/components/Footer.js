import './styling/Footer.css';

function Footer() {
  return(
    <>
      <div id='footer-div-1' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '50%',
      }}>
        <a href='https://github.com/antonio-erick' target="_blank">Github</a>
        <a href='https://twitter.com/im_antonioerick' target='_blank'>Twitter</a>
      </div>
    </>
  )
};

export default Footer;
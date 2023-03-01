import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <p className="copyright">
        @Copyright por Janice Chen, derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
import React from "react";

import classes from "./Contactos.module.css"

const Contactos = () => {
  return (
    <div className={classes.contactos}>
      <Fragment>
      <h2>{content.title}</h2>
      <hr />
      <address>{content.address}</address>
      <address>
        <abbr title="Phone">{content.phone.label}: </abbr>
        {content.phone.value}
        <br />
        <abbr title="Email">{content.email.label}: </abbr>
        <a href={`mailto:${content.email.value}`}>{content.email.value}</a>
      </address>
    </Fragment>
    </div>
  );
};

export default Contactos;

import PropTypes from "prop-types";
import * as Yup from "yup";
import { Button, Link, Container } from "@material-ui/core";
import { Oval } from "@agney/react-loading";
import { Formik, Field, Form } from "formik";
import { FormikTextField } from "formik-material-fields";

import useStyles from "./styles";

const Login = ({ handleFormSubmit, isLoading }) => {
  const classes = useStyles();

  const validationSchema = Yup.object({
    username: Yup.string("Enter your username")
      .min(2, "Username should be of minimum 2 characters length")
      .max(20, "Username should not be longer than 20 characters")
      .required("Username is required"),
    password: Yup.string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .max(20, "Password should not be longer than 20 characters")
      .required("Password is required"),
  });

  return (
    <div className={classes.formContainer}>
      <Formik
        className={classes.root}
        initialValues={{ Username: "", Password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className={classes.form}>
            <Field
              component={FormikTextField}
              className={`${classes.input} ${classes.field}`}
              name='username'
              label='Username'
              InputProps={{
                className: classes.input,
              }}
            ></Field>

            <Field
              component={FormikTextField}
              className={`${classes.input} ${classes.field}`}
              name='password'
              label='Password'
              type='password'
              InputProps={{
                className: classes.input,
              }}
            ></Field>
            {isLoading ? (
              <Container className={`${classes.metaComponent} ${classes.flex}`}>
                <Oval width='100' color='#fff' />
              </Container>
            ) : (
              <Button className={classes.submit} type='submit'>
                Log in
              </Button>
            )}
            <Link className={classes.link} href='/registration'>
              I don't have an account yet
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Login.propTypes = { handleFormSubmit: PropTypes.func };

export default Login;

export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!values.email.includes("gmail")) {
    errors.email = "Email is invalid";
  }
  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password should be at least 6 char long";
  }

  if (!values.password2.trim()) {
    errors.password2 = "Password confirmation required";
  } else if (values.password2 != values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}

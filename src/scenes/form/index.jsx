import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const PhoneRegexp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const userSchema = yup.object({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Email is not Valid").required("required"),
    contact: yup
      .string()
      .required("required")
      .matches(PhoneRegexp, "Phone number is not Valid"),

    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  const isNonMobile = useMediaQuery("min-width : 600px");
  const handeleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box minHeight={"730px"} minWidth={"992px"} m={"20px"}>
      <Header title={"CREATE USER"} subtitle={"Create a New User Profile"} />

      <Formik
        validationSchema={userSchema}
        onSubmit={handeleSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                display={"grid"}
                gap={"30px"}
                gridTemplateColumns={"repeat(4,minmax(0 , 1fr)"}
                sx={{
                  "& >div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && errors.firstName != undefined}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && errors.lastName != undefined}
                  helperText={touched.lastName && errors.firstName}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && errors.email != undefined}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="ContactNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && errors.contact != undefined}
                  helperText={touched.contact && errors.contact}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name="address1"
                  error={!!touched.address1 && errors.address1 != undefined}
                  helperText={touched.address1 && errors.address1}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="address2"
                  error={!!touched.address2 && errors.address2 != undefined}
                  helperText={touched.address2 && errors.address2}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
              </Box>
              <Box display={"flex"} justifyContent={"end"} mt={"20px"}>
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};
export default Form;

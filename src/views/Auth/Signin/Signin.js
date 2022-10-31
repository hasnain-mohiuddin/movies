import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@mui/material";

import { auth } from "../../../firebase";
import urls from "../../../constants/urls";
import { validationSchema } from "../../../schema/Auth";
import {
  createSessionId,
  setSessionId,
} from "../../../services/sessionService";

export default function SignIn() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setErrors }) => {
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then(async () => {
          const { data } = await createSessionId();
          setSessionId(data.guest_session_id);

          navigate("/", { replace: true });
        })
        .catch(() => {
          setErrors({ email: "Invalid Email or Password" });
        });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={urls.signup}>Don&#39;t have an account? Sign up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

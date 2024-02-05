import { Button, InputLabel, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  //const { handleLogin } = useContext(UserContext);
  //const dispatch=useDispatch()

//   const [errMsg, setErrMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          backgroundColor: "#f8f9fa",
          borderRaduis: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          width: "80%",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#337ab6",
            color: "white",
            height: "45px",
          }}
        >
          <h2 style={{ fontSize: "1.5em" }}>Login</h2>
        </div>
        <br />
        <div>
          <InputLabel style={{ color: "black", paddingRight: "310px" }}>
            User Id:
          </InputLabel>
          <Controller
            name="userId"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                error={!!errors.userName}
                helperText={errors.userName ? "User Name is required" : ""}
                FormHelperTextProps={{
                  style: {
                    color: "red",
                  },
                }}
              ></TextField>
            )}
          ></Controller>
        </div>
        <br />
        <div>
          <InputLabel style={{ color: "black", paddingRight: "320px" }}>
            Password:
          </InputLabel>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true, minLength: 5, maxLength: 10 }}
            render={({ field }) => (
              <TextField
                fullWidth
                type="password"
                {...field}
                error={!!errors.password}
                helperText={
                  errors.password
                    ? "Password must be 5 to 10 characters long."
                    : ""
                }
                FormHelperTextProps={{
                  style: {
                    color: "red",
                  },
                }}
              ></TextField>
            )}
          ></Controller>
        </div>
        <br />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <br />
          {/* {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
          {errMsg && <p style={{ color: "red" }}>{errMsg}</p>} */}
        </div>
      </form>
    </>
  );
};

export default Login;

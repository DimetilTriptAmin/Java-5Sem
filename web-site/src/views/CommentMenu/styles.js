import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#242322",
    },
  },
  menuItem: {
    color: "#fff",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
  },
  flex: {
    display: "flex",
  },
  title: {
    display: "none",
    alignSelf: "center",
    margin: "0 10px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#fff",
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    boxShadow: "0px 0px 20px black",
  }
}));

export default useStyles;

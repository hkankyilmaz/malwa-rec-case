import ErrorIcon from "@mui/icons-material/Error";

export default function ErrMessage({ message }) {
  return (
    <p className="text-xs text-red-900 ml-1">
      <ErrorIcon
        sx={{
          marginRight: "3px",
          color: "#ff9999",
          fontSize: "17px",
        }}
      />
      {message}
    </p>
  );
}

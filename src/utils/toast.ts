import { toast } from "react-toastify"

export const toastError = (message:string)=> toast.error(message, {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "light",
  pauseOnFocusLoss: false
  });
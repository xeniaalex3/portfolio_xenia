import { Snackbar, SnackbarCloseReason } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'

export interface ToastProps {
  toast?: {
    type: 'success' | 'error'
    message: string
  } | null
  setToast?: (toast: ToastProps['toast']) => void
  open?: boolean
  setOpen?: (open: boolean) => void
}

function Toast({ toast, setToast, open, setOpen }: ToastProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    if (setToast) setToast(null);
    if (setOpen) setOpen(false);
  };

  let icon: React.ReactNode = null;
  switch (toast?.type) {
    case "success":
      icon = (
        <div className="flex-shrink-0">
          <CheckCircleOutlineIcon
            className="h-6 w-6 mr-2 text-green-400"
            aria-hidden="true"
          />
        </div>
      );
      break;
    case "error":
      icon = (
        <div className="flex-shrink-0">
          <WarningAmberIcon
            className="h-6 w-6 mr-2 text-red-400"
            aria-hidden="true"
          />
        </div>
      );
      break;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={3500}
      message={toast?.message}
      onClose={handleClose}
    >
      <div className="w-96 pointer-events-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            {icon}
            <p className="mt-1 text-sm text-gray-500">{toast?.message}</p>
          </div>
        </div>
      </div>
    </Snackbar>
  )
}

export default Toast

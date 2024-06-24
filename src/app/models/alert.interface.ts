type AlertColor = "green" | "red" | "";

export interface Alert {
  title: string,
  description: string,
  color: AlertColor
}

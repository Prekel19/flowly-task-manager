export enum UserErrors {
  WRONG_PASSWORD = "auth/wrong-password",
  INVALID_CREDENTIAL = "auth/invalid-credential",
  USER_NOT_FOUND = "auth/user-not-found",
  INVALID_EMAIL = "auth/invalid-email",
  NETWORK_REQUEST_FAILED = "auth/network-request-failed",
}

export enum PopupErrors {
  POPUP_CLOSED_BY_USER = "auth/popup-closed-by-user",
  CANCELLED_POPUP_REQUEST = "auth/cancelled-popup-request",
  POPUP_BLOCKED = "auth/popup-blocked",
  ACCOUNT_EXIST_WITH_DIFFRENT_CREDENTIAL = "auth/account-exists-with-different-credential",
  OPERATION_NOT_ALLOWED = "auth/operation-not-allowed",
}

export enum RegisterErrors {
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  INVALID_EMAIL = "auth/invalid-email",
  WEAK_PASSWORD = "auth/weak-password",
  PERMISSION_DENIED = "permission-denied",
  NOT_FOUND = "not-found",
}

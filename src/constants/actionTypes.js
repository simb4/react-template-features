/* ================	*/
/* 	AUTH ACTIONS	*/
/* ================	*/

// Related to Login.
export const ACTION_LOGIN = {
	started: "LOGIN_STARTED",
	success: "LOGIN_SUCCESS",
	failed: "LOGIN_FAILED",
}

export const ACTION_FORGOT_PASSWORD = {
	started: "FORGOT_PASSWORD_STARTED",
	success: "FORGOT_PASSWORD_SUCCESS",
	failed: "FORGOT_PASSWORD_FAILED",
}

export const ACTION_RESET_PASSWORD = {
	started: "RESET_PASSWORD_STARTED",
	success: "RESET_PASSWORD_SUCCESS",
	failed: "RESET_PASSWORD_FAILED",
}

export const ACTION_CHANGE_PASSWORD = {
	started: "CHANGE_PASSWORD_STARTED",
	success: "CHANGE_PASSWORD_SUCCESS",
	failed: "CHANGE_PASSWORD_FAILED",
}


export const ACTION_LOGOUT = {
	started: "LOGOUT_STARTED",
	failed: "LOGOUT_FAILED",
	success: "LOGOUT_SUCCESS",
}

export const ACTION_INVALID_TOKEN = "INVALID_TOKEN"

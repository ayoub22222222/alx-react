
export const getFullYear = () => {
	return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
	if (typeof isIndex === "boolean"){
		return "Holberton School";
	} else {
		return "Holberton School main dashboard";
	}
}

export function getLatestNotification() {
	return "<strong>Urgent requirement</strong> - complete by EOD"
}

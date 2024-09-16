import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


test('what this test is doing', () => {
	expect(getFullYear()).toBe(2024)

});


test('check that getFooterCopy returns the correct string when the argument is true or false', () => {
	expect(getFooterCopy(true)).toBe("Holberton School");
	expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
});

test("return the right notification", () => {
	expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});


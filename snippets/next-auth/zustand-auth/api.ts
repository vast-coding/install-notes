import {getActions, getAccessToken} from './auth-store'
import {z} from "zod";

const {setAcccessToken, setRefreshToken} = getActions();

const signIn = async () => {
	const response = await fetch('/api/authentication/sign-in', {
		method: "POST",
		body: JSON.stringify({
			email: "test@gmail.com",
			password: "password123"
		})
	});

	const accessToken = response.headers.get('x-acess-token');
	const refreshToken = response.headers.get('x-refresh-token');
	setAccessToken(accessToken);
	setRefreshToken(refreshToken);
}

export const User = z.object({
	id: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
});

export const fetchUser = async (userId: string) => {
	const response = await fetch(`/api/users/${userId}`, {
		method: "GET",
		headers: {
			'x-access-token': getAccessToken(),
		}
	});

	return User.parse(await response.json());
}
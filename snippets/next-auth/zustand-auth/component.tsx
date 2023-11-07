import {useAccessToken} from './auth-store.ts'
import { fetchUser } from './api.ts'

const useToken = () => {
	const data = useAccessToken();

	if (data === undefined) {
		throw new UnauthenticatedError()
	}

	return data
}

const Components = () => {
	const {userId} = useToken();

	const user = fetchUser(userId);

	/* ... */
}
import { computeZkLoginAddress } from '@mysten/sui/zklogin';
 
const address = computeZkLoginAddress({
	claimName,
	claimValue,
	iss,
	aud,
	userSalt: BigInt(salt),
});
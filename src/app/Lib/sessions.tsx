// access to server only
import "server-only";

// imports JWT sign and verify functions
// access server-side cookie store
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

// fetch secret key
const secretKey = process.env.SESSION_SECRET;

// encode secret
const encodedKey = new TextEncoder().encode(secretKey);

// encrypt
export async function encrypt(payload){
    // create and sign JWT
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey)
};

// decrypt 
export async function decrypt(session){
    try{
        // verify JWT and extract payload
        const {payload} = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    }
    catch (error){
        console.log("Failed to verify sessions!");
    }
};

// create session
export async function createSession(userId){
    // calculate expiration time
    const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // create signed session token
    const session = await encrypt({userId, expireAt});

    // creating cookie
    const cookieStore = await cookies();

    // cookie store
    cookieStore.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expireAt,
        sameSite: "lax",
        path: "/",
    });
};
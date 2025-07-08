// access to server only
import "server-only";

// first import jwtVerify and SignJWT | cookies
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

// second fetch secret key
const secretKey = process.env.SECRET_SESSION;

// third encode secret key
const encodedKey = new TextEncoder().encode(secretKey);

// fourth encrypt
export async function encrypt(payload){
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime()
        .sign(encodedKey)
};

// fifth decrypt
export async function decrypt(session){
    try{
        const {payload} = await jwtVerify(session, secretKey, {
            algorithms: ["HS256"]
        });
    }
    catch{
        console.log("Failed to verify session");
    }
};

// sixth create session
async function createSession(){
    // calculate expiration time
    const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 10000);

    // create signed session token
    const session = await encrypt({userId, expireAt});

    // creating cookie
    const cookieStore = cookies();

    // cookie store
    cookieStore.set("session", session{
        httpOnly: true,
        secure: true,
        expires: expireAt,
        sameSite: "lax",
        path: "/"
    });
};

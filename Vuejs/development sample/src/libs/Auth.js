export const JwtDecode = token => {
    return JSON.parse(atob(token.split('.')[1]));
}

export const JwtPayload = token => {
    return JwtDecode(token);
}
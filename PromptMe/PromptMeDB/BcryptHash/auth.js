import bcrypt from "bcrypt";

export const hashPassword = (password) => {
    return new Promise((resole, reject) => {
        bcrypt.genSalt(2, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
}
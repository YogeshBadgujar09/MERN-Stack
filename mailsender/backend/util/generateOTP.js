// function generateOTP() {

//   const otp = Math.floor(100000 + Math.random() * 900000);
//   const expiresAt = new Date(Date.now() + 1 * 60 * 1000); // 1 minutes

//   return { otp, expiresAt };

// }
module.exports = function generateOTP() {

    const otp = Math.floor(100000 + Math.random() * 900000);
    return  otp ;
};

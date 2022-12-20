const  HttpStatusCode = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    FOUND: 302,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}

const STATUS_MSG = {
    ERROR: {
        TOKEN_EXPIRED: {
            statusCode: 401,
            customMessage: 'Sorry, your account has been logged in other device! Please login again to continue.',
            type: 'TOKEN_ALREADY_EXPIRED'
        },
        BLOCKED: {
            statusCode: 405,
            customMessage: 'This account is blocked by Admin. Please contact support team to activate your account.',
            type: 'BLOCKED'
        },
        ADMIN_APPROVAL_PENDING: {
            statusCode: 400,
            customMessage: 'Sorry! Please wait your account is admin under approval.',
            type: 'ADMIN_APPROVAL_PENDING'
        },
        ADMIN_APPROVAL_IS_REJECTED: {
            statusCode: 400,
            customMessage: 'Sorry! You can\'t login your account approval is rejected by admin. please contact us with support.',
            type: 'ADMIN_APPROVAL_IS_REJECTED'
        },
        DELETED: {
            statusCode: 405,
            customMessage: 'This account is deleted by Admin. Please contact support team to activate your account.',
            type: 'DELETED'
        },
        DRIVER_MISSING_REGION: {
            statusCode: 405,
            customMessage: 'Sorry! You can\'t login until a region is assigned to you. Please contact the admin to assign you suitable region.',
            type: 'DRIVER_MISSING_REGION'
        },
        LOGIN_RESTRICTED: {
            statusCode: 405,
            customMessage: 'Sorry! The phone number you are trying to login with is registered as',
            type: 'LOGIN_RESTRICTED'
        },
        NOT_EXPIRE: {
            statusCode: 400,
            customMessage: 'Sorry! This bookings is not expired',
            type: 'NOT_EXPIRE'
        },
        DB_ERROR: {
            statusCode: 400,
            customMessage: 'DB Error : ',
            type: 'DB_ERROR'
        },
        AUTHORIZE_RECORD_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'It will take some time to create your profile at Authorize.net. Please wait and try' +
                ' again after 5 minutes',
            type: 'AUTHORIZE_RECORD_NOT_FOUND'
        },
        CSV_NO_DATA: {
            statusCode: 400,
            customMessage: 'No data found to export',
            type: 'CSV_NO_DATA'
        },
        INVALID_PASSWORD: {
            statusCode: 400,
            customMessage: 'Password you have entered does not match.',
            type: 'INVALID_PASSWORD'
        },
        ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Phone Number you have entered is already registered with us.',
            type: 'ALREADY_EXIST'
        },
        EMAIL_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Email address you have entered is already linked with other account.',
            type: 'EMAIL_ALREADY_EXIST'
        },
        VIN_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Vin number already exist.',
            type: 'VIN_ALREADY_EXIST'
        },

        INVALID_USER: {
            statusCode: 400,
            customMessage: 'Invalid user',
            type: 'INVALID_USER'
        },

        IMP_ERROR: {
            statusCode: 500,
            customMessage: 'Implementation error',
            type: 'IMP_ERROR'
        },
        SOMETHING_WENT_WRONG: {
            statusCode: 500,
            customMessage: 'Something went wrong',
            type: 'SOMETHING_WENT_WRONG'
        },
        APP_ERROR: {
            statusCode: 400,
            customMessage: 'Application Error',
            type: 'APP_ERROR'
        },
        NOT_EXIST: {
            statusCode: 400,
            customMessage: 'You have not registered yet.',
            type: 'NOT_EXIST'
        },
        ALREADY_REGISTER: {
            statusCode: 400,
            customMessage: 'You are already registered,Please login with same to continue',
            type: 'ALREADY_REGISTER'
        },
        CHECK_STATUS: {
            statusCode: 400,
            customMessage: 'Please check the latest status for this order.',
            type: 'CHECK_STATUS'
        },
        CANTCANCEL: {
            statusCode: 400,
            customMessage: 'You can\'t cancelled the ongoing order.',
            type: 'CANTCANCEL'
        },
        CANTBLOCK: {
            statusCode: 400,
            customMessage: 'Can\'t block this driver as the order is going on.',
            type: 'CANTBLOCK'
        },
        ALREADY_CANCEL: {
            statusCode: 400,
            customMessage: 'This order is already canceled.',
            type: 'ALREADY_CANCEL'
        },
        NOT_CANCEL: {
            statusCode: 400,
            customMessage: 'This order is not canceled.',
            type: 'NOT_CANCEL'
        },
        INVALID_ID: {
            statusCode: 400,
            customMessage: 'Invalid Id Provided : ',
            type: 'INVALID_ID'
        },
        DUPLICATE: {
            statusCode: 400,
            customMessage: 'Duplicate Entry',
            type: 'DUPLICATE'
        },
        INVALID_PHONE: {
            statusCode: 400,
            customMessage: 'The phone number you have entered does not match.',
            type: 'INVALID_PHONE'
        },
        INVALID_EMAIL: {
            statusCode: 400,
            customMessage: 'The email you have entered does not match.',
            type: 'INVALID_EMAIL'
        },
        TRUCK_ALREADY: {
            statusCode: 400,
            customMessage: 'This truck is already selected by another driver.',
            type: 'TRUCK_ALREADY'
        },
        INVALID_CODE: {
            statusCode: 400,
            customMessage: 'OTP you have entered does not match.',
            type: 'INVALID_CODE'
        },
        INVALID_PHONE_NO_CODE: {
            statusCode: 400,
            customMessage: 'phone OTP you have entered does not match.',
            type: 'INVALID_PHONE_NO_CODE'
        },
        INVALID_EMAIL_CODE: {
            statusCode: 400,
            customMessage: 'Email OTP you have entered does not match.',
            type: 'INVALID_EMAIL_CODE'
        },
        INVALID_REFER_CODE: {
            statusCode: 400,
            customMessage: 'Invalid Refer Code',
            type: 'INVALID_REFER_CODE'
        },
        COUNTRY_NAME: {
            statusCode: 400,
            customMessage: 'Country name you have entered is already exist.',
            type: 'COUNTRY_NAME'
        },
        STATE_NAME: {
            statusCode: 400,
            customMessage: 'State name you have entered is already exist.',
            type: 'STATE_NAME'
        },
        ZIP_CODE: {
            statusCode: 400,
            customMessage: 'Zip code you have entered already exist.',
            type: 'ZIP_CODE'
        },
        COUNTY: {
            statusCode: 400,
            customMessage: 'county you have entered already exist.',
            type: 'COUNTY'
        },
        NOT_SERVING_IN_AREA: {
            statusCode: 400,
            customMessage: "We are not serving in this area",
            type: 'NOT_SERVING_IN_AREA'
        },
        NOT_SERVING_IN_AREAV2: {
            statusCode: 400,
            /* customMessage : "Allow 2-3 days for our team to reach out to you about your submitted location. If this is not a Gas It Up location, please allow 10-12 days for us to reach out to you", */
            customMessage: "Currently we are not operating in the current location, our operations team will reach out to you for services soon!",
            type: 'NOT_SERVING_IN_AREA'
        },
        MSG_NOT_SERVING_IN_AREAV2_REQUEST_ALREADY_SUBMITTED: {
            statusCode: 400,
            customMessage: "Your request is already submitted.",
            type: 'MSG_NOT_SERVING_IN_AREAV2_REQUEST_ALREADY_SUBMITTED'
        },
        NO_USER_VEHICLES: {
            statusCode: 400,
            customMessage: 'There are no vehicles added for your profile. Please add vehicles first for Order',
            type: 'NO_USER_VEHICLES'
        },
        INSTANT_BOOKING_NOT_ALLOWED: {
            statusCode: 400,
            customMessage: 'Multiple instant orders are not allowed at one time.',
            type: 'INSTANT_BOOKING_NOT_ALLOWED'
        },
        INSTANT_BOOKING_NOT_RECUR: {
            statusCode: 400,
            customMessage: 'Instant order can not be recurred.',
            type: 'INSTANT_BOOKING_NOT_RECUR'
        },
        SERVICE_NOT_AVAILABLE: {
            statusCode: 400,
            customMessage: 'Sorry!! We are not serving in your area.',
            type: 'SERVICE_NOT_AVAILABLE'
        },
        NOT_IN_LOCATION: {
            statusCode: 400,
            customMessage: `Sorry!! You are not in location to accept this booking.`,
            type: 'NOT_IN_LOCATION'
        },
        PAYMENT_METHOD_NOT_SUPPORTED: {
            statusCode: 400,
            customMessage: "This payment method is not supported by Gas it up",
            type: 'PAYMENT_METHOD_NOT_SUPPORTED'
        },
        PAYMENT_FAILED: {
            statusCode: 400,
            customMessage: "Payment failed",
            type: 'PAYMENT_FAILED'
        },
        INVALID_RECURRING_TIME: {
            statusCode: 400,
            customMessage: 'Sorry!! You can not recur order for the provided time.',
            type: 'INVALID_RECURRING_TIME'
        },
        ZIP_CODE_NOT: {
            statusCode: 400,
            customMessage: 'Zip code you have entered does not exist.',
            type: 'ZIP_CODE_NOT'
        },
        TRUCK_NUM: {
            statusCode: 400,
            customMessage: 'Truck registration number you have entered is already exist.',
            type: 'TRUCK_NUM'
        },
        INVALID_TOKEN: {
            statusCode: 400,
            customMessage: 'The token you have entered does not match.',
            type: 'INVALID_TOKEN'
        },
        USER_DISABLED: {
            statusCode: 400,
            customMessage: 'Your account has been disabled by admin. Please contact to support',
            type: 'USER_DISABLED'
        },
        SAME_PASSWORD: {
            statusCode: 400,
            customMessage: 'Old password and new password can\'t be same',
            type: 'SAME_PASSWORD'
        },
        ZIP_NOTFOUND: {
            statusCode: 400,
            customMessage: 'Sorry we are not serving in your area right now',
            type: 'ZIP_NOTFOUND'
        },
        ADD_CARD_FIRST: {
            statusCode: 400,
            customMessage: 'Please add the card to purchase the membership.',
            type: 'ADD_CARD_FIRST'
        },
        INCORRECT_OLD_PASSWORD: {
            statusCode: 400,
            customMessage: 'Old password you have entered does not match.',
            type: 'INCORRECT_OLD_PASSWORD'
        },
        SOCIAL_LOGIN: {
            statusCode: 400,
            customMessage: 'You are login with social platform, hence not able to use this option.',
            type: 'SOCIAL_LOGIN'
        },
        INVALID_COUPON_CODE: {
            statusCode: 400,
            type: 'INVALID_COUPON_CODE',
            customMessage: 'Invalid coupon code'
        },
        BOOKING_ACCEPT: {
            statusCode: 400,
            type: 'BOOKING_ACCEPT',
            customMessage: 'This request is already accepted by other driver.'
        },
        NOT_GOING_ON_THE_WAY: {
            statusCode: 400,
            type: 'NOT_GOING_ON_THE_WAY',
            customMessage: 'You can\'t en route an order before its scheduled time.'
        },
        CAN_NOT_ASSIGN: {
            statusCode: 400,
            type: 'CAN_NOT_ASSIGN',
            customMessage: 'You can\'t assign an order before its scheduled time.'
        },

        CAN_NOT_ACCEPT: {
            statusCode: 400,
            type: 'CAN_NOT_ACCEPT',
            customMessage: 'You can\'t accept an order before its scheduled time.'
        },
        ON_THE_WAY_WITH_ENROUTE_BOOKING: {
            statusCode: 400,
            type: 'ON_THE_WAY_WITH_ENROUTE_BOOKING',
            customMessage: 'Sorry! You already have an order which is in process. You can only en-route another after completing the current order.'
        },
        LIDNOTOPEN: {
            statusCode: 400,
            type: 'LIDNOTOPEN',
            customMessage: 'Lid charges has already been charged the user for this order.'
        },
        CANTLOGOUT: {
            statusCode: 400,
            type: 'CANTLOGOUT',
            customMessage: 'You can\'t go off duty as you have a on going order.'
        },
        COUPON_LIMIT: {
            statusCode: 400,
            type: 'COUPON_LIMIT',
            customMessage: 'Coupon code reach the limit.'
        },
        WALLET_AMOUNT: {
            statusCode: 400,
            type: 'WALLET_AMOUNT',
            customMessage: 'Wallet balance does not match with the balance we have on our system. Somebody might have tried to mislead the data. We will update it with correct one.'
        },
        COUPON_EXPIRED: {
            statusCode: 400,
            type: 'COUPON_EXPIRED',
            customMessage: 'Promo code you are trying to acquire has been expired.'
        },
        ALREADY_RATE: {
            statusCode: 400,
            type: 'ALREADY_RATE',
            customMessage: 'You already rate this driver.'
        },
        MINIMUM_AMOUNT: {
            statusCode: 400,
            type: 'MINIMUM_AMOUNT',
            customMessage: 'To acquire this promo minimum amount for order should be greater that.'
        },
        ERROR_WHILE_AUTHORIZING_AMOUNT: {
            statusCode: 400,
            type: 'ERROR_WHILE_AUTHORIZING_AMOUNT',
            customMessage: 'We were unable to verify you card details'
        },
        ALREADY_USED_BY_YOU: {
            statusCode: 400,
            type: 'ALREADY_USED_BY_YOU',
            customMessage: 'You have already acquired the selected promo code.'
        },
        SAME_CARD: {
            statusCode: 400,
            type: 'SAME_CARD',
            customMessage: 'You cannot enter same card twice.'
        },
        SAME_BANK: {
            statusCode: 400,
            type: 'SAME_BANK',
            customMessage: 'You cannot enter same bank account number twice.'
        },


        ALREADY_ENDED: {
            statusCode: 400,
            type: 'ALREADY_ENDED',
            customMessage: 'This booking already has been ended.'
        },
        CANT_DELETE: {
            statusCode: 400,
            type: 'CANT_DELETE',
            customMessage: 'This card can\'t be deleted as you have an on going order.'
        },
        CANT_REJECT: {
            statusCode: 400,
            type: 'CANT_REJECT',
            customMessage: 'You cannot reject booking after it is started.'
        },
        ALREADY_ENDED: {
            statusCode: 400,
            type: 'ALREADY_ENDED',
            customMessage: 'This booking already has been ended.'
        },
        CANT_DELETE_VEHICLE: {
            statusCode: 400,
            type: 'CANT_DELETE_VEHICLE',
            customMessage: 'This vehicle can\'t be deleted as you have an on going order.'
        },

        CANT_DELETE_SOME_VEHICLE: {
            statusCode: 400,
            type: 'CANT_DELETE_SOME_VEHICLE',
            customMessage: 'Some vehicles can\'t be deleted as you have an on going order in those vehicle.'
        },
        TRANSACTION_UNSUCCESSFUL: {
            statusCode: 400,
            type: 'TRANSACTION_UNSUCCESSFUL',
            customMessage: 'Transaction was unsuccessful please try again to end order.'
        },
        EMAIL_NOT_FOUND: {
            statusCode: 400,
            type: "EMAIL_NOT_FOUND",
            customMessage: "Sorry, email not found. "
        },
        NOT_GET_TCS_RESPONSE: {
            statusCode: 400,
            type: "NOT_GET_TCS_RESPONSE",
            customMessage: "We will not get any response from station so you could wait or contact to admin"
        },
        ATTACHED_VEHICLES_TO_LOCATION: {
            statusCode: 400,
            type: "ATTACHED_VEHICLES_TO_LOCATION",
            customMessage: "You have vehicles added for this location. Please update the corresponding vehicle(s) location to delete this location."
        }

    },
    SUCCESS: {
        CREATED: {
            statusCode: 200,
            customMessage: 'Created Successfully',
            type: 'CREATED'
        },
        DEFAULT: {
            statusCode: 200,
            customMessage: 'Success',
            type: 'DEFAULT'
        },
        UPDATED: {
            statusCode: 200,
            customMessage: 'Updated Successfully',
            type: 'UPDATED'
        },
        LOGOUT: {
            statusCode: 200,
            customMessage: 'Logged Out Successfully',
            type: 'LOGOUT'
        },
        DELETED: {
            statusCode: 200,
            customMessage: 'Deleted Successfully',
            type: 'DELETED'
        },
        REGISTER: {
            statusCode: 200,
            customMessage: 'Register Successfully',
            type: 'REGISTER'
        }
    }
};

const swaggerDefaultResponseMessages = {
    '200': { 'description': 'Success' },
    '400': { 'description': 'Bad Request' },
    '401': { 'description': 'Unauthorized' },
    '404': { 'description': 'Data Not Found' },
    '500': { 'description': 'Internal Server Error' }
};

module.exports = {HttpStatusCode , swaggerDefaultResponseMessages , STATUS_MSG};

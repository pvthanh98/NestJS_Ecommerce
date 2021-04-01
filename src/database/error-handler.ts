import { BadRequestException } from "@nestjs/common";

export const catchError = error => {
    console.log(error);
    switch(error.code) {
        case "ER_BAD_FIELD_ERROR" :{
            throw new BadRequestException({
                code:"ER_BAD_FIELD_ERROR",
                message: error.sqlMessage
            })
        }

        case "ER_NO_DEFAULT_FOR_FIELD":{
            throw new BadRequestException ({
                code:"ER_NO_DEFAULT_FOR_FIELD",
                message:error.sqlMessage
            })
        }

        case "ER_DUP_ENTRY": {
            throw new BadRequestException({
                code: "ER_DUP_ENTRY",
                message: "Duplicated unique value"
            })
        }

        default :{
            throw new BadRequestException({
                code:"OTHERS",
                message: error.sqlMessage
            })
        }
    }
}
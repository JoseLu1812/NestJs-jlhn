import { IsInt, IsString, Max} from "class-validator";

export class CreateMonumentoDto {
    
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsString({
        message: 'The country Code must be a string.'
    })
    code: string;

    @IsString({
        message: 'The country name must be a string'
    })
    country: string;

    @IsString({
        message: 'The city name must be a string'
    })
    city: string;

    @IsString({
        message: 'The locations must be a string'
    })
    location: string;

    @IsString({
        message: 'The description must be a string'
    })
    @Max(500, {
        message: 'The description has the maximun size of 500 values'
    })
    desc: string;

    @IsString({
        message: 'The url path must be a string'
    })
    url: string;

}

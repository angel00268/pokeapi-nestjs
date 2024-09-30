import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @Min(1)
    @IsInt()
    @IsPositive()
    no: number;
    
    @IsString()
    @MinLength(1)
    name: string;
}

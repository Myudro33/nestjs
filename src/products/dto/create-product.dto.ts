import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
  @IsNumber()
  @IsNotEmpty()
  stock: number;
  @IsString()
  @IsOptional()
  description: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Email of User' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Name of User' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Define if user is admin', default: false })
  @IsBoolean()
  admin: boolean;
}

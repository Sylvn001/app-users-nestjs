import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Title of post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Content of Post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ description: 'Email of author of Post' })
  @IsEmail()
  authorEmail: string;
}

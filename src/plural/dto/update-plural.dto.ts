import { PartialType } from '@nestjs/swagger';
import { CreateCreatureDto } from './create-plural.dto';

export class UpdatePluralDto extends PartialType(CreateCreatureDto) {}
